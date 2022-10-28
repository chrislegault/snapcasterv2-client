import React, { useState } from 'react';
import { useSetAtom, useAtom } from 'jotai';
import { selectedCatalogRowsAtom, bulkCardResultsAtom } from '../atoms';

export default function VariantSelectorModal({
  card,
  open,
  setOpen,
}) {
  // basic popup modal
  const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(selectedCatalogRowsAtom);
  const [bulkCardResults, setBulkCardResults] = useAtom(bulkCardResultsAtom);

  return (
    <div>
      {/* Modal */}
      {/* Darkened Backdrop Overlay */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } fixed inset-0 bg-black opacity-50 z-10`}
        onClick={() => setOpen(false)}
      ></div>
      {/* Modal Content */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } fixed inset-0 z-20 flex items-center justify-center`}
      >
        {/* Modal Content */}
        <div className="bg-white dark:bg-darkBackground w-11/12 md:w-2/3 lg:w-1/3 rounded-lg shadow-lg z-30">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-2xl font-bold">Select a variant</h3>
            <button className="close-modal" onClick={() => setOpen(false)}>
              &times;
            </button>
          </div>
          {/* Modal Body */}
          <div className="p-4">
            {/* Map out the variants into a scrolling box */}
            <div className="overflow-y-scroll h-96">
              {card.variants.map((variant, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 hover:backdrop-brightness-75 rounded-md"
                >
                  <div className="flex items-center">
                    <img
                      src={variant.image}
                      alt="card"
                      className="w-16 sm:w-24 rounded-sm sm:rounded-md"
                    />
                    <div className="ml-2">
                      <div className="text-md font-bold">{variant.name}</div>
                      <div className="text-sm">{variant.set}</div>
                     
                      <div className="text-sm">{variant.website}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex flex-row space-x-2">
                    {variant.foil && <div className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Foil</div>}

                  </div>
                      <div className="text-md font-bold">${variant.price}</div>
                      <div className="text-sm font-bold">{variant.condition}</div>

                  <button
                    className="btn-small mt-2"
                    onClick={() => {
                      // change the selectedVariant in the card object in the bulkCardResults
                      const newBulkCardResults = bulkCardResults.map((card) => {
                        // if card.cardName is in variant.name.lower case, then change the selectedVariant
                        if (card.cardName.toLowerCase() === variant.name.toLowerCase()) {
                          return {
                            ...card,
                            selectedVariant: variant,
                          };
                        } else {
                          return card;
                        }
                      });
                      setBulkCardResults(newBulkCardResults);

                      setOpen(false);
                    }}
                  >
                    Select
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Modal Footer */}
          <div className="flex justify-end p-4 border-t">
            <button
              className="btn py-2 px-4"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
