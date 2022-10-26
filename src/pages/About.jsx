import React from 'react';

export default function About() {
    const openDonationLink = () => {
        window.open('https://www.paypal.com/donate/?business=KK537LVP4TZ5Q&no_recurring=0&item_name=Thank+you+for+donating+to+snapcaster%2C+I+really+appreciate+your+support+%3A%29&currency_code=CAD', '_blank');
    }
  return (
    <>
      <div className="max-w-xl mx-auto space-y-5 mt-5">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4">
            This is a simple app that allows you to search for Magic: The Gathering
            singles listed on Canadian websites. We search all the websites for you
            and display the results in one place.
        </p>
        <h2 className="text-lg font-bold">
            Support
        </h2>
        <p className="mt-4">
            If you would like to support the project, please consider donating to
            support our server costs. Right now we are a one person team, and any donations
            will go towards keeping the site up and running, and a couple redbulls to keep
            me going while adding more websites!
        </p>
        <button className="btn" onClick={openDonationLink}>
            Donate
        </button>
        <p className="mt-4">
            If you are a developer and would like to contribute to the project, please email me at
            epplerdev@gmail.com.
        </p>
        <h2>
            Privacy and Terms of Service coming soon. I currently log any search queries
            and store them in a database for debugging and basic analytics. I do not 
            share this data with anyone.
        </h2>
      </div>
    </>
  );
}
