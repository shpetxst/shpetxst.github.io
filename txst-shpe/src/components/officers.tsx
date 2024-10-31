import React from "react";

export default function OfficersPage() {
  const officers = [
    { name: "Sean Iruegas", position: "President", major:"Major in Mechanical Engineering Technology", class:"Class of '25", image: "/placeholder.svg?height=200&width=200" },
    { name: "Maresa ", position: "Vice President", major:"Major in ", class:"Class of '", image: "/placeholder.svg?height=200&width=200" },
    { name: "Alberto Rodriguez", position: "pos", major:"Major in ", class:"Class of '", image: "/placeholder.svg?height=200&width=200" },
    { name: "Aldo Guerrero", position: "Director of Information", major:"Major in Computer Science", class:"Class of '25", image: "/placeholder.svg?height=200&width=200" },
    { name: "Desy Vasquez", position: "pos", major:"Major in ", class:"Class of '", image: "/placeholder.svg?height=200&width=200" },
    { name: "Edwin Vazquez", position: "pos", major:"Major in ", class:"Class of '", image: "/placeholder.svg?height=200&width=200" },
    { name: "Gabriel Ciaburri", position: "Chapter Development Director", major:"Major in Computer Science", class:"Class of '25", image: "/placeholder.svg?height=200&width=200" },
    { name: "Jimena Gonzalez", position: "Assistant Officer", major:"Major in Industrial Engineering", class:"Class of '26", image: "/placeholder.svg?height=200&width=200" },
    { name: "Junior Segura-Ontiveros", position: "Secretary", major:"Major in Manufacturing Engineering", class:"Class of '26", image: "/placeholder.svg?height=200&width=200" },
    { name: "Justin Villaseñor", position: "Media Director", major:"Major in Computer Science", class:"Class of '25", image: "/placeholder.svg?height=200&width=200" },
    { name: "Noemy Cerevantes", position: "pos", major:"Major in ", class:"Class of '", image: "/placeholder.svg?height=200&width=200" },
    { name: "Thomas Mendoza", position: "Assistant Officer", major:"Major in Computer Science", class:"Class of '26", image: "/placeholder.svg?height=200&width=200" },
    { name: "Xaritzy Cadena", position: "Fundraiser Director", major:"Major in Industrial Engineering", class:"Class of '25", image: "/placeholder.svg?height=200&width=200" },

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
            <h2 className="text-3xl font-bold mb-12 text-center text-texas-maroon">Officer Board</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                  <img src={officer.image} alt={officer.name} className="w-40 h-40 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{officer.name}</h3>
                  <p className="text-gray-600">{officer.position}</p>
                  <p className="text-gray-600">{officer.class}, {officer.major}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}