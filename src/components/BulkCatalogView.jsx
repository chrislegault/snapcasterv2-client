import React from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { 
    bulkCardResultsAtom,
    expectedBulkCardCountAtom,
    missingCardNamesAtom,
    selectedCatalogRowsAtom,
} from '../atoms'
import BulkCatalogRow from './BulkCatalogRow'
import BulkSearchResultsInfo from './BulkSearchResultsInfo'

export default function BulkCatalogView() {
    const [bulkCardResults, setBulkCardResults] = useAtom(bulkCardResultsAtom);
    const setExpectedBulkCardCount = useSetAtom(expectedBulkCardCountAtom);
    const setMissingCardNames = useSetAtom(missingCardNamesAtom);
    const setSelectedCatalogRows = useSetAtom(selectedCatalogRowsAtom);
    const handleReset = () => {
        setBulkCardResults(null);
        setExpectedBulkCardCount(0);
        setMissingCardNames([]);
        setSelectedCatalogRows([]);
    }

  return (
    <div className="flex flex-col">
        {/* Reset Button */}
        <div className="flex flex-col p-2">
            <button
                className="bg-primary hover:backdrop-brightness-75 text-white font-bold py-2 px-4 rounded"
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
