import React from 'react';
import { FaEnvelope, FaLinkedin, FaYoutube } from 'react-icons/fa';

const mentors = [
  {
    name: 'David Oku',
    title: 'Founder & Coach',
    description:
      'Learning is the foundation of growth. When we embrace it with curiosity and perseverance, there are no limits to what we can achieve.',
    image: 'https://i.imgur.com/3PBu28s.png', // Replace with the actual image link
    socials: {
      email: 'mailto:david.oku1@outlook.com',
      linkedin: 'https://www.linkedin.com/in/masteroflogic/',
      youtube: '#',
    },
  },
  {
    name: 'Promise Obi',
    title: 'Snr Learning & Development Specialist',
    description:
      'A deep devotion to the curiosity of all that we know in respect to all that we do not to know -  is the centre piece  of learning and development.',
    image: 'https://i.imgur.com/Ma8GpMb.png', // Replace with the actual image link
    socials: {
      email: 'mailto:promise.obi@deskstones.com',
      linkedin: 'https://www.linkedin.com/in/gods-promise-obi-b2a41926b/',
      youtube: '#',
    },
  },
  {
    name: 'Chinyere Isiekwu',
    title: 'Co-founder & Brand Manager',
    description:
      'Success is built on a foundation of curiosity, resilience, and a relentless drive to create lasting value. With every challenge comes the opportunity to innovate and inspire progress.',
    image: 'https://i.imgur.com/MVKwYIK.png', 
    socials: {
      email: 'mailto:cisiekwu@deskstones.com',
      linkedin: 'https://www.linkedin.com/in/chinyere-isiekwu-mpa-msc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      youtube: '#',
    },
  },
];

function Founders() {
  return (
    <div className="min-h-screen bg-green-100 py-12 px-5 lg:px-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Meet our Founders</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white  h-[517px] rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-bold dark:text-gray-700">{mentor.name}</h2>
              <h3 className="text-green-500 mb-4">{mentor.title}</h3>
              <p className="text-gray-700 text-center mb-6">{mentor.description}</p>
              <div className="flex space-x-4 -mt-2">
                <a
                  href={mentor.socials.email}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href={mentor.socials.linkedin}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={mentor.socials.youtube}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Founders;
