import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { selectedBulkStoresAtom, bulkCardInputAtom, bulkCardResultsAtom } from '../atoms';
import StoreRadioButtons from './StoreRadioButtons';
import BulkSearchTextField from './BulkSearchTextField';
import axios from 'axios';

export default function MultiSearchForm() {
    const selectedStores = useAtomValue(selectedBulkStoresAtom);
    const bulkCardInput = useAtomValue(bulkCardInputAtom);
    const setBulkCardResults = useSetAtom(bulkCardResultsAtom);

    const handleSearch = () => {
        // create an array with an item for each line of the bulkCardInput
        const cardNames = bulkCardInput.split('\n');
        // make the request to the backend using axios
        const requestBody = {
            cardNames,
            websites: selectedStores,
            worstCondition: "DMG"
        }

        axios
            .post(`${import.meta.env.VITE_API_URI}/search/bulk/`, {
                cardNames,
                websites: selectedStores,
                worstCondition: "DMG",
            })
            .then((response) => {
                setBulkCardResults(response.data);
            }
        );
    }
  return (
    <div>
        {/* Radio Buttons */}
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
                className="bg-primary hover:backdrop-brightness-75 text-white font-bold py-2 px-4 rounded"
                onClick={handleSearch}
            >
                Search
            </button>
            </div>



    </div>
  );
}
