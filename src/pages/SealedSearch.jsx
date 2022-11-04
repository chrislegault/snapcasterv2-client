import React from 'react';
import SealedSearchBox from '../components/SealedSearchBox';
import { useAtomValue } from 'jotai';
import { filteredSealedResultsAtom, sealedSearchInfoAtom } from '../atoms';
import SealedCatalogView from '../components/SealedCatalogView';
import SealedSearchInfo from '../components/SealedSearchInfo';
export default function SealedSearch() {
  const filteredResults = useAtomValue(filteredSealedResultsAtom);
  const sealedSearchInfo = useAtomValue(sealedSearchInfoAtom);
  return (
    <>
      <div className="max-w-xl mx-auto">
        <SealedSearchBox />
        <div className="p-2" />
        {filteredResults && (
          <>
            {sealedSearchInfo && (
              <SealedSearchInfo
                numResults={filteredResults.length}
                searchTerm={sealedSearchInfo.searchTerm}
              />
            )}

            <SealedCatalogView data={filteredResults} />
          </>
        )}
      </div>
    </>
  );
}
