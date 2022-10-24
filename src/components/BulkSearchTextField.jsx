import React from 'react'
import { useAtom } from 'jotai'
import { bulkCardInputAtom } from '../atoms'

export default function BulkSearchTextField() {
    const [bulkCardInput, setBulkCardInput] = useAtom(bulkCardInputAtom)

  return (
    <div>
        <div className="flex flex-col p-2">
            <label className="text-sm font-bold mb-2">
                Enter card names, one per line
            </label>
            {/* Create a text area with max 100 lines, but only show 20 lines at a time */}
            <div className="flex flex-col">
                <textarea
                    className="w-full h-40 dark:bg-darkerBackground"
                    value={bulkCardInput}
                    onChange={e => setBulkCardInput(e.target.value)}
                />
                </div>
            </div>

    </div>
  )
}
