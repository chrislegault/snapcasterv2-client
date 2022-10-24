import React, {useEffect} from 'react';
import { useAtomValue, useAtom } from 'jotai';
import { bulkCardResultsAtom, expectedBulkCardCountAtom, missingCardNamesAtom, selectedCatalogRowsAtom } from '../atoms';

export default function BulkSearchResultsInfo({numResults}) {
  const missingCardNames = useAtomValue(missingCardNamesAtom);
  const dummyMissingCards = ['Foil Island', 'Austere Command'];
  const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(selectedCatalogRowsAtom);
  const expectedBulkCardCount = useAtomValue(expectedBulkCardCountAtom);
  let totalPriceOfSelectedCards = 0;
  // we need to recalculate the price of selected cards every time the selectedCatalogRows atom changes
  useEffect(() => {
    console.log("selectedCatalogRows changed");
    // recalculate the price of selected cards
    totalPriceOfSelectedCards = selectedCatalogRows.reduce((acc, row) => {
      try{
      return acc + row.selectedVariant.price;
      } catch (e) {
        return acc}
    }, 0);

  }, [selectedCatalogRows]);



  return (
    <div className="bg-gray-100 dark:bg-darkerBackground rounded-md p-1 md:p-3">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <div className="text-sm md:text-base font-bold">Results</div>
          <div className="text-xs md:text-sm">{numResults} of {expectedBulkCardCount} cards found</div>
          <div className="text-xs md:text-sm">{selectedCatalogRows.length} cards selected</div>
          <div className="text-xs md:text-sm">Price of selected: ${totalPriceOfSelectedCards}</div>
          <div className="text-xs md:text-sm">
            We couldn't any results for these cards:
          </div>
          <div className="bg-gray-500 dark:bg-gray-700 rounded-md p-1 md:p-3">
            {missingCardNames.map((card, index) => (
              <div className="text-xs md:text-sm" key={index}>
                {card}
              </div>
            ))}
            </div>
          </div> {/* end of column */}
      </div>
    </div>
 );
}
