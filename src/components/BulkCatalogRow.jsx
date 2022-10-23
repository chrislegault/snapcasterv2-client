import React from 'react';
import { useState } from 'react';

export default function BulkCatalogRow({ card }) {
  console.log('Creating card tow for card: ', card);
  const [selectedCard, setSelectedCard] = useState(null);
  // get the card in card.variants with the lowest price and set that as the selected card
  const lowestPrice = card.variants.reduce(
    (min, p) => (p.price < min ? p.price : min),
    card.variants[0].price,
  );
  const lowestPriceCard = card.variants.find(
    variant => variant.price === lowestPrice,
  );
  setSelectedCard(lowestPriceCard);

  return (
    <div>
      <div>{card.cardName}</div>
      {selectedCard ? (
        <div>
          <div>{selectedCard.website}</div>
          <div>{selectedCard.price}</div>
          <div>{selectedCard.condition}</div>
        </div>
      ) : (
        <div>No card selected</div>
      )}
    </div>
  );
}
