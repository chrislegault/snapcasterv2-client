import React from 'react';
import { useAtomValue } from 'jotai';
import { listViewAtom } from '../atoms';

const websiteLogos = {
  gauntlet:
    'http://cc-client-assets.s3.amazonaws.com/store/gauntletgamesvictoria/7c8176e703db451bad3277bb6d4b8631/medium/Transparent_logo.png',
  houseOfCards: 'https://i.ibb.co/qnytc5Q/house-of-cards-logo.png',
  kanatacg: 'https://i.ibb.co/hm3qKWc/wizardstower-removebg-preview.png',
  fusion:
    'https://cc-client-assets.s3.amazonaws.com/store/fusiongamingonline/e85497a0877911e79bd1b58786c09dea/large/fusiongamingonline_logo2.png',
  four01:
    'https://cdn.shopify.com/s/files/1/1704/1809/files/Logo_For_Website_260x_b5b9ece0-d6a5-4807-9427-0d488c650cb7_320x.png?v=1582044237',
  everythinggames: 'https://cdn.shopify.com/s/files/1/0618/8905/2856/files/Header_76747500-dd40-4d94-8016-a1d21282e094_large.png?v=1650298823'
};

export default function SearchRow({ cardData }) {
  const handleClick = () => {
    window.open(cardData.link, '_blank');
  };
  
  return (
    <>
        <>
          <div className="grid grid-cols-12 gap-4 m-1 p-2 hover:bg-darkerBackground rounded-md">
            <div className="col-span-3">
              <img
                src={cardData.image}
                alt="card"
                className="w-16 md:w-24 rounded-md"
              />
            </div>
            <div className="col-span-5 mt-2">
              <div className="flex flex-col">
                <div className="text-md font-bold">{cardData.name}</div>
                <div className="text-sm">{cardData.set}</div>
                {/* match cardData.website to it's websiteLogo from the map */}



                <img
                  src={websiteLogos[cardData.website]}
                  alt="website logo"
                  className="m-1 w-20 rounded-md"
                />
                {/* <div className="text-sm">{cardData.website}</div> */}
              </div>
            </div>
            <div className="col-span-4 mt-2">
              <div className="flex flex-col items-end">
                <div className="text-xl font-bold">${cardData.price}</div>
                <div className="flex flex-row space-x-2">
                {cardData.foil && <div className="text-sm font-bold text-primary">Foil</div>}
                <div className="text-sm font-bold">{cardData.condition}</div>
                </div>
                <button className="bg-primary  text-white rounded-md px-1 py-1 w-20" onClick={handleClick}>
                  Buy
                </button>
              </div>
            </div>
          </div>
        </>

    </>
  );
}
