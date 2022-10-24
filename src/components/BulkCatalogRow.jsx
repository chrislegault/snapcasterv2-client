import React from 'react';
import { useState, useEffect } from 'react';
import VariantSelectorModal from './VariantSelectorModal';
import { useAtom } from 'jotai';
import { selectedCatalogRowsAtom } from '../atoms';

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
  const [rowSelected, setRowSelected] = useState(true);
  const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(
    selectedCatalogRowsAtom
  );
  // This is randomly initialized to the first card in the list
  const [selectedVariant, setSelectedVariant] = useState(card.variants[0]);

  const toggleSelectCard = () => {
    // if the row is in the selectedCatalogRows array, remove it and set rowSelected to false
    // otherwise, add it and set rowSelected to true
    if (rowSelected) {
      setSelectedCatalogRows(
        selectedCatalogRows.filter(row => row.cardName !== card.cardName)
      );
      setRowSelected(false);
    }
    if (!rowSelected) {
      // Row is the card with the selected variant
      const row = {
        cardName: card.cardName,
        selectedVariant: selectedVariant,
        variants: card.variants,
      }

      console.log("row", row);
      setSelectedCatalogRows([...selectedCatalogRows, row]);
      setRowSelected(true);
    }
  };

const handleClick = () => {
      // open the modal
      setOpen(true);
    };


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

  // useEffect to set the selectedVariant to the lowestPriceVariant and push the row to the selectedCatalogRows array
  // we only want this to run once when the component mounts
  useEffect(() => {
    const row = {
      cardName: card.cardName,
      selectedVariant: lowestPriceVariant[0],
      variants: card.variants,
    };
    setSelectedCatalogRows([...selectedCatalogRows, row]);
    setSelectedVariant(lowestPriceVariant[0]);


  }, []);


  // everytime the selectedVariant changes, we want to update the row for this card in the selectedCatalogRows array
  useEffect(() => {
    const row = {
      cardName: card.cardName,
      selectedVariant: selectedVariant,
      variants: card.variants,
    };
    setSelectedCatalogRows(
      selectedCatalogRows.map(row => {
        if (row.cardName === card.cardName) {
          return row = {
            cardName: card.cardName,
            selectedVariant: selectedVariant,
            variants: card.variants,
          };
        } else {
          return row;
        }
      })
    );
  }, [selectedVariant]);

  // useEffect(() => {
  //   setSelectedVariant(lowestPriceVariant[0]);
  //   // Row is the card object with the selected variant
  //   const row = {
  //     cardName: card.cardName,
  //     selectedVariant: selectedVariant,
  //     variants: card.variants,
  //   }

    
  // }, []);

  // console.log("lowestPriceVariant: ", lowestPriceVariant);

  // setSelectedVariant(lowestPriceVariant[0]);

  return (
    <div>
      {/* Modal */}
      {open && (
        <VariantSelectorModal
          cardVariants={card.variants}
          setSelectedVariant={setSelectedVariant}
          open={open}
          setOpen={setOpen}
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
