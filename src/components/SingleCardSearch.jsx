import React, {useState} from 'react';
import { useAtom } from 'jotai';
import { singleCardResults } from '../atoms';
import SearchBox from '../components/SearchBox';
import SearchResultsInfo from '../components/SearchResultsInfo';
import SearchRow from '../components/SearchRow';
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

  return (
    <div className='w-full md:w-1/2' >
      <SearchBox setSearchTerm={setSearchTerm}/>
      <div className="p-2" />
      {results && <SearchResultsInfo numResults={results.length} searchTerm={searchTerm}/>}

      {/* map data into SearchRow components */}
      {results && results.map(cardData => (
        <SearchRow key={cardData.id} cardData={cardData} />
      ))}
    </div>
  );
}
