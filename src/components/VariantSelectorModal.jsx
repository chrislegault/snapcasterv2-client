import React, { useState } from 'react';
import { useSetAtom, useAtom } from 'jotai';
import { selectedBulkInfoAtom } from '../atoms';

export default function VariantSelectorModal({
  cardVariants,
  selectedVariant,
  setSelectedVariant,
  open,
  setOpen,
  isSelected,
}) {
  // basic popup modal

  const [selectedBulkInfo, setSelectedBulkInfo] = useAtom(selectedBulkInfoAtom);

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
        <div className="bg-white dark:bg-darkBackground w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg z-30">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-2xl font-bold">Select a Variant</h3>
            <button className="close-modal" onClick={() => setOpen(false)}>
              &times;
            </button>
          </div>
          {/* Modal Body */}
          <div className="p-4">
            {/* Map out the variants into a scrolling box */}
            <div className="overflow-y-scroll h-96">
              {cardVariants.map((variant, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 hover:backdrop-brightness-75 rounded-md"
                >
                  <div className="flex items-center">
                    <img
                      src={variant.image}
                      alt="card"
                      className="w-16 h-24 rounded-sm"
                    />
                    <div className="ml-2">
                      <div>{variant.name}</div>
                      <div>{variant.set}</div>
                      <div>{variant.condition}</div>
                      {variant.foil && <div>Foil</div>}
                      <div>{variant.price}</div>
                      <div>{variant.website}</div>
                    </div>
                  </div>
                  <button
                    className="bg-primary text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        // update the selectedBulkInfo to reflect the price change
                        if (isSelected) {
                        setSelectedBulkInfo({
                          ...selectedBulkInfo,
                          priceOfSelected:
                            selectedBulkInfo.priceOfSelected -
                            selectedVariant.price +
                            variant.price,
                        });
                      }
                        // update the selectedVariant
                        setSelectedVariant(variant);

                      setOpen(false);
                    }}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Modal Footer */}
          <div className="flex justify-end p-4 border-t">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded"
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
