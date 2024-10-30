import React from 'react';

export default function MeritsPage() {
  const meritCategories = [
    { title: 'What is the merit board?', description: 'The SHPE Merit Leaderboard is our way of recognizing and rewarding active members who contribute to our chapter’s success. The leaderboard will go off of a point system.' },
    { title: 'What can I win after?', description: 'You could win exciting rewards like SHPE merchandise, gift cards, or special recognition at our events. It’s our way of saying thank you for your dedication and hard work.' },
    { title: 'How can I earn points?', description: 'You can earn points by attending meetings, volunteering, participating in events, and taking on leadership roles. The more involved you are, the higher your score will be on the leaderboard.' },
    { title: 'How can I enter?', description: 'Every dues paying SHPE member is automatically enrolled! Just participate in chapter activities, and your points will be tracked. You can check your progress at every general meeting to see how you’re doing.' },
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
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">Current Merit board</h2>
            {/* iframe for keepthescore embed here*/}
            <p>Check back soon to see your progress!</p>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">We want to reward our members, here&apos;s how.</h2>
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

      </main>
    </div>
  );
}