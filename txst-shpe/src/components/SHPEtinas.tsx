import React from 'react';

export default function SHPEtinasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-texas-maroon to-texas-gold py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">SHPEtinas</h1>
            <p className="text-xl mb-8 text-white">Empowering Hispanic Women in STEM</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">About SHPEtinas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-shpe-dark-blue">Our Mission</h3>
                <p>SHPEtinas is dedicated to empowering Hispanic women in STEM fields through mentorship, professional development, and community building.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-shpe-dark-blue">Key Initiatives</h3>
                <ul className="list-disc list-inside">
                  <li>Mentorship Programs</li>
                  <li>Professional Development Workshops</li>
                  <li>Networking Events</li>
                  <li>STEM Outreach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <p className="text-center">More information coming soon!</p>
      </main>
    </div>
  );
}