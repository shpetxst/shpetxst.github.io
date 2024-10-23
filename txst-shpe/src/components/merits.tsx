import React from 'react';
import { Link } from 'react-router-dom';

export default function MeritsPage() {
  const meritCategories = [
    { title: 'Academic Excellence', description: 'Recognizing outstanding academic achievements' },
    { title: 'Leadership', description: 'Honoring exceptional leadership within SHPE and beyond' },
    { title: 'Community Service', description: 'Celebrating dedication to community outreach and volunteering' },
    { title: 'Professional Development', description: 'Acknowledging efforts in career growth and skill enhancement' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-texas-maroon to-texas-gold py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">SHPE Merits</h1>
            <p className="text-xl mb-8 text-white">Recognizing Excellence in Our Community</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">Merit Categories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {meritCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Recent Merit Recipients</h2>
            <p className="mb-8">Congratulations to our recent merit recipients for their outstanding achievements!</p>
            <Link to="/recipients" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              View Recipients
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Nominate a Member</h2>
            <p  className="mb-8">Know someone who deserves recognition? Nominate them for a SHPE merit!</p>
            <Link to="/nominate" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Submit Nomination
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}