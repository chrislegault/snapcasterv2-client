import React from 'react';
import { useAtom } from 'jotai';
import { selectedBulkStoresAtom } from '../atoms';
export default function StoreRadioButtons() {
  const [selectedStores, setSelectedStores] = useAtom(selectedBulkStoresAtom);
  return (
    <div>
      <div className="flex flex-col space-y-1 text-sm">
        {/* ATLAS */}
        <div className="flex flex-row space-x-1">
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

        {/* CONNECTION GAMES */}
        <div className="flex flex-row space-x-1">
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

        {/* EVERYTHING GAMES */}
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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

        {/* 401 GAMES */}
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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

        {/* GAMEZILLA */}
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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

        {/* MTG STRONGHOLD */}
        <div className="flex flex-row space-x-1">
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

        {/* SEQUENCE */}
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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
        <div className="flex flex-row space-x-1">
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
    </div>
  );
}
