import React from 'react';

export default function SearchRowTable({cardData}) {
  const handleClick = () => {
    window.open(cardData.link, '_blank');
  };
  return (
      <tr className=' hover:backdrop-brightness-75'> 
        <td className='overflow-hidden text-ellipsis whitespace-nowrap'>{cardData.name}</td>
        <td className='hidden sm:table-cell'>{cardData.website}</td>
        <td className=''>{cardData.condition}</td>
        <td className=''>{cardData.price}</td>
        <td className='flex justify-center'>
          <button className=" border border-primary rounded-md px-1 py-1 w-12" onClick={handleClick}>
            Buy
          </button>
        </td>
      </tr>
  );
}
