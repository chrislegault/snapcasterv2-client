import React from 'react'
import SearchRow from './SearchRow'

export default function CatalogView({cardData}) {
  return (
    <div>
            {cardData.map((cardData) => (
              <SearchRow cardData={cardData} key={cardData.id}/>
            ))}
          </div>
  )
}
