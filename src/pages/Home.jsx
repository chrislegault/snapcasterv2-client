import React from 'react';
import SingleCardSearch from '../components/SingleCardSearch';
import { useAtomValue } from 'jotai';
import { hideWelcomeMessage } from '../atoms';
import Header from '../components/Header';

export default function Home() {
  const hideWelcomeMessageValue = useAtomValue(hideWelcomeMessage);
  return (
    <>
      <div className="max-w-xl mx-auto">
        {!hideWelcomeMessageValue && <Header />}
        <SingleCardSearch />
      </div>
    </>
  );
}
