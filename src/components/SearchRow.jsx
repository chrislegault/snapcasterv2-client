import React from 'react';

export default function SearchRow({ cardData }) {
  return (
    <div className="grid grid-cols-12 gap-4 m-1 p-2 hover:bg-darkerBackground rounded-md">
      <div className="col-span-3">
        <img src={cardData.image} alt="card" className="w-24" />
      </div>
      <div className="col-span-7 mt-2">
        <div className="flex flex-col">
          <div className="text-xl font-bold">{cardData.name}</div>
          <div className="text-sm">{cardData.set}</div>
          <div className="text-sm">{cardData.store}</div>
        </div>
      </div>
      <div className="col-span-2 mt-2">
        <div className="flex flex-col">
          <div className="text-xl font-bold">${cardData.price}</div>
          <div className="text-sm">{cardData.condition}</div>
          <button className="bg-deepRed  text-white rounded-md px-2 py-1">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
