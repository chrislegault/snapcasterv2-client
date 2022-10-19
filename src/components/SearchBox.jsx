import React from 'react';
import { useAtom } from 'jotai';
import { singleCardResults, hideWelcomeMessage } from '../atoms';

export default function SearchBox() {
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
  const [hideWelcome, setHideWelcome] = useAtom(hideWelcomeMessage);

  const handleSubmit = e => {
    e.preventDefault();
    setResults(data);
    setHideWelcome(true);
    console.log('submitted');
  };
  return (
    <div className="mt-5">
      <form
        className="flex flex-row space-x-2 justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="card_search"
          className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none"
          placeholder="Search for a card"
          required
        />
        <button
          type="submit"
          className="transition-all bg-deepRed  hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
    </div>
  );
}
