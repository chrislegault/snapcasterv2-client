import React, { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { singleCardResults, listViewAtom } from '../atoms';
import SearchBox from '../components/SearchBox';
import SearchResultsInfo from '../components/SearchResultsInfo';
import SearchRow from '../components/SearchRow';
import SearchRowTable from './SearchRowTable';
import ListView from './ListView';
export default function SingleCardSearch() {

  const [results, setResults] = useAtom(singleCardResults);
  const [searchTerm, setSearchTerm] = useState('');
  const listView = useAtomValue(listViewAtom);

  return (
    <div className="m-2">
      <SearchBox setSearchTerm={setSearchTerm} />
      <div className="p-2" />
      {results && (
        <SearchResultsInfo
          numResults={results.length}
          searchTerm={searchTerm}
        />
      )}



      {results && 
        (listView ? (<ListView cardData={results}/>) : (
          <div>
            {results.map((cardData) => (
              <SearchRow cardData={cardData} key={cardData.id}/>
            ))}
          </div>
        ))
      }

    </div>
  );
}
