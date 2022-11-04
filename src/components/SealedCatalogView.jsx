import React from 'react'
import SealedCatalogRow from './SealedCatalogRow'

export default function SealedCatalogView({data}) {
  return (
    <>
        {data && data.map((product, index) => (
            <SealedCatalogRow product={product} key={index}/>
        ))}
    </>
  )
}
