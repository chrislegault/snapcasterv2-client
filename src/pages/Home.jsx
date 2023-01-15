import React from 'react';
import SingleCardSearch from '../components/SingleCardSearch';
import { useAtomValue } from 'jotai';
import { hideWelcomeMessage } from '../atoms';
import Header from '../components/Header';
import CalendarHeatmap from '../components/Heatmap/CalendarHeatmap';
export default function Home() {
  const hideWelcomeMessageValue = useAtomValue(hideWelcomeMessage);
  return (
    <>
      {!hideWelcomeMessageValue && <div className="max-w-xl mx-auto mt-12 sm:mt-16 md:mt-32">
        <Header />
        {/* <CalendarHeatmap /> */}
      </div>}
      <div className="max-w-xl mx-auto">
      <SingleCardSearch />
    </div>
    </>
  );
}
