import React, { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { singleCardResults, listViewAtom, filteredSingleCardResults } from '../atoms';
import SearchBox from '../components/SearchBox';
import SearchResultsInfo from '../components/SearchResultsInfo';
import SearchRow from '../components/SearchRow';
import SearchRowTable from './SearchRowTable';
import ListView from './ListView';
import CatalogView from './CatalogView';

export default function SingleCardSearch() {
  const [results, setResults] = useAtom(singleCardResults);
  const [filteredResults, setFilteredResults] = useAtom(filteredSingleCardResults);
  const [searchTerm, setSearchTerm] = useState('');
  const listView = useAtomValue(listViewAtom);

  return (
    <div className="m-2">
      <SearchBox setSearchTerm={setSearchTerm} />
      <div className="p-2" />
      {filteredResults && (
        <>
          <SearchResultsInfo
            numResults={filteredResults.length}
            searchTerm={searchTerm}
          />
          {listView ? (
            <ListView cardData={filteredResults} />
          ) : (
            <CatalogView cardData={filteredResults} />
          )}
        </>
      )}
    </div>
  );
}
