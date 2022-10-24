import React, {useEffect} from 'react';
import { useAtomValue, useAtom, useSetAtom } from 'jotai';
import { bulkCardResultsAtom, 
  selectedCatalogRowsPriceAtom,
  expectedBulkCardCountAtom, 
  missingCardNamesAtom, 
  selectedCatalogRowsAtom,
  selectedBulkInfoAtom
} from '../atoms';

export default function BulkSearchResultsInfo({numResults}) {
  const missingCardNames = useAtomValue(missingCardNamesAtom);
  const dummyMissingCards = ['Foil Island', 'Austere Command'];
  const [selectedCatalogRows, setSelectedCatalogRows] = useAtom(selectedCatalogRowsAtom);
  const expectedBulkCardCount = useAtomValue(expectedBulkCardCountAtom);
  const selectedCatalogRowsPrice = useAtomValue(selectedCatalogRowsPriceAtom);

// -------------------------------
  const [selectedBulkInfo, setSelectedBulkInfo] = useAtom(selectedBulkInfoAtom);





  return (
    <div className="bg-gray-100 dark:bg-darkerBackground rounded-md p-1 md:p-3">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <div className="text-sm md:text-base font-bold">Results</div>
          <div className="text-xs md:text-sm">{numResults} of {expectedBulkCardCount} cards found</div>
          <div className="text-xs md:text-sm">{selectedBulkInfo.numCardsSelected} cards selected</div>
          {/* round the price of selected to 2 decimals */}
          <div className="text-xs md:text-sm">Price of selected: ${selectedBulkInfo.priceOfSelected.toFixed(2)}</div>
        
        {missingCardNames.length > 0 && <div>
          <div className="text-xs md:text-sm">
            We couldn't any results for these cards:
          </div>
          <div className="bg-gray-500 dark:bg-gray-700 rounded-md p-1 md:p-3">
            {missingCardNames.map((card, index) => (
              <div className="text-xs md:text-sm" key={index}>
                {card}
              </div>
            ))}
          </div>
        </div>
}

        </div> {/* end of column */}
      </div>
    </div>
 );
}
