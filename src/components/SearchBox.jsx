import React from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  singleCardResults,
  hideWelcomeMessage,
  sortedByAtom,
  sortOrderAtom,
  filteredSingleCardResults,
} from '../atoms';
import axios from 'axios';
import { sortResults } from '../utils';
import LoadingSpinner from './LoadingSpinner';

export default function SearchBox({ setSearchTerm }) {
  const sortedBy = useAtomValue(sortedByAtom);
  const sortOrder = useAtomValue(sortOrderAtom);

  const [cardName, setCardName] = React.useState('');
  const [results, setResults] = useAtom(singleCardResults);
  const [hideWelcome, setHideWelcome] = useAtom(hideWelcomeMessage);
  const [loading, setLoading] = React.useState(false);
  const [filteredResults, setFilteredResults] = useAtom(
    filteredSingleCardResults,
  );

  const handleSubmit = e => {
    e.preventDefault();
    // query the API using POST to /search/single
    setLoading(true);

    axios
      .post(`${import.meta.env.VITE_API_URI}/search/single/`, {
        cardName,
        websites: ['all'],
      })
      .then(res => {
        // Set the raw results to the atom
        setResults(res.data);
        // Sort the results and set the shown FilteredResults
        const sortedResults = sortResults(res.data, sortedBy, sortOrder);
        setFilteredResults(sortedResults);
        setHideWelcome(true);
        setSearchTerm(cardName);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  // test
  return (
    <div className="mt-5">
      <form
        className="flex flex-row space-x-2 justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="card_search"
          className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary outline-none"
          placeholder="Search for a card"
          required
          onChange={e => {
            // we want to setCardName(e.target.value) but we need to replace any
            // iOS apostrophes with regular apostrophes
            const cardName = e.target.value.replace(/’/g, "'");
            setCardName(cardName);
          }}
          // no autocomplete
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {/* Loading spinner */}
      {/* Center the content horizontally */}
      {loading && (
        <LoadingSpinner />
      )}
    </div>
  );
}
