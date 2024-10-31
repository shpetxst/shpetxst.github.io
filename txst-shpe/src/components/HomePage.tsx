import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import img0 from '../assets/images/image000001.jpg';
import img1 from '../assets/images/IMG_0340.jpg';
import img2 from '../assets/images/IMG_2770.jpg';
import img3 from '../assets/images/IMG_9833.jpg';
import img4 from '../assets/images/IMG_9852.jpg';
import img5 from '../assets/images/J1A03015.jpeg';
import homeimg from '../assets/images/IMG_1708.jpg'

// Import recent Instagram post images
import postImg1 from '../assets/images/SHPEOFRENDA.jpg';
import postImg2 from '../assets/images/SHPEACCENTURE.jpg';
import postImg3 from '../assets/images/SHPENATIONALCONV.jpg';

const slideshowImages = [img0, img1, img2, img3, img4, img5];
const recentInstagramPosts = [
  { image: postImg1, link: 'https://www.instagram.com/p/DBrCZOxxnCo/' },
  { image: postImg2, link: 'https://www.instagram.com/p/DBenHk2xxbf/?img_index=1' },
  { image: postImg3, link: 'https://www.instagram.com/p/DBefDw7xhCl/' }
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

        <section id="about" className="py-20">
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
                <img src={homeimg} alt="SHPE members collaborating" className="rounded-lg shadow-lg w-full"/>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Get in Touch</h2>
            <p className="mb-8">Have questions or want to learn more? Reach out to us!</p>
            <Link to="/contact" className="bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

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

      <footer className="bg-texas-maroon text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Texas State University SHPE. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-shpe-orange">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-shpe-orange">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}