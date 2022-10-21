import React from 'react';
import SearchRowTable from './SearchRowTable';

export default function ListView({cardData}) {
  return (
    <table className="table-auto table-fixed w-full mt-3">
      <thead>
        <tr>
          <th className="border border-slate-600 w-1/4">Card</th>
          <th className="border border-slate-600 w-1/4">Website</th>
          <th className="border border-slate-600 w-1/6">Condition</th>
          <th className="border border-slate-600 w-1/6">Price</th>
          <th className="border border-slate-600 w-1/6">Buy</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map(cardData => (
          <SearchRowTable cardData={cardData} key={cardData.id} />
        ))}
      </tbody>
    </table>
  );
}
