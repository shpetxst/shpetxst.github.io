import React from 'react';

export default function OfficersPage() {
  const officers = [
    { name: 'John Doe', position: 'President', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Jane Smith', position: 'Vice President', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Mike Johnson', position: 'Treasurer', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Emily Brown', position: 'Secretary', image: '/placeholder.svg?height=200&width=200' },
    { name: 'David Lee', position: 'Events Coordinator', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Sarah Garcia', position: 'Outreach Chair', image: '/placeholder.svg?height=200&width=200' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-texas-maroon to-texas-gold py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">TXST SHPE Officers</h1>
            <p className="text-xl mb-8 text-white">Meet Our Leadership Team</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-texas-maroon">Executive Board</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                  <img src={officer.image} alt={officer.name} className="w-40 h-40 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{officer.name}</h3>
                  <p className="text-gray-600">{officer.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Join Our Leadership Team</h2>
            <p className="mb-8">Interested in becoming an officer? Learn about our election process and available positions.</p>
            <a href="#" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Learn More
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}