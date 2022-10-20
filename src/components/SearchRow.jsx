import React from 'react';

export default function SearchRow({ cardData }) {
  return (
    <div className="grid grid-cols-12 gap-4 m-1 p-2 hover:bg-darkerBackground rounded-md">
      <div className="col-span-3">
        <img src={cardData.image} alt="card" className="w-16 md:w-24 rounded-md" />
      </div>
      <div className="col-span-5 mt-2">
        <div className="flex flex-col">
          <div className="text-md font-bold">{cardData.name}</div>
          <div className="text-sm">{cardData.set}</div>
          <div className="text-sm">{cardData.website}</div>
        </div>
      </div>
      <div className="col-span-4 mt-2">
        <div className="flex flex-col items-end">
          <div className="text-xl font-bold">${cardData.price}</div>
          <div className="text-sm font-bold">{cardData.condition}</div>
          <button className="bg-deepRed  text-white rounded-md px-1 py-1 w-20">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
