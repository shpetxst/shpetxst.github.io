import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Paths are updated to reference images directly from the public folder
const slideshowImages = [
  "/assets/images/image000001.jpg",
  "/assets/images/IMG_0340.jpg",
  "/assets/images/IMG_2770.jpg",
  "/assets/images/IMG_9833.jpg",
  "/assets/images/IMG_9852.jpg",
  "/assets/images/J1A03015.jpeg"
];

const recentInstagramPosts = [
  { image: "/assets/images/SHPEOFRENDA.jpg", link: "https://www.instagram.com/p/DBrCZOxxnCo/" },
  { image: "/assets/images/SHPEACCENTURE.jpg", link: "https://www.instagram.com/p/DBenHk2xxbf/?img_index=1" },
  { image: "/assets/images/SHPENATIONALCONV.jpg", link: "https://www.instagram.com/p/DBefDw7xhCl/" }
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-texas-maroon to-texas-gold py-20">
          {/* Slideshow */}
          <div className="absolute inset-0 overflow-hidden">
            {slideshowImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Slideshow image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-texas-maroon to-texas-gold opacity-75"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Texas State University SHPE</h1>
            <p className="text-xl mb-8 text-white">Empowering Hispanic Engineers to Realize Their Fullest Potential</p>
            <Link to="https://forms.gle/UYSPTjJj1mcHYCdM6" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Join Us
            </Link>
          </div>
        </section>

        <section id="instagram" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Recent Instagram Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recentInstagramPosts.map((post, index) => (
                <a href={post.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <img
                    src={post.image}
                    alt={`Instagram post ${index + 1}`}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-texas-maroon">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-shpe-dark-blue">Our Mission</h3>
                <p>
                  At Texas State SHPE, we empower Hispanic students to excel in STEM by promoting education, innovation, 
                  and professional growth. In alignment with the College of Science and Engineering, we foster an inclusive environment 
                  where students gain the skills and knowledge necessary for successful careers in science, technology, engineering, 
                  and mathematics, while addressing both regional and global challenges through innovation and research.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-shpe-dark-blue">Our Vision</h3>
                <p>
                  We aim to be a cornerstone in the STEM community, where Hispanic engineers and scientists lead with influence and 
                  innovation. We envision a world where our members are not only equipped to solve complex problems but are also leaders 
                  in advancing technological and scientific literacy on a global scale.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-shpe-dark-blue ">Core Values</h3>
                <ul className="list-disc list-inside">
                  <li><strong>Familia:</strong> We cultivate a welcoming and supportive community that values collaboration and growth.</li>
                  <li><strong>Service:</strong> We are committed to serving society with integrity, empathy, and a dedication to solving real-world problems.</li>
                  <li><strong>Education:</strong> We emphasize the importance of academic excellence and continuous learning, preparing students for successful careers in STEM fields.</li>
                  <li><strong>Resilience:</strong> We empower our members to overcome challenges with optimism, creativity, and perseverance.</li>
                </ul>
              </div>
              <div>
                <img src="/assets/images/IMG_1708.jpg" alt="SHPE members collaborating" className="rounded-lg shadow-lg w-full"/>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className=" py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Get in Touch</h2>
            <p className="mb-8">Have questions or want to learn more? Reach out to us!</p>
            <Link to="/contact" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-texas-maroon text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Texas State University SHPE. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
