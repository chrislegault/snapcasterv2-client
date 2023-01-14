import React from 'react';
import { useAtom } from 'jotai';
import {
  singleCardResults,
  sortOrderAtom,
  listViewAtom,
  filteredSingleCardResults,
  foilFilterAtom,
  conditionFilterListAtom,
} from '../atoms';
import { sortResults } from '../utils';
import { useEffect } from 'react';

export default function SearchResultsInfo({ numResults, searchTerm }) {
  const [sortedBy, setSortedBy] = React.useState('price');
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);
  const [results, setResults] = useAtom(singleCardResults);
  const [listView, setListView] = useAtom(listViewAtom);
  const [filteredResults, setFilteredResults] = useAtom(
    filteredSingleCardResults,
  );
  const [foilFilter, setFoilFilter] = useAtom(foilFilterAtom);
  const [showMore, setShowMore] = React.useState(false);
  const [conditionFilterList, setConditionFilterList] = useAtom(
    conditionFilterListAtom,
  );

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

  const toggleListView = () => {
    setListView(!listView);
  };

  const toggleFoilFilter = () => {
    // If foil filter is on, filter out non-foil result from filteredResults
    // if it's off, set filteredResults sortResults(results, sortedBy, sortOrder)
    if (foilFilter) {
      // TODO: will need to update this for when condition filter is applied
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

  const refilterByCondition = () => {
    let newResults = sortResults(results, sortedBy, sortOrder);
    if (foilFilter) {
      // filter out results where result.foil is false
      newResults = newResults.filter(result => result.foil === true);
    }
    if (conditionFilterList.length > 0) {
      // filter out results where result.condition is not in conditionFilterList
      newResults = newResults.filter(result =>
        conditionFilterList.includes(result.condition),
      );
    }
    setFilteredResults(newResults);
  };

  const toggleConditionFilter = condition => {
    // if condition is in the list, remove it
    // if condition is not in the list, add it
    if (conditionFilterList.includes(condition)) {
      const newList = conditionFilterList.filter(item => item !== condition);
      setConditionFilterList(newList);
    }
    if (!conditionFilterList.includes(condition)) {
      const newList = [...conditionFilterList, condition];
      setConditionFilterList(newList);
    }
  };

  useEffect(() => {
    refilterByCondition();
  }, [foilFilter, conditionFilterList]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {/* Background */}
      <div className="bg-gray-100 dark:bg-darkerBackground rounded-md p-1 md:p-3">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm md:text-md">
          <div className="mx-2 col-span-3">
            {numResults} results found for "{searchTerm}"
          </div>

          {/* Sort selector */}
          <div className="flex flex-row mx-2 col-span-3">
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

          {
            // If showMore is true, display additional filters
            showMore && (
              
              <div className="col-span-3 flex-col space-y-2 mt-1">
                                {/* list view toggle */}
                                <div className="flex items-center">
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

                {/* foil toggle */}
                <div className="flex items-center">
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
                {/* condition toggle uses checkboxes */}
                <div className="flex flex-col space-y-1 mx-2">
                  <span>Condition</span>
                  <div className="flex-col items-center mx-2">
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="NM"
                        name="NM"
                        value="NM"
                        checked={conditionFilterList.includes('NM')}
                        onChange={() => toggleConditionFilter('NM')}
                      />
                      <label htmlFor="NM">NM</label>
                    </div>
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="LP"
                        name="LP"
                        value="LP"
                        checked={conditionFilterList.includes('LP')}
                        onChange={() => toggleConditionFilter('LP')}
                      />
                      <label htmlFor="LP">LP</label>
                    </div>
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="PL"
                        name="PL"
                        value="PL"
                        checked={conditionFilterList.includes('PL')}
                        onChange={() => toggleConditionFilter('PL')}
                      />
                      <label htmlFor="PL">PL</label>
                    </div>
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="MP"
                        name="MP"
                        value="MP"
                        checked={conditionFilterList.includes('MP')}
                        onChange={() => toggleConditionFilter('MP')}
                      />
                      <label htmlFor="MP">MP</label>
                    </div>
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="HP"
                        name="HP"
                        value="HP"
                        checked={conditionFilterList.includes('HP')}
                        onChange={() => toggleConditionFilter('HP')}
                      />
                      <label htmlFor="HP">HP</label>
                    </div>
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="DMG"
                        name="DMG"
                        value="DMG"
                        checked={conditionFilterList.includes('DMG')}
                        onChange={() => toggleConditionFilter('DMG')}
                      />
                      <label htmlFor="DMG">DMG</label>
                    </div>
                    <div className="flex flex-row space-x-1 items-center accent-primary">
                      <input
                        type="checkbox"
                        id="SCAN"
                        name="SCAN"
                        value="SCN"
                        checked={conditionFilterList.includes('SCN')}
                        onChange={() => toggleConditionFilter('SCN')}
                      />
                      <label htmlFor="SCAN">SCAN</label>
                    </div>
                  </div>
                </div>


              </div>
            )
          }
          {/* Show More */}
          <div className="col-span-3 mx-auto mt-2">
            {/* "More" button to expand the size of the component and display additional filters */}
            {/* calls toggleShowMore to change showMore to true/false */}
            {/* when showMore is true, we display additional <select> components */}
            <div className="flex items-center">
              <button
                className="bg-white dark:bg-gray-700 rounded-md border mx-1 text-sm p-1"
                onClick={toggleShowMore}
              >
                {showMore ? 'Hide' : 'More'} filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
