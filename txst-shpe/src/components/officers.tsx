import React from "react";

{
  /* 
  
  --  IMPORTANT INFO FOR IMAGES --
  > images must be in jpg or png format, link to converter I used: https://heictojpg.com/
  > naming convention for each file name should be "name_headshot"
  > path before headshot images: /assets/images/headshots/
  > crop images as needed to make sure they're captured properly 
    (note: top of head to below the shoulders is recommended, but it depends on the shape of the image, can go lower or higher)
  
  */
 }

export default function OfficersPage() {
  const officers = [
    { name: "Sean Iruegas", position: "President", major:"Major in Mechanical Engineering Technology", class:"Class of '25", image: "/assets/images/headshots/Sean_headshot.jpeg?height=200&width=200" },
    { name: "Maresa Castaneda", position: "Vice President", major:"Major in Civil Engineering", class:"Class of '26", image: "/assets/images/headshots/Maresa_headshot.jpg?height=200&width=200" },
    { name: "Alberto Rodriguez", position: "External Affairs Executive", major:"Major in Electrical Engineering", class:"Class of '26", image: "/assets/images/headshots/alberto_headshot.JPG?height=200&width=200" },
    { name: "Aldo Guerrero", position: "Director of Information", major:"Major in Computer Science", class:"Class of '25", image: "/assets/images/headshots/Aldo_headshot.jpeg?height=200&width=200" },
    { name: "Desy Vasquez", position: "Director of Events", major:"Major in Electrical Engineering", class:"Class of '24", image: "/assets/images/headshots/Desy_headshot.jpeg?height=200&width=200" },
    { name: "Edwin Vazquez", position: "Treasurer", major:"Major in Electrical Engineering", class:"Class of '27", image: "/assets/images/headshots/Edwin_headshot.jpg?height=200&width=200" },
    { name: "Gabriel Ciaburri", position: "Director of Chapter Development", major:"Major in Computer Science", class:"Class of '25", image: "/assets/images/headshots/Gabe_headshot.JPEG?height=200&width=200" },
    { name: "Jimena Gonzalez", position: "Assistant Officer", major:"Major in Industrial Engineering", class:"Class of '26", image: "/assets/images/headshots/Jimena_headshot.PNG?height=200&width=200" },
    { name: "Junior Segura-Ontiveros", position: "Secretary", major:"Major in Manufacturing Engineering", class:"Class of '26", image: "/assets/images/headshots/Junior_headshot.jpg?height=200&width=200" },
    { name: "Justin Villaseñor", position: "Director of Media", major:"Major in Computer Science", class:"Class of '25", image: "/placeholder.svg?height=200&width=200" },
    { name: "Noemy Cerevantes", position: "Director of Membership", major:"Major in Computer Science", class:"Class of '25", image: "/assets/images/headshots/Noemy_headshot.jpg?height=200&width=200" },
    { name: "Thomas Mendoza", position: "Assistant Officer", major:"Major in Computer Science", class:"Class of '26", image: "/assets/images/headshots/Thomas_headshot.jpg?height=200&width=200" },
    { name: "Xaritzy Cadena", position: "Director of Fundraising", major:"Major in Industrial Engineering", class:"Class of '25", image: "/assets/images/headshots/Xaritzy_headshot.jpg?height=200&width=200" }
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
                  <div className="w-full h-80 overflow-hidden">
                    <img 
                      src={officer.image} 
                      alt={officer.name} 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-shpe-dark-blue">{officer.name}</h3>
                  <p className="text-gray-600">{officer.position}</p>
                  <p className="text-gray-600">{officer.major}, {officer.class}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}