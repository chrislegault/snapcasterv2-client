import axios from 'axios';
import React, { useState } from 'react';
import { filteredSealedResultsAtom, sealedSearchInfoAtom, sealedResultsAtom, sortedByAtom, sortOrderAtom } from '../atoms';
import { useAtom, useAtomValue } from 'jotai';
import { sortResults } from '../utils';
import LoadingSpinner from './LoadingSpinner';

export default function SealedSearchBox() {
  const [setName, setSetName] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useAtom(sealedResultsAtom);
  const [filteredResults, setFilteredResults] = useAtom(filteredSealedResultsAtom);
  const [searchInfo, setSearchInfo] = useAtom(sealedSearchInfoAtom);

  const sortedBy = useAtomValue(sortedByAtom);
  const sortOrder = useAtomValue(sortOrderAtom);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${import.meta.env.VITE_API_URI}/search/sealed/`, {
        setName,
        websites: ['all'],
      })
      .then(res => {
        console.log(res.data);
        setResults(res.data);
        setSearchInfo({
          ...searchInfo,
          searchTerm: setName,
        })
        const sortedResults = sortResults(res.data, sortedBy, sortOrder);
        setFilteredResults(sortedResults);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      {/* basic search box */}
      <form
        className="flex flex-row space-x-2 justify-center mt-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="set_search"
          className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary outline-none"
          placeholder="Search for a set"
          required
          onChange={e => {
            const setName = e.target.value.replace(/’/g, "'");
            setSetName(setName);
          }}
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {/* Loading spinner */}
      {loading && (
        <LoadingSpinner />
      )}
    </>
  );
}
