import React from 'react'

export default function SearchResultsInfo({numResults, searchTerm}) {
  return (
            <div className="flex flex-col items-center bg-gray-700 p-2 rounded-md">
            <div className="py-1">{numResults} results found for "{searchTerm}"</div>
            {/* Sort selector */}
            <div className="flex flex-row py-1">
              <div className="mr-2">Sort by: </div>
              <select className="bg-gray-700 text-white rounded-md border">
                <option value="price">Price</option>
                <option value="store">Store</option>
                <option value="condition">Condition</option>
              </select>
            </div>
          </div>
  )
}
