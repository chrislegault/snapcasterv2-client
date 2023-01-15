import React from 'react';

export default function About() {
  const openDonationLink = () => {
    window.open(
      'https://www.paypal.com/donate/?business=KK537LVP4TZ5Q&no_recurring=0&item_name=Thank+you+for+donating+to+snapcaster%2C+I+really+appreciate+your+support+%3A%29&currency_code=CAD',
      '_blank',
    );
  };
  return (
    <>
      <div className="max-w-xl mx-auto space-y-7 mt-5">
        <div>
        <h1 className="text-3xl font-bold text-purple-400">About</h1>
        <p className="mt-4">
          Snapcaster allows you to search for Magic: The Gathering singles
          listed on Canadian websites. It will search all the websites for you
          and display the results in one place. If you have any suggestions or
          requests, let me know at epplerdev@gmail.com.
        </p>
        </div>
        <div>
        <h2 className="text-xl font-bold text-purple-400">Support</h2>
        <p className="mt-4">
          If you would like to help with development, contact me at
          epplerdev@gmail.com or submit a pull request on GitHub.
        </p>
        <p className="mt-4">
          Snapcaster is a free service I have been working on in my spare time.
          If you would like to support the project, please consider donating to
          help with the server costs.
        </p>
        <button className="btn mt-4" onClick={openDonationLink}>
          Donate
        </button>
        </div>
        <div>
        <h2 className="text-xl font-bold text-purple-400">Privacy</h2>
        <p className="mt-4">
          I currently log any search queries and store them in a database for
          debugging and basic analytics. I do not share this data with anyone.
        </p>
        </div>
      </div>
    </>
  );
}
