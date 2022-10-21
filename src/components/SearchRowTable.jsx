import React from 'react';

export default function SearchRowTable({cardData}) {
  return (
      <tr className='hover:bg-darkerBackground'>
        <td className='overflow-hidden text-ellipsis whitespace-nowrap'>{cardData.name}</td>
        <td className='hidden sm:table-cell'>{cardData.website}</td>
        <td className=''>{cardData.condition}</td>
        <td className=''>{cardData.price}</td>
        <td className='flex justify-center'>
          <button className=" border border-red-600 text-white rounded-md px-1 py-1 w-12">
            Buy
          </button>
        </td>
      </tr>
  );
}
