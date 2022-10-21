import React from 'react';
import SingleCardSearch from '../components/SingleCardSearch';
import { useAtomValue } from 'jotai';
import { hideWelcomeMessage } from '../atoms';

export default function Home() {
  const hideWelcomeMessageValue = useAtomValue(hideWelcomeMessage);
  return (
    <>
      <div className="max-w-lg mx-auto">
        <SingleCardSearch />
      </div>
    </>
  );
}
