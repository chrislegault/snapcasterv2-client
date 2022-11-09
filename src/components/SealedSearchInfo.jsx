import React, { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  sortOrderAtom,
  sortedByAtom,
  filteredSealedResultsAtom,
  sealedResultsAtom,
} from '../atoms';
import { sortResults } from '../utils';

export default function SealedSearchInfo({ numResults, searchTerm }) {
  const [sortedBy, setSortedBy] = useAtom(sortedByAtom);
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);
  const [filteredResults, setFilteredResults] = useAtom(
    filteredSealedResultsAtom,
  );
  const results = useAtomValue(sealedResultsAtom);

  //   a hashmap for each filter option, set/draft/box/jumpstart
  const [filterOptions, setFilterOptions] = useState({
    set: true,
    draft: true,
    box: true,
    jumpstart: true,
    pack: true,
    bundle: true,
    collector: true,
  });

  const handleTagChange = e => {
    //  set the filter option to the opposite of what it was
    setFilterOptions({
      ...filterOptions,
      [e.target.value]: !filterOptions[e.target.value],
    });
  };

  const handleSortByChange = e => {
    setSortedBy(e.target.value);
    const sortedResults = sortResults(
      filteredResults,
      e.target.value,
      sortOrder,
    );
    setFilteredResults(sortedResults);
  };

  const handleSortOrderChange = e => {
    setSortOrder(e.target.value);
    const sortedResults = sortResults(
      filteredResults,
      sortedBy,
      e.target.value,
    );
    setFilteredResults(sortedResults);
  };

  return (
    <div className="bg-gray-100 dark:bg-darkerBackground rounded-md p-1 md:p-3">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm md:text-md">
        <div className="m-2 col-span-3 bg-red-500 bg-opacity-10 p-3">
            {/* Update Header */}
          <div className="text-center dark:text-red-200 font-bold">
            <h3>Update November 9</h3>
          </div>
            This page is currently under construction and adding more sites daily. More filtering options will be added once all sites are supported.
        </div>
        <div className="mx-2 col-span-3">
          {numResults} results for "{searchTerm}"
        </div>
        {/* Sort Selector */}
        <div className="flex flex-row mx-2 col-span-3">
          <div className="mr-2">Sort by:</div>
          <select
            className="bg-white dark:bg-gray-700 rounded-md border mx-1"
            value={sortedBy}
            onChange={handleSortByChange}
          >
            <option value="price">Price</option>
            <option value="website">Website</option>
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
        {/* Product type checkboxes */}
        {/* <div className="flex flex-row mx-2 col-span-3">
          <div className="mr-2">Product type:</div>
          <div className="flex flex-row">
            <div className="mr-2">
              <input
                type="checkbox"
                id="setbooster"
                name="setbooster"
                value="set"
                onChange={handleTagChange}
                checked={filterOptions.set}
              />
              <label htmlFor="setbooster">Set</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="draft"
                name="draft"
                value="draft"
                onChange={handleTagChange}
                checked={filterOptions.draft}
              />
              <label htmlFor="draft">Draft</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="box"
                name="box"
                value="box"
                onChange={handleTagChange}
                checked={filterOptions.box}
              />
              <label htmlFor="box">Box</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="jumpstart"
                name="jumpstart"
                value="jumpstart"
                onChange={handleTagChange}
                checked={filterOptions.jumpstart}
              />
              <label htmlFor="jumpstart">Jumpstart</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="pack"
                name="pack"
                value="pack"
                onChange={handleTagChange}
                checked={filterOptions.pack}
              />
              <label htmlFor="pack">Pack</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="collector"
                name="collector"
                value="collector"
                onChange={handleTagChange}
                checked={filterOptions.collector}
              />
              <label htmlFor="collector">Collector's Edition</label>
            </div>
            <div className="mr-2">
              <input
                type="checkbox"
                id="bundle"
                name="bundle"
                value="bundle"
                onChange={handleTagChange}
                checked={filterOptions.bundle}
              />
              <label htmlFor="bundle">Bundle</label>
            </div>
          </div>
          <button
            className="btn-small"
            onClick={() => {
              console.log('filterOptions', filterOptions);
              console.log('filteredResults', filteredResults);
            }}
          >
            Log
          </button>
        </div> */}
      </div>
    </div>
  );
}
