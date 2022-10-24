import React from 'react';
import { useState, useEffect } from 'react';
import VariantSelectorModal from './VariantSelectorModal';
import { useAtom } from 'jotai';
import { selectedCatalogRowsAtom, 
  selectedCatalogRowsPriceAtom,
  selectedCatalogRowsQuantityAtom,
  selectedBulkInfoAtom
} from '../atoms';

const conditionPriorityMap = {
  NM: 1,
  LP: 2,
  PL: 2,
  MP: 3,
  HP: 4,
  DMG: 5,
};
export default function BulkCatalogRow({ card }) {
  const [open, setOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);
  
  const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(
    selectedCatalogRowsAtom
  );
  // This is randomly initialized to the first card in the list
  const [selectedVariant, setSelectedVariant] = useState(card.variants[0]);
  const [selectedBulkInfo, setSelectedBulkInfo] = useAtom(selectedBulkInfoAtom);

  const toggleSelectCard = () => {
    // if the row is selected, remove it from the selectedCatalogRows
    if (rowSelected) {
      setSelectedCatalogRows(
        selectedCatalogRows.filter((row) => row.cardName !== card.name)
      );
      setSelectedBulkInfo({
        ...selectedBulkInfo,
        numCardsSelected: selectedBulkInfo.numCardsSelected - 1,
        priceOfSelected: selectedBulkInfo.priceOfSelected - selectedVariant.price
      });
      setRowSelected(false);
    }
    // if the row is not selected, add it to the selectedCatalogRows
    else {
      setSelectedCatalogRows([
        ...selectedCatalogRows,
        { cardName: card.name, variant: selectedVariant },
      ]);
      setSelectedBulkInfo({
        ...selectedBulkInfo,
        numCardsSelected: selectedBulkInfo.numCardsSelected + 1,
        priceOfSelected: selectedBulkInfo.priceOfSelected + selectedVariant.price
      });
      setRowSelected(true);
    }
  };

const handleClick = () => {
      // open the modal
      setOpen(true);
    };

  return (
    <div>
      {/* Modal */}
      {open && (
        <VariantSelectorModal
          cardVariants={card.variants}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          open={open}
          setOpen={setOpen}
          isSelected={rowSelected}
        />
      )}
      {selectedVariant && (
        <div>
          {/* SMALL LAYOUT */}
          {/* center everything in a column */}
          <div className="flex flex-col items-center sm:hidden hover:bg-darkerBackground rounded-md p-5">
            {/* Image */}
            <img
              src={selectedVariant.image}
              alt="card"
              className="w-7/12 sm:w-16 md:w-24 rounded-2xl sm:rounded-md h-fit"
            />
            {/* Card Info */}
            <div className="flex flex-col text-center">
              <div>{selectedVariant.name}</div>
              <div>{selectedVariant.set}</div>
              <div>{selectedVariant.condition}</div>
              <div>{selectedVariant.website}</div>
              {selectedVariant.foil && <div>Foil</div>}
              <div>{selectedVariant.price}</div>
              {/* Selector Checkbox */}
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  checked={rowSelected}
                  onChange={toggleSelectCard}
                />
              </div>

              {/* Button to open the modal for changing the selectedVariant */}

                {/* Button to open modal to switch selectedVariant */}
                <button
                  className="text-primary font-bold underline my-auto"

                  onClick={handleClick}

                >Other versions</button>
              <button
                  className="bg-primary text-white font-bold py-2 px-4 rounded mt-auto"
                  onClick={() => {
                    //open selectedVariant.link in a new tab
                    window.open(selectedVariant.link, '_blank'); 
                  }}
                >
                  Buy
                </button>
              
            </div>
          </div>

          {/* SM + LAYOUT */}
          <div className="hidden sm:flex sm:flex-col p-2 hover:backdrop-brightness-75 rounded-md">
            <div className="grid grid-cols-12">
              {/* Selector Checkbox */}
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  checked={rowSelected}
                  onChange={toggleSelectCard}
                />
              </div>
              
              {/* Image */}
              <img
                src={selectedVariant.image}
                alt="card"
                className="sm:w-16 md:w-24 sm:rounded-md h-fit col-span-2"
              />
              {/* Card Details col 1 */}
              <div className="flex flex-col p-2 col-span-5">
                <div>{selectedVariant.name}</div>
                <div>{selectedVariant.set}</div>
                <div>{selectedVariant.website}</div>
                {/* Buy button, goes to bottom of the col*/}
                <button
                  className="bg-primary text-white font-bold py-2 px-4 rounded mt-auto"
                  onClick={() => {
                    //open selectedVariant.link in a new tab
                    window.open(selectedVariant.link, '_blank'); 
                  }}
                >
                  Buy
                </button>
              </div>
              {/* Card Details col 2 */}
              {/* make this column go to the end of the parent flex row */}

              <div className="flex flex-col ml-auto text-right p-2 col-span-4">
                {selectedVariant.foil && <div>Foil</div>}
                <div>{selectedVariant.condition}</div>
                <div>${selectedVariant.price}</div>
                {/* Button to open modal to switch selectedVariant */}
                <button
                  className="text-primary font-bold underline my-auto"

                  onClick={handleClick}

                >Other versions</button>
                </div>
              </div>
          </div>
        </div>

      )}
    </div>
  );
}
