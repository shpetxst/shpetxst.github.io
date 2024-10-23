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

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Add to Your Calendar</h2>
            <p className="mb-8">Want to stay up to date? Add our calendar.</p>
            <a href="#" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Subscribe to Calendar
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
