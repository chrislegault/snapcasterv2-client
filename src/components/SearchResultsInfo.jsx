import React from 'react';
import { useAtom } from 'jotai';
import { singleCardResults, sortOrderAtom, listViewAtom } from '../atoms';
import { sortResults } from '../utils';

export default function SearchResultsInfo({ numResults, searchTerm }) {
  const [sortedBy, setSortedBy] = React.useState('price');
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);
  const [results, setResults] = useAtom(singleCardResults);
  const [listView, setListView] = useAtom(listViewAtom);

  const handleSortByChange = e => {
    setSortedBy(e.target.value);
    const sortedResults = sortResults(results, e.target.value, sortOrder);
    setResults(sortedResults);
  };

  const handleSortOrderChange = e => {
    setSortOrder(e.target.value);
    setResults([...results].reverse());
  };

  const toggleListView = () => {
    setListView(!listView);
  };

  return (
    <div className="flex flex-wrap bg-gray-700 p-2 rounded-md">
      <div className="mx-2">
        {numResults} results found for "{searchTerm}"
      </div>
      {/* Sort selector */}
      <div className="flex flex-row mx-2">
        <div className="mr-2">Sort by: </div>
        <select
          className="bg-gray-700 text-white rounded-md border"
          value={sortedBy}
          onChange={handleSortByChange}
        >
          <option value="price">Price</option>
          <option value="website">Website</option>
          <option value="condition">Condition</option>
        </select>
        <select
          className="bg-gray-700 text-white rounded-md border"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        {/* list view toggle */}
        <div className="flex flex-row items-center mx-2">
        <span class="mx-2">
              List View
            </span>
          <label
            for="default-toggle"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              class="sr-only peer"
              onClick={toggleListView}
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-500 dark:peer-focus:ring-deepRed rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-deepRed"></div>

          </label>
        </div>
      </div>
    </div>
  );
}
