import React, { useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  selectedBulkStoresAtom,
  bulkCardInputAtom,
  bulkCardResultsAtom,
  expectedBulkCardCountAtom,
  missingCardNamesAtom,
  selectedCatalogRowsAtom,
} from '../atoms';
import StoreRadioButtons from './StoreRadioButtons';
import BulkSearchTextField from './BulkSearchTextField';
import axios from 'axios';

export default function MultiSearchForm() {
  const selectedStores = useAtomValue(selectedBulkStoresAtom);
  const bulkCardInput = useAtomValue(bulkCardInputAtom);
  const setBulkCardResults = useSetAtom(bulkCardResultsAtom);
  const [loading, setLoading] = useState(false);
  const setExpectedBulkCardCount = useSetAtom(expectedBulkCardCountAtom);
  const setMissingCardNames = useSetAtom(missingCardNamesAtom);
  const setSelectedCatalogRows = useSetAtom(selectedCatalogRowsAtom);

  const handleSearch = () => {
    setLoading(true);
    // create an array with an item for each line of the bulkCardInput
    // we also need to strip out any empty lines, trim whitespace, and remove duplicates
    // and strip any numbers from the beginning of the line, this includes
    // things like '2x' or '5 x ' for quantities

    // if the line just says "Sideboard" or "Deck", we'll ignore it
    const cardNames = bulkCardInput
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .filter((line, index, self) => self.indexOf(line) === index)
      // replace quanitty numbers infront
      .map(line => line.replace(/^\d+\s*/, ''))
      .map(line => line.replace(/^\d+x\s*/, ''))
      // if there are any single slashes like " / ", we'll replace them with " // "
      .map(line => line.replace(/ \/ /g, ' // '))
      // strip "*F*" off any lines that have it
      .map(line => line.replace(/\*F\*/g, ''))
      // strip each line
      .map(line => line.trim())
      .filter(line => line !== 'Sideboard')
      .filter(line => line !== 'Deck');


    // set the expected card count
    setExpectedBulkCardCount(cardNames.length);


    // const cardNames = bulkCardInput.split('\n');
    // make the request to the backend using axios
    const requestBody = {
      cardNames,
      websites: selectedStores,
      worstCondition: 'DMG',
    };

  

    axios
      .post(`${import.meta.env.VITE_API_URI}/search/bulk/`, {
        cardNames,
        websites: selectedStores,
        worstCondition: 'DMG',
      })
      .then(response => {
        setLoading(false);
        console.log(response.data)
        // we need to find the cheapest variant for each card, and set that as the selected variant
        const cardResults = response.data.map(card => {
          // sort the variants by price
          const sortedVariants = card.variants.sort(
            (a, b) => a.price - b.price,
          );
          // set the cheapest variant as the selected variant
          const cheapestVariant = sortedVariants[0];
          return {
            ...card,
            variants: sortedVariants,
            selectedVariant: cheapestVariant,
          }
        });
        console.log("setBulkCardResults ", cardResults)
        setBulkCardResults(cardResults);
        // response.data is an array of card objects
        // {
        //   cardName,
        //   variantArray
        // }
        // we need to find which names in cardNames are missing from the response card objects
        // compare them all using lowercase
        const missingCardNames = cardNames.filter(
          cardName =>
            !response.data.some(
              cardObject => cardObject.cardName.toLowerCase() === cardName.toLowerCase()
            )
        );
        setMissingCardNames(missingCardNames);
      });
  };
  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
        <div role="status" className="flex flex-row justify-center mt-5">
          <div className="text-md mr-3">
            Loading...
          </div>
          <svg
            className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="text-sm">
          This may take a while, depending on how many cards you're searching for.
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col p-2">
            <label className="text-sm font-bold mb-2">
              Select stores to search
            </label>
            <StoreRadioButtons />
          </div>

          {/* Card List Text Field */}
          <BulkSearchTextField />

          {/* Search button */}
          <div className="flex flex-col p-2">
            <button
              className="btn"
              onClick={handleSearch}
              type="submit"
            >
              Search
            </button>
          </div>
        </>
      )}
    </div>
  );
}
