import React from 'react';
import { Link } from 'react-router-dom';

export default function CalendarPage() {
  const events = [
    { date: '2024-03-15', title: 'General Meeting', description: 'Monthly general meeting for all SHPE members' },
    { date: '2024-03-22', title: 'Resume Workshop', description: 'Learn how to craft an effective engineering resume' },
    { date: '2024-04-05', title: 'Industry Panel', description: 'Q&A session with Hispanic professionals in STEM' },
    { date: '2024-04-18', title: 'SHPEtinas Networking', description: 'Networking event for SHPEtinas members' },
    { date: '2024-05-01', title: 'End of Year Celebration', description: 'Celebrate our achievements for the academic year' },
  ];

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
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-shpe-dark-blue">{event.title}</h3>
                    <span className="text-gray-600">{event.date}</span>
                  </div>
                  <p className="mb-4">{event.description}</p>
                  <Link to={`/event/${index}`} className="text-shpe-blue hover:underline">
                    Event Details
                  </Link>
                </div>
              ))}
            </div>
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