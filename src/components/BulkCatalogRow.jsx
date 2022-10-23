import React from 'react';
import { useState, useEffect } from 'react';

const conditionPriorityMap = {
  NM: 1,
  LP: 2,
  PL: 2,
  MP: 3,
  HP: 4,
  DMG: 5,
};
export default function BulkCatalogRow({ card }) {
  // This is randomly initialized to the first card in the list
  const [selectedVariant, setSelectedVariant] = useState(card.variants[0]);
  // we want to go to card.variants and find the variant with the lowest price
  const lowestPriceVariant = card.variants.reduce((acc, variant) => {
    if (acc.length === 0) {
      acc.push(variant);
      console.log('first variant pushed to acc: ', acc);
    } else {
      if (variant.price < acc[0].price) {
        acc = [variant];
      } else if (variant.price === acc[0].price) {
        // check if the condition is better using the conditionPriorityMap
        if (
          conditionPriorityMap[variant.condition] <
          conditionPriorityMap[acc[0].condition]
        ) {
          acc = [variant];
        } else if (
          conditionPriorityMap[variant.condition] ===
          conditionPriorityMap[acc[0].condition]
        ) {
          // same condition, same price, check foil
          if (variant.foil && !acc[0].foil) {
            acc = [variant];
          }
        }
      }
    }
    return acc;
  }, []);

  // useEffect to set the selectedVariant to the lowestPriceVariant
  useEffect(() => {
    setSelectedVariant(lowestPriceVariant[0]);
  }, [lowestPriceVariant]);

  // console.log("lowestPriceVariant: ", lowestPriceVariant);

  // setSelectedVariant(lowestPriceVariant[0]);

  return (
    <div>
      {selectedVariant && (
        <div>
          {/* SMALL LAYOUT */}
          {/* center everything in a column */}
          <div className="flex flex-col items-center sm:hidden">
            {/* Image */}
            <img
              src={selectedVariant.image}
              alt="card"
              className="w-7/12 sm:w-16 md:w-24 rounded-2xl sm:rounded-md h-fit"
            />
            {/* Card Info */}
            <div className="">
              <div>{selectedVariant.name}</div>
              <div>{selectedVariant.set}</div>
              <div>{selectedVariant.condition}</div>
              {selectedVariant.foil && <div>Foil</div>}
              <div>{selectedVariant.price}</div>

              {/* Button to open the modal for changing the selectedVariant */}
              <button
                className="bg-primary text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log('clicked');
                }}
              >
                Change
              </button>

              
            </div>
          </div>

          {/* SM + LAYOUT */}
          <div className="hidden sm:flex sm:flex-col p-2 hover:backdrop-brightness-75 rounded-md">
            <div className="grid grid-cols-12">
              {/* Image */}
              <img
                src={selectedVariant.image}
                alt="card"
                className="sm:w-16 md:w-24 sm:rounded-md h-fit col-span-3"
              />
              {/* Card Details col 1 */}
              <div className="flex flex-col p-2 col-span-5">
                <div>{selectedVariant.name}</div>
                <div>{selectedVariant.set}</div>
                {/* Buy button, goes to bottom of the col*/}
                <button
                  className="bg-primary text-white font-bold py-2 px-4 rounded mt-auto"
                  onClick={() => {
                    console.log('clicked');
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
                >Other versions ></button>
                </div>
              </div>
          </div>
        </div>

      )}
    </div>
  );
}
