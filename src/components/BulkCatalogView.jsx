import React, {useEffect} from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { 
    bulkCardResultsAtom,
    expectedBulkCardCountAtom,
    missingCardNamesAtom,
    selectedCatalogRowsAtom,
    selectedCatalogRowsPriceAtom,
    selectedBulkInfoAtom

} from '../atoms'
import BulkCatalogRow from './BulkCatalogRow'
import BulkSearchResultsInfo from './BulkSearchResultsInfo'

export default function BulkCatalogView() {
    const [bulkCardResults, setBulkCardResults] = useAtom(bulkCardResultsAtom);
    const setExpectedBulkCardCount = useSetAtom(expectedBulkCardCountAtom);
    const setMissingCardNames = useSetAtom(missingCardNamesAtom);
    const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(selectedCatalogRowsAtom);

    const handleReset = () => {
        setBulkCardResults(null);
        setExpectedBulkCardCount(0);
        setMissingCardNames([]);
        setSelectedCatalogRows([]);
    }

    useEffect(() => {
        // every time we update bulkCardResults we need to update the selectedCatalogRows

        // for every card in selectedCatalogRows, make sure is matches the info in bulkCardResults
        setSelectedCatalogRows(selectedCatalogRows.map((row) => {
            // find the card in bulkCardResults that matches the cardName
            const card = bulkCardResults.find((card) => card.cardName === row.cardName);
            // if the card is not found, return the row
            if (!card) return row;
            // if the card is found, return the card
            return card;
        }));
    }, [bulkCardResults]);

  return (
    <div className="flex flex-col">
        {/* Reset Button */}
        <div className="flex flex-col p-2">
            <button
                className="btn"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
        <BulkSearchResultsInfo numResults={bulkCardResults ? (bulkCardResults.length) : (0)}  />
        {bulkCardResults && bulkCardResults.map((card, index) => (
            <BulkCatalogRow card={card} key={index}/>
        ))}

    </div>
  )
}
