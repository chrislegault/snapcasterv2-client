import React, { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { singleCardResults, listViewAtom } from '../atoms';
import SearchBox from '../components/SearchBox';
import SearchResultsInfo from '../components/SearchResultsInfo';
import SearchRow from '../components/SearchRow';
import SearchRowTable from './SearchRowTable';
export default function SingleCardSearch() {
  const data = [
    {
      id: 1,
      name: 'Dockside Extortionist',
      set: 'Core Set 2021',
      price: 54.99,
      image:
        'https://cards.scryfall.io/png/front/5/7/571bc9eb-8d13-4008-86b5-2e348a326d58.png?1615499802',
      store: '401 Games',
      condition: 'NM',
      link: 'https://store.401games.ca/pages/search-results?q=dockside+extortionist',
    },
    {
      id: 2,
      name: 'Dockside Extortionist',
      set: 'Core Set 2021',
      price: 54.99,
      image:
        'https://cards.scryfall.io/png/front/5/7/571bc9eb-8d13-4008-86b5-2e348a326d58.png?1615499802',
      store: '401 Games',
      condition: 'NM',
      link: 'https://store.401games.ca/pages/search-results?q=dockside+extortionist',
    },
    {
      id: 3,
      name: 'Dockside Extortionist',
      set: 'Core Set 2021',
      price: 54.99,
      image:
        'https://cards.scryfall.io/png/front/5/7/571bc9eb-8d13-4008-86b5-2e348a326d58.png?1615499802',
      store: '401 Games',
      condition: 'NM',
      link: 'https://store.401games.ca/pages/search-results?q=dockside+extortionist',
    },
    {
      id: 4,
      name: 'Dockside Extortionist',
      set: 'Core Set 2021',
      price: 54.99,
      image:
        'https://cards.scryfall.io/png/front/5/7/571bc9eb-8d13-4008-86b5-2e348a326d58.png?1615499802',
      store: '401 Games',
      condition: 'NM',
      link: 'https://store.401games.ca/pages/search-results?q=dockside+extortionist',
    },
    {
      id: 5,
      name: 'Dockside Extortionist',
      set: 'Core Set 2021',
      price: 54.99,
      image:
        'https://cards.scryfall.io/png/front/5/7/571bc9eb-8d13-4008-86b5-2e348a326d58.png?1615499802',
      store: '401 Games',
      condition: 'NM',
      link: 'https://store.401games.ca/pages/search-results?q=dockside+extortionist',
    },
    {
      id: 6,
      name: 'Dockside Extortionist',
      set: 'Core Set 2021',
      price: 54.99,
      image:
        'https://cards.scryfall.io/png/front/5/7/571bc9eb-8d13-4008-86b5-2e348a326d58.png?1615499802',
      store: '401 Games',
      condition: 'NM',
      link: 'https://store.401games.ca/pages/search-results?q=dockside+extortionist',
    },
  ];

  const [results, setResults] = useAtom(singleCardResults);
  const [searchTerm, setSearchTerm] = useState('');
  const listView = useAtomValue(listViewAtom);

  return (
    <div className="max-w-xl m-2">
      <SearchBox setSearchTerm={setSearchTerm} />
      <div className="p-2" />
      {results && (
        <SearchResultsInfo
          numResults={results.length}
          searchTerm={searchTerm}
        />
      )}



      {results && 
        (listView ? (
          <table className="table-auto md:table-fixed w-full mt-3">
            <thead>
              <tr>
                <th className="border border-slate-600 w-1/4">Card</th>
                <th className="border border-slate-600 w-1/4">Website</th>
                <th className="border border-slate-600 w-1/6">Condition</th>
                <th className="border border-slate-600 w-1/6">Price</th>
                <th className="border border-slate-600 w-1/6">Buy</th>
              </tr>
            </thead>
            <tbody>
            {results.map((cardData) => (
              <SearchRowTable cardData={cardData} key={cardData.id}/>
            ))}
            </tbody>
    
          </table>
        ) : (
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
