import React from 'react';

const websiteLogos = {
  gauntlet:
    'http://cc-client-assets.s3.amazonaws.com/store/gauntletgamesvictoria/7c8176e703db451bad3277bb6d4b8631/medium/Transparent_logo.png',
  houseOfCards: 'https://i.ibb.co/qnytc5Q/house-of-cards-logo.png',
  kanatacg: 'https://i.ibb.co/hm3qKWc/wizardstower-removebg-preview.png',
  fusion:
    'https://cc-client-assets.s3.amazonaws.com/store/fusiongamingonline/e85497a0877911e79bd1b58786c09dea/large/fusiongamingonline_logo2.png',
  four01: 'https://i.ibb.co/h9x3Ksb/401games.png',
  everythinggames:
    'https://cdn.shopify.com/s/files/1/0618/8905/2856/files/Header_76747500-dd40-4d94-8016-a1d21282e094_large.png?v=1650298823',
  magicstronghold:
    'https://magicstronghold-images.s3.amazonaws.com/customizations/logo.png',
  facetoface: 'https://i.ibb.co/W2bPWdK/logo-colored-1.png',
  connectiongames: 'https://i.ibb.co/vBX8vQ0/connectiongames-inverted.png',
  topdeckhero:
    'https://d1rw89lz12ur5s.cloudfront.net/store/topdeckhero/1fdf9e60cbd911e7aefa7116e0c551f9/large/topdeckhero.png',
  jeux3dragons:
    'https://d1rw89lz12ur5s.cloudfront.net/store/jeux3dragons/ef00baaca6ad43cfb51939c1af74c2c7/large/logo.png',
  sequencegaming: 'https://i.ibb.co/C2jXrmD/sequence-no-bg-inverted.png',
  atlas:
    'https://d1rw89lz12ur5s.cloudfront.net/store/atlascollectables/a9e1fed8d2d549cba92c6406b18f8969/large/logo-v2-small-v2.png',
  hairyt:
    'https://cdn.shopify.com/s/files/1/0266/9513/9533/files/hariyt-horizontal-logo.png?v=1615403256',
  gamezilla:
    'https://cdn.shopify.com/s/files/1/0570/6308/0145/files/Screen_Shot_2018-09-07_at_1.02.57_PM_copy_141x.png?v=1626814255',
  exorgames:
    'https://cdn.shopify.com/s/files/1/0467/3083/8169/files/Untitled-2-01.png?v=1613706669',
  gameknight:
    'https://cdn.shopify.com/s/files/1/0367/8204/7276/files/GK-Logo-Full-Text-Below-1-768x603.png?v=1618430878',
  enterthebattlefield: 'https://i.ibb.co/hdnH9fY/enterthebattlefield.png',
  manaforce:
    'https://d1rw89lz12ur5s.cloudfront.net/store/manaforce/e58b802e2e334d17aacfbf9954a5400e/large/manaforce%20logo%20attempt%204.png',
  firstplayer:
    'https://d1rw89lz12ur5s.cloudfront.net/store/firstplayer/ab9075a71d2949aa8dd1e032f54cf7d8/large/g901%20medium.png',
  orchardcity:
    'https://d1rw89lz12ur5s.cloudfront.net/store/orchardcitygames/eb6cb32f84b34b5cbb1c025fc41c9821/large/logo_v1.png',
  bordercity:
    'https://i.ibb.co/cvNCbXx/Border-City-Games-Large-85873391-3559-47f7-939a-420461a0033f-201x-removebg-preview.png',
};

export default function SealedCatalogRow({ product }) {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 m-1 p-2 hover:backdrop-brightness-75 rounded-md">
        <div className="col-span-3 m-auto">
          <img
            src={product.image}
            alt={product.name}
            className="h-20 md:h-24 rounded-md"
          />
        </div>
        <div className="col-span-5 mt-2">
          <div className="flex flex-col">
            <div className="text-md font-bold">{product.name}</div>
            <div className="text-sm dark:text-gray-400 ">
              {product.language}
            </div>
            <div className="flex flex-row">
            {/* for each tag in product.tag, create a little tag card with a gradient background */}
            {
              product.tags.map((tag) => (
                <div
                  key={tag}
                  className="text-xs font-bold rounded-md px-2 py-1 mt-1 mr-1"
                  style={{
                    background: `linear-gradient(90deg, red 0%, orange 100%)`,
                  }}
                >
                  {tag}
                </div>
              ))
            }
            </div>

          </div>
        </div>
        <div className="col-span-4 mt-2">
          <div className="flex flex-col items-end">
            <div className="text-lg font-bold">{product.price}</div>
            {/* if product.stock >= 1, show the stock, otherwise show a green checkmark */}
            <div className="text-xs font-bold">
              In stock: {product.stock >= 1 ? product.stock : '✓'}
            </div>
            <img
              src={websiteLogos[product.website]}
              alt={product.website}
              className="mt-1 w-12 md:w-12 object-cover"
            />
            <button
              className="btn-small mt-2"
              // onClick - open product.link in a new tab
              onClick={() => window.open(product.link, '_blank')}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
