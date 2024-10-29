import React, {useState} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  name: string;
  date: string;
  image: string;
}

interface BoardMember {
  name: string;
  position: string;
  image: string;
}

export default function SHPEtinasPage() {
  const boardMembers: BoardMember[] = [
    { name: 'Maria Rodriguez', position: 'President', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Ana Garcia', position: 'Vice President', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Sofia Martinez', position: 'Secretary', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Isabella Lopez', position: 'Treasurer', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Gabriela Hernandez', position: 'Events Coordinator', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Valentina Torres', position: 'Outreach Chair', image: '/placeholder.svg?height=200&width=200' },
  ];

  const events: Event[] = [
    { name: 'SHPEtinas Meet and Greet at Sewell Park', date: 'September 7, 2024', image: '../images/SHPEtinas_group_photo.jpg' },
    { name: 'STEM Outreach at Local High School', date: 'April 5, 2024', image: '/placeholder.svg?height=300&width=400' },
    { name: 'Networking Mixer', date: 'May 20, 2024', image: '/placeholder.svg?height=300&width=400' },
    { name: 'Annual Conference', date: 'June 10, 2024', image: '/placeholder.svg?height=300&width=400' },
    { name: 'Summer Internship Fair', date: 'July 8, 2024', image: '/placeholder.svg?height=300&width=400' },
  ];

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
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">Our Mission</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              SHPEtinas is dedicated to empowering Hispanic women in STEM fields through mentorship, 
              professional development, and community building. We strive to create a supportive 
              network that fosters growth, innovation, and leadership among Hispanic women in 
              science, technology, engineering, and mathematics.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {['Mentorship Programs', 'Professional Development', 'Networking Events', 'STEM Outreach'].map((initiative, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{initiative}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-texas-maroon">Board Committee</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-texas-maroon">SHPEtinas Events</h2>
            <EventSlideshow events={events} />
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Join SHPEtinas</h2>
            <p className="mb-8">Interested in becoming a member? Learn about our membership process and benefits.</p>
            <a href="#" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Learn More
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

interface EventSlideshowProps {
  events: Event[];
}

function EventSlideshow({ events }: EventSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === events.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
        <img 
          src={events[currentIndex].image} 
          alt={events[currentIndex].name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={goToPrevious} 
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Previous event"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext} 
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Next event"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{events[currentIndex].name}</h3>
        <p className="text-gray-600">{events[currentIndex].date}</p>
      </div>
    </div>
  );
}