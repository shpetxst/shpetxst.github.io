import React from 'react'
// import { Button } from './components/ui/button.tsx'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">TXST SHPE</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#events" className="hover:underline">Events</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Texas State University SHPE</h1>
            <p className="text-xl mb-8">Empowering Hispanic Engineers to Realize Their Fullest Potential</p>
            {/*<Button size="lg">Join Us</Button>*/}
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p>SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                <ul className="list-disc list-inside">
                  <li>Professional development workshops</li>
                  <li>Networking events with industry professionals</li>
                  <li>Community outreach and STEM education programs</li>
                  <li>Technical projects and competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">Event Title</h3>
                  <p className="mb-4">Short description of the event goes here.</p>
                  {/*<Button variant="outline">Learn More</Button>*/}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="mb-8">Have questions or want to learn more? Reach out to us!</p>
            {/*<Button size="lg">Contact Us</Button>*/}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Texas State University SHPE. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}