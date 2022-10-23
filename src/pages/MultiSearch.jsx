import React from 'react'
import MultiSearchForm from '../components/MultiSearchForm'
import BulkCatalogView from '../components/BulkCatalogView'
import { useAtomValue } from 'jotai'
import { bulkCardResultsAtom } from '../atoms'

export default function MultiSearch() {

  const bulkCardResults = useAtomValue(bulkCardResultsAtom);

  return (
    <div>
      {/* if bulkCardResults is not null, show BulkCatalogView, else show MultiSearchForm */}
      {bulkCardResults ? <BulkCatalogView /> : <MultiSearchForm />}
    </div>
  )
}
