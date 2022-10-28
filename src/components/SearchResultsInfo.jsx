import React from 'react';
import { useAtom } from 'jotai';
import {
  singleCardResults,
  sortOrderAtom,
  listViewAtom,
  filteredSingleCardResults,
  foilFilterAtom
} from '../atoms';
import { sortResults } from '../utils';

export default function SearchResultsInfo({ numResults, searchTerm }) {
  const [sortedBy, setSortedBy] = React.useState('price');
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);
  const [results, setResults] = useAtom(singleCardResults);
  const [listView, setListView] = useAtom(listViewAtom);
  const [filteredResults, setFilteredResults] = useAtom(
    filteredSingleCardResults,
  );
  const [foilFilter, setFoilFilter] = useAtom(foilFilterAtom);

  const handleSortByChange = e => {
    setSortedBy(e.target.value);
    const sortedResults = sortResults(filteredResults, e.target.value, sortOrder);
    setFilteredResults(sortedResults);
  };

  const handleSortOrderChange = e => {
    setSortOrder(e.target.value);
    const sortedResults = sortResults(filteredResults, sortedBy, e.target.value);
    setFilteredResults(sortedResults);
  };

  const toggleListView = () => {
    setListView(!listView);
  };

  const toggleFoilFilter = () => {
    // If foil filter is on, filter out non-foil result from filteredResults
    // if it's off, set filteredResults sortResults(results, sortedBy, sortOrder)
    if (foilFilter) {
      const sorted = sortResults(results, sortedBy, sortOrder);
      setFilteredResults(sorted);
      setFoilFilter(false);
    }
    if (!foilFilter) {
      const filtered = filteredResults.filter(result => result.foil === true);
      setFilteredResults(filtered);
      setFoilFilter(true);
    }
  };

  return (
    <>
      {/* Background */}
      <div className="bg-gray-100 dark:bg-darkerBackground rounded-md p-1 md:p-3">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="mx-2 md:col-span-3">
            {numResults} results found for "{searchTerm}"
          </div>
          {/* Sort selector */}
          <div className="flex flex-row mx-2 md:col-span-2">
            <div className="mr-2">Sort by:</div>
            <select
              className="bg-white dark:bg-gray-700 rounded-md border mx-1"
              value={sortedBy}
              onChange={handleSortByChange}
            >
              <option value="price">Price</option>
              <option value="website">Website</option>
              <option value="condition">Condition</option>
            </select>
            <select
              className="bg-white dark:bg-gray-700 rounded-md border mx-1"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div>
            {/* foil toggle */}
            <div className="flex items-center md:col-span-1">
              <span className="mx-2">Foil:</span>
              <label
                htmlFor="foil-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  checked={foilFilter}
                  id="foil-toggle"
                  className="sr-only peer"
                  onClick={toggleFoilFilter}
                />
                <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          <div>
            {/* list view toggle */}
            <div className="flex items-center md:col-span-1">
              <span className="mx-2">List View:</span>
              <label
                htmlFor="list-view-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  checked={listView}
                  id="list-view-toggle"
                  className="sr-only peer"
                  onClick={toggleListView}
                />
                <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
