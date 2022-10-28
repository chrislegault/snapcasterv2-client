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
    'https://i.ibb.co/h9x3Ksb/401games.png',
  everythinggames: 'https://cdn.shopify.com/s/files/1/0618/8905/2856/files/Header_76747500-dd40-4d94-8016-a1d21282e094_large.png?v=1650298823',
  magicstronghold: 'https://magicstronghold-images.s3.amazonaws.com/customizations/logo.png',
  facetoface: 'https://i.ibb.co/W2bPWdK/logo-colored-1.png',
  connectiongames: 'https://i.ibb.co/vBX8vQ0/connectiongames-inverted.png',
  topdeckhero: 'https://d1rw89lz12ur5s.cloudfront.net/store/topdeckhero/1fdf9e60cbd911e7aefa7116e0c551f9/large/topdeckhero.png',
  jeux3dragons: 'https://d1rw89lz12ur5s.cloudfront.net/store/jeux3dragons/ef00baaca6ad43cfb51939c1af74c2c7/large/logo.png',
  sequencegaming: 'https://i.ibb.co/C2jXrmD/sequence-no-bg-inverted.png',
  atlas: 'https://d1rw89lz12ur5s.cloudfront.net/store/atlascollectables/a9e1fed8d2d549cba92c6406b18f8969/large/logo-v2-small-v2.png',
  hairyt: 'https://cdn.shopify.com/s/files/1/0266/9513/9533/files/hariyt-horizontal-logo.png?v=1615403256',
  gamezilla: 'https://cdn.shopify.com/s/files/1/0570/6308/0145/files/Screen_Shot_2018-09-07_at_1.02.57_PM_copy_141x.png?v=1626814255'
};

export default function SearchRow({ cardData }) {
  const handleClick = () => {
    window.open(cardData.link, '_blank');
  };
  
  return (
    <>
        <>
          <div className="grid grid-cols-12 gap-4 m-1 p-2 hover:backdrop-brightness-75 rounded-md">
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
                  className="mt-1 w-12 md:w-20 object-cover" 
                />
                {/* <div className="text-sm">{cardData.website}</div> */}
              </div>
            </div>
            <div className="col-span-4 mt-2">
              <div className="flex flex-col items-end">
                <div className="text-lg font-bold">${cardData.price}</div>
                <div className="flex flex-row space-x-2">
                {cardData.foil && <div className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Foil</div>}
                <div className="text-sm font-bold">{cardData.condition}</div>
                </div>
                <button className="btn-small mt-2"
                  onClick={handleClick}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </>

    </>
  );
}
