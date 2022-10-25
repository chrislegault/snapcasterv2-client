import React from 'react';
import { useState, useEffect } from 'react';
import VariantSelectorModal from './VariantSelectorModal';
import { useAtom } from 'jotai';
import {
  selectedCatalogRowsAtom,
  selectedCatalogRowsPriceAtom,
  selectedCatalogRowsQuantityAtom,
  selectedBulkInfoAtom,
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
    selectedCatalogRowsAtom,
  );
  // This is randomly initialized to the first card in the list
  const [selectedVariant, setSelectedVariant] = useState(card.variants[0]);
  const [selectedBulkInfo, setSelectedBulkInfo] = useAtom(selectedBulkInfoAtom);

  const toggleSelectCard = () => {
    // if the row is selected, remove it from the selectedCatalogRows
    if (rowSelected) {
      setSelectedCatalogRows(
        selectedCatalogRows.filter(row => row.cardName !== card.name),
      );
      setSelectedBulkInfo({
        ...selectedBulkInfo,
        numCardsSelected: selectedBulkInfo.numCardsSelected - 1,
        priceOfSelected:
          selectedBulkInfo.priceOfSelected - selectedVariant.price,
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
        priceOfSelected:
          selectedBulkInfo.priceOfSelected + selectedVariant.price,
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
            {/* Create a card that overlays the bottom 1/4 of the image to show its price */}
            <div className="relative w-7/12">
              <img
                className="rounded-md w-full"
                src={selectedVariant.image}
                alt={card.name}
              />
              {/* Card Details */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-90 rounded-b-md">
                <div className="flex flex-col justify-center h-full p-2">
                  {/* Card Info */}
                  <div className="grid grid-cols-12">
                    <div className="col-span-8 ml-1">
                      {/* the card names can be long, make sure they don't overflow the column or span multiple lines */}

                      <div className="text-sm font-bold truncate overflow-ellipsis overflow-hidden">
                        {selectedVariant.name}
                      </div>
                      <div className="text-xs truncate overflow-ellipsis overflow-hidden">
                        {selectedVariant.set}
                      </div>

                      <div className="text-xs">{selectedVariant.website}</div>

                      {/* Button to open the modal for changing the selectedVariant */}

                      {/* Button to open modal to switch selectedVariant */}
                      <button
                        className="text-primary text-xs font-bold underline"
                        onClick={handleClick}
                      >
                        Other versions
                      </button>
                    </div>
                    <div className="col-span-1" />
                    <div className="col-span-3 text-end">
                      <div className="text-sm font-bold">
                        ${selectedVariant.price}
                      </div>

                      <div className="text-xs font-bold">
                        {selectedVariant.condition}
                      </div>
                      {selectedVariant.foil && (
                        <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                          Foil
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Buy button */}
            <div className="flex flex-row w-7/12 items-center">
              {/* Selector */}
              <div className="mr-auto flex flex-row">
                <div className="mr-1">Select</div>
                {/* Selector Checkbox */}
                <div className="col-span-1 flex justify-center items-center">
                  <input
                    type="checkbox"
                    checked={rowSelected}
                    onChange={toggleSelectCard}
                  />
                </div>
              </div>
              {/* Buy Button */}
              <div>
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
                className="sm:w-24 sm:rounded-md h-fit col-span-2"
              />
              {/* Card Details col 1 */}
              <div className="flex flex-col p-2 col-span-5">
                <div className="text-md font-bold">{selectedVariant.name}</div>
                <div className="text-sm">{selectedVariant.set}</div>
                <div className="text-sm">{selectedVariant.website}</div>
                                {/* Button to open modal to switch selectedVariant */}
                                <button
                  className="btn-outlined-small mt-auto"
                  onClick={handleClick}
                >
                  Other versions
                </button>

              </div>
              {/* Card Details col 2 */}
              {/* make this column go to the end of the parent flex row */}

              <div className="flex flex-col ml-auto text-right p-2 col-span-4">
                <div className="font-bold text-md">${selectedVariant.price}</div>

                <div className="flex flex-row space-x-2 justify-end">
                  {selectedVariant.foil && (
                    <div className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                      Foil
                    </div>
                  )}
                  <div className="text-sm font-bold">{selectedVariant.condition}</div>
                </div>
                {/* Buy button, goes to bottom of the col*/}
                <button
                  className="btn-small mt-auto"
                  onClick={() => {
                    //open selectedVariant.link in a new tab
                    window.open(selectedVariant.link, '_blank');
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
