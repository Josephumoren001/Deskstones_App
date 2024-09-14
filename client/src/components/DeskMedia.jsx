import React, { useState } from 'react';

const DeskMedia = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'https://www.kids365.org/wp-content/uploads/2021/08/Virtual-Hackathon-poster-image-1400x744.jpg', alt: 'Kid Hackathon', caption: 'Kid Hackathon', location: 'Lagos, Nig' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfDY98Vlr0uVUOH8XeiU2rumcKpgXxaUJqg&s', alt: 'Child coding', caption: 'Child coding' },
    { src: 'https://i1.wp.com/blog.lifeway.com/newsroom/files/2018/02/KidCoders.jpg?resize=650%2C434', alt: 'Children collaborating', caption: 'Team work' },
    { src: 'https://ewscripps.brightspotcdn.com/dims4/default/6d1460f/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F56%2Fc9%2F5dc5bb7048bebea1532b9ecb29b2%2Fhackathon.jpg', alt: 'Child with tablet', caption: 'Digital learning' },
    { src: 'https://www.parents.com/thmb/wofngGuKs5qyc4jXp4PlBWHjGwk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-GettyImages-1310739215-4fe66a0955974509a79ba644b03e9641.jpg', alt: 'Girls coding', caption: 'Girls in tech' },
    { src: 'https://cdn.prod.website-files.com/652ebeb7ee6e1d1180825d7f/65300e66f04fd7094fcbddc3_education.png', alt: 'Boy with headphones', caption: 'Focused coding' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3aTYHE0gVUT27duXHyFd6ChtdIHZ_3VdlQ&s', alt: 'Child with laptop', caption: 'Exploring technology' },
    { src: 'https://media.cnn.com/api/v1/images/stellar/prod/111216073803-black-girls-code-2-story-top.jpg?q=w_640,h_360,x_0,y_0,c_crop/w_800', alt: 'Boy coding', caption: 'Young programmer' },
    { src: 'https://mondo.com/wp-content/uploads/2023/02/women-in-tech-business-benefits-2023.jpg', alt: 'Code on screen', caption: 'Learning to code' },
    { src: 'https://contentstatic.techgig.com/photo/74969192/how-coding-competitions-are-significant-in-a-developers-career.jpg?798505', alt: 'Girl with headphones', caption: 'Coding session' },
    { src: 'https://cet.ecu.edu/wp-content/pv-uploads/sites/253/2023/04/banner_computer_science_competition.jpg', alt: 'Girl writing', caption: 'Planning code' },
    { src: 'https://i.ytimg.com/vi/oxq6bPcKXKM/maxresdefault.jpg', alt: 'Robotics', caption: 'Hands-on tech' },
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto py-8 px-5 lg:px-20">
      <h1 className="text-4xl font-bold mb-2">Kid Can Code Event</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        <span>Surulere, Lagos</span>
      </div>
      <p className="text-gray-700 mb-8">
        In Desktories we believe everyone can be great if given the opportunity
        we get our inspiration from our co-founders started with nothing but were
        given an opportunity to learn by selfless individuals in the society.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => openImage(image)}>
            <img src={image.src} alt={image.alt} className="w-full h-48 object-cover transition duration-300 ease-in-out transform hover:scale-110" />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <p className="text-sm">{image.caption}</p>
                {image.location && <p className="text-xs">{image.location}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeImage}>
          <div className="max-w-3xl max-h-full p-4">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeskMedia;