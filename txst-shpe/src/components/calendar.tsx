import React from 'react';

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-texas-maroon to-texas-gold py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Event Calendar</h1>
            <p className="text-xl mb-8 text-white">Stay up to date with TXST SHPE events</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=shpetxst%40gmail.com&ctz=America%2FChicago"
              style={{ border: 0 }}
              width="100%"
              height="800px"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
