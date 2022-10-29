import React from 'react';
import { useState, useEffect } from 'react';
import VariantSelectorModal from './VariantSelectorModal';
import { useAtom } from 'jotai';
import { selectedCatalogRowsAtom, selectedBulkInfoAtom } from '../atoms';

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

  const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(
    selectedCatalogRowsAtom,
  );

  // rowSelected should be updated whenever selectedCatalogRows changes
  const [rowSelected, setRowSelected] = useState(false);
  useEffect(() => {
    // if the card is in selectedCatalogRows, then set rowSelected to true
    if (selectedCatalogRows.find(row => row.cardName === card.cardName)) {
      setRowSelected(true);
    } else {
      setRowSelected(false);
    }
  }, [selectedCatalogRows]);

  // const [rowSelected, setRowSelected] = useState(false);

  // This is randomly initialized to the first card in the list
  const [selectedBulkInfo, setSelectedBulkInfo] = useAtom(selectedBulkInfoAtom);

  const toggleSelectCard = () => {
    // if the row is selected, remove it from the selectedCatalogRows
    if (rowSelected) {
      setSelectedCatalogRows(
        selectedCatalogRows.filter(row => row.cardName !== card.cardName),
      );
    }
    // if the row is not selected, add it to the selectedCatalogRows
    else {
      setSelectedCatalogRows([...selectedCatalogRows, card]);
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
        <VariantSelectorModal card={card} open={open} setOpen={setOpen} />
      )}
      {card.selectedVariant && (
        <div>
          <div className="flex flex-col p-2 hover:backdrop-brightness-75 rounded-md">
            {/* invisible box that is the background of the children elements, if it's clicked, toggleSelectCard */}
            <div
              className="grid grid-cols-12"
              onClick={e => {
                // if we clicked on this div, and not a child element, then toggleSelectCard
                if (e.target === e.currentTarget) {
                  toggleSelectCard();
                }
              }}
            >
              <div className="col-span-3 relative">
                {/* Image */}
                <img
                  src={card.selectedVariant.image}
                  alt="card"
                  className="w-24 rounded-md h-fit"
                  onClick={toggleSelectCard}
                />
                {/* we want the selector to hover over the top left corner for the image */}
                {/* Selector Checkbox */}
                <div
                  className="flex justify-center items-center accent-primary absolute top-0 left-0 w-6 h-6 rounded-md"
                  // we want to be able to click anywhere in the col to toggleSelectCard
                  onClick={toggleSelectCard}
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded"
                    checked={rowSelected}
                    onChange={toggleSelectCard}
                  />
                </div>
              </div>

              {/* Card Details col 1 */}
              <div className="flex flex-col p-2 col-span-6 sm:col-span-5">
                {/* Card Info */}
                <div className="flex flex-col" onClick={toggleSelectCard}>
                  <div className="text-md font-bold">
                    {card.selectedVariant.name}
                  </div>
                  <div className="text-sm font-medium">{card.selectedVariant.set}</div>
                  <div className="text-xs">{card.selectedVariant.website}</div>
                </div>
                {/* Button to open modal to switch selectedVariant */}
                <button
                  className="btn-outlined-xsmall sm:btn-outlined-small mt-auto"
                  onClick={handleClick}
                >
                  Other versions
                </button>
              </div>

              {/* Card Details col 2 */}
              <div className="flex flex-col ml-auto text-right p-2 col-span-3 sm:col-span-4">
                {/* Foil, Condition, Price */}
                <div className="flex flex-col" onClick={toggleSelectCard}>
                  <div className="font-bold text-md">
                    ${card.selectedVariant.price}
                  </div>

                  <div className="flex flex-row space-x-2 justify-end">
                    {card.selectedVariant.foil && (
                      <div className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                        Foil
                      </div>
                    )}
                    <div className="text-sm font-bold">
                      {card.selectedVariant.condition}
                    </div>
                  </div>
                </div>
                {/* Buy button, goes to bottom of the col*/}
                <button
                  className="btn-small mt-auto"
                  onClick={() => {
                    //open selectedVariant.link in a new tab
                    window.open(card.selectedVariant.link, '_blank');
                  }}
                >
                  Buy
                </button>
              </div>

              {/* Botton row */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
