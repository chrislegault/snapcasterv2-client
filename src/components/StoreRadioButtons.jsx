import React from 'react';
import { useAtom } from 'jotai';
import { selectedBulkStoresAtom } from '../atoms';
export default function StoreRadioButtons() {
  const [selectedStores, setSelectedStores] = useAtom(selectedBulkStoresAtom);
  const storeList = [
    'atlas',
    'everythinggames',
    'facetoface',
    'fusion',
    'gamezilla',
    'hairyt',
    'jeux3dragons',
    'sequencegaming',
    'kanatacg',
    'connectiongames',
    'exorgames',
    'four01',
    'gameknight',
    'gauntlet',
    'houseofcards',
    'magicstronghold',
    'topdeckhero',
    'enterthebattlefield',
    'firstplayer',
    'manaforce',
    'orchardcity',
    'bordercity',
  ];
  return (
    <div className=" rounded-md bg-gray-300 dark:bg-darkerBackground p-3 ">
      <div className="grid grid-cols-1 xs:grid-cols-2 space-y-3 text-sm">
        {/* ATLAS */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="atlas"
            value="atlas"
            checked={selectedStores.includes('atlas')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="atlas">Atlas Collectables</label>
        </div>

        {/* BORDER CITY GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="bordercity"
            value="bordercity"
            checked={selectedStores.includes('bordercity')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="bordercity">Border City Games</label>
        </div>

        {/* CONNECTION GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="connectiongames"
            value="connectiongames"
            checked={selectedStores.includes('connectiongames')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="connectiongames">The Connection Games</label>
        </div>

        {/* ENTER THE BATTLEFIELD GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="enterthebattlefield"
            value="enterthebattlefield"
            checked={selectedStores.includes('enterthebattlefield')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="enterthebattlefield">
            Enter the Battlefield Newmarket
          </label>
        </div>

        {/* EVERYTHING GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="everythinggames"
            value="everythinggames"
            checked={selectedStores.includes('everythinggames')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="everythinggames">Everything Games</label>
        </div>

        {/* EXOR GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="exorgames"
            value="exorgames"
            checked={selectedStores.includes('exorgames')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="exorgames">Exor Games</label>
        </div>

        {/* FACE TO FACE */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="facetoface"
            value="facetoface"
            checked={selectedStores.includes('facetoface')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="facetoface">Face to Face Games</label>
        </div>

        {/* FIRST PLAYER */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="firstplayer"
            value="firstplayer"
            checked={selectedStores.includes('firstplayer')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="firstplayer">FirstPlayer</label>
        </div>

        {/* 401 GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="four01"
            value="four01"
            checked={selectedStores.includes('four01')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="four01">401 Games</label>
        </div>

        {/* FUSION */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="fusion"
            value="fusion"
            checked={selectedStores.includes('fusion')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="fusion">Fusion Gaming</label>
        </div>

        {/* GAMEKNIGHT */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="gameknight"
            value="gameknight"
            checked={selectedStores.includes('gameknight')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="gameknight">GameKnight</label>
        </div>

        {/* GAMEZILLA */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="gamezilla"
            value="gamezilla"
            checked={selectedStores.includes('gamezilla')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="gamezilla">Gamezilla</label>
        </div>

        {/* GAUNTLET */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="gauntlet"
            value="gauntlet"
            checked={selectedStores.includes('gauntlet')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="gauntlet">Gauntlet Games</label>
        </div>

        {/* HAIRYT */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="hairyt"
            value="hairyt"
            checked={selectedStores.includes('hairyt')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="hairyt">Hairy Tarantula</label>
        </div>

        {/* HOUSE OF CARDS */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="houseofcards"
            value="houseofcards"
            checked={selectedStores.includes('houseofcards')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="houseofcards">House of Cards</label>
        </div>

        {/* JEUX3DRAGONS */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="jeux3dragons"
            value="jeux3dragons"
            checked={selectedStores.includes('jeux3dragons')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="jeux3dragons">Jeux 3 Dragons</label>
        </div>

        {/* MANAFORCE */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="manaforce"
            value="manaforce"
            checked={selectedStores.includes('manaforce')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="manaforce">Manaforce</label>
        </div>

        {/* MTG STRONGHOLD */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="magicstronghold"
            value="magicstronghold"
            checked={selectedStores.includes('magicstronghold')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="magicstronghold">Magic Stronghold</label>
        </div>

        {/* ORCHARD CITY GAMES */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="orchardcity"
            value="orchardcity"
            checked={selectedStores.includes('orchardcity')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="orchardcity">Orchard City Games</label>
        </div>

        {/* SEQUENCE */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="sequencegaming"
            value="sequencegaming"
            checked={selectedStores.includes('sequencegaming')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="sequencegaming">Sequence Gaming Brockville</label>
        </div>

        {/* TOPDECKHERO */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="topdeckhero"
            value="topdeckhero"
            checked={selectedStores.includes('topdeckhero')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="topdeckhero">Topdeck Hero</label>
        </div>

        {/* WIZARDS TOWER */}
        <div className="flex flex-row col-span-1 space-x-1 items-center accent-primary">
          <input
            type="checkbox"
            id="kanatacg"
            value="kanatacg"
            checked={selectedStores.includes('kanatacg')}
            onChange={e => {
              if (e.target.checked) {
                setSelectedStores([...selectedStores, e.target.value]);
              } else {
                setSelectedStores(
                  selectedStores.filter(store => store !== e.target.value),
                );
              }
            }}
          />
          <label htmlFor="kanatacg">Wizard's Tower (kanatacg)</label>
        </div>
      </div>
      {/* select all button */}
      <div className="flex flex-row justify-center mt-3">
        <button
          className="btn-small"
          onClick={() => {
            // if all stores are selected, deselect all
            if (selectedStores.length === storeList.length) {
              setSelectedStores([]);
            } else {
              // else select all
              setSelectedStores(storeList);
            }
          }}
        >
          Select All
        </button>
      </div>
    </div>
  );
}
