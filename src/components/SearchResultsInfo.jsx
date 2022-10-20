import React from 'react';
import { useAtom } from 'jotai';
import { singleCardResults } from '../atoms';

export default function SearchResultsInfo({ numResults, searchTerm }) {
  const [sortedBy, setSortedBy] = React.useState('price');
  const [sortOrder, setSortOrder] = React.useState('asc');
  const [results, setResults] = useAtom(singleCardResults);

  const handleSortByChange = e => {
    setSortedBy(e.target.value);
    const sortedResults = [...results].sort((a, b) => {
      if (e.target.value === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (e.target.value === 'website') {
        return sortOrder === 'asc'
          ? a.website.localeCompare(b.website)
          : b.website.localeCompare(a.website);
      } else if (e.target.value === 'condition') {
        return sortOrder === 'asc'
          ? a.condition.localeCompare(b.condition)
          : b.condition.localeCompare(a.condition);
      }
    });
    setResults(sortedResults);
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
      </div>
    </div>
  );
}
