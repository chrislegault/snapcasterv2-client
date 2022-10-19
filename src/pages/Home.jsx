import React from 'react';
import SingleCardSearch from '../components/SingleCardSearch';
import { useAtomValue } from 'jotai';
import { hideWelcomeMessage } from '../atoms';

export default function Home() {
  const hideWelcomeMessageValue = useAtomValue(hideWelcomeMessage);
  return (
    <>
      {/* Home page content container */}
      <div className="flex flex-col items-center">
        { !hideWelcomeMessageValue && <h1 className="m-3 p-10 text-2xl font-bold">Welcome to snapcaster</h1>}
        <SingleCardSearch />
      </div>
    </>
  );
}
