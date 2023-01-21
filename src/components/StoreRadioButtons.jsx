import React from 'react';
import { useAtom } from 'jotai';
import { selectedBulkStoresAtom } from '../atoms';
export default function StoreRadioButtons() {
  const [selectedStores, setSelectedStores] = useAtom(selectedBulkStoresAtom);
  const storeList = {
    aethervault: 'Aether Vault Games',
    atlas: 'Atlas Collectables',
    bordercity: 'Border City Games',
    thecomichunter: 'The Comic Hunter',
    connectiongames: 'The Connection Games',
    enterthebattlefield: 'Enter the Battlefield Newmarket',
    everythinggames: 'Everything Games',
    exorgames: 'Exor Games',
    facetoface: 'Face to Face Games',
    fantasyforged: 'Fantasy Forged Games',
    firstplayer: 'FirstPlayer',
    four01: '401 Games',
    fusion: 'Fusion Gaming',
    gameknight: 'GameKnight',
    gamezilla: 'Gamezilla',
    gauntlet: 'Gauntlet Games',
    hairyt: 'Hairy Tarantula',
    houseofcards: 'House of Cards',
    jeux3dragons: 'Jeux 3 Dragons',
    manaforce: 'Manaforce',
    magicstronghold: 'Magic Stronghold',
    orchardcity: 'Orchard City Games',
    sequencegaming: 'Sequence Gaming Brockville',
    topdeckhero: 'Topdeck Hero',
    kanatacg: "Wizard's Tower (kanatacg)"
  };
  const storeKeys = Object.keys(storeList);
  const storeChecks = storeKeys.map(store => {
    return (
      <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary" key={store}>
        <input
          type="checkbox"
          id={store}
          value={store}
          checked={selectedStores.includes(store)}
          onChange={e => {
            if (e.target.checked) {
              setSelectedStores([...selectedStores, e.target.value]);
            } else {
              setSelectedStores(
                selectedStores.filter(store => store !== e.target.value)
              );
            }
          }}
        />
        <label htmlFor={store}>{storeList[store]}</label>
      </div>
    );
  });

  return (
    <div className="rounded-md bg-gray-300 dark:bg-darkerBackground p-3">
      <div className="grid grid-cols-1 xs:grid-cols-2 space-y-3 text-sm">
        {storeChecks}
      </div>
      {/* select all button */}
      <div className="flex flex-row justify-center mt-3">
        <button
          className="btn-small"
          onClick={() => {
            // if all stores are selected, deselect all
            if (selectedStores.length === storeKeys.length) {
              setSelectedStores([]);
            } else {
              // else select all
              setSelectedStores(storeKeys);
            }
          }}
        >
          Select All
        </button>
      </div>
    </div>
  );
}
