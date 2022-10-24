import React from 'react'
import { useAtom } from 'jotai'
import { bulkCardResultsAtom } from '../atoms'
import BulkCatalogRow from './BulkCatalogRow'

export default function BulkCatalogView() {
    const [bulkCardResults, setBulkCardResults] = useAtom(bulkCardResultsAtom);
    const handleReset = () => {
        setBulkCardResults(null);
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
        {bulkCardResults.map((card, index) => (
            <BulkCatalogRow card={card} key={index}/>
        ))}

    </div>
  )
}
