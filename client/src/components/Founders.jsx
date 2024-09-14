import React from 'react';
import { FaEnvelope, FaLinkedin, FaYoutube } from 'react-icons/fa';

const mentors = [
  {
    name: 'Anders Jensen',
    title: 'Founder and Youtuber',
    description:
      'We always dreamed of creating something unique together. Sure, we had amazing jobs, but we knew deep down we wanted to make a bigger impact. We wanted to inspire, teach, and enjoy every moment of our lives.',
    image: 'https://s3-alpha-sig.figma.com/img/6491/ed5c/21fb23170e37315020ed1bdac46cf8da?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KT6a9F5tv7X8kznqVw8n4e1k8qqwceLXL96FkB8CLKx4KVNtEehbbFgS0mdP28SDqgm2zVTOlBXK8Y5hCtJa4VAO5~f9AGySibQQ8iPmmViovlWLd~4G3rkNIrgY1I5YnsdtMNbvB-Fb~Zgbul9ZcHBMb3JXIy1zJb7Qg8egiTayAj8eMDjX-hb4r~7MLRwZ0R6QhasZRvzLvDFdCUR1cEHxyPEcW~HX7w99fy776F7iTIPgSJRlj8MrftP726esvftQP7ZTEatyhyp2o6PKBH9aIZNa2~FUEEIGi4~PTAJi7A3ZyHrbsSO6WU-dYMNFxKRKJZzMtKsjAC4fwaGSqQ__', // Replace with the actual image link
    socials: {
      email: '#',
      linkedin: '#',
      youtube: '#',
    },
  },
  {
    name: 'Anders Jensen',
    title: 'Founder and Youtuber',
    description:
      'We always dreamed of creating something unique together. Sure, we had amazing jobs, but we knew deep down we wanted to make a bigger impact. We wanted to inspire, teach, and enjoy every moment of our lives.',
    image: 'https://s3-alpha-sig.figma.com/img/ec40/4cc2/27b4e30bba042a236c886b308ce9dd3c?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XX53VTWuYURO2wJbd7beKnvpzRaDQGUjV6HMWYv70QJcjzUF-akL-MDTxTpe4EcB2V4P~CifECRM9dWAuDDuYI62anUs8BuGPIcAz27g-0FeuWitgAlqe9K-ABEGZEWoYU~6mvoWUWKN7XSEHT7HLt50o1HKzKBgOxVNaxs9BwnGsA6KW1u56xLwl3xdT5FDog5I8njB~ucjXHkTXJrkcQnElIZIqBtxcmT9VOK~YGlamMMrDuD0RKO4IOhHdio5KJrpCBrPxgQp2mtKEis-BTNPMNAVQzbSVoRL7qOrljzukl7fvxGRZ~r26d2nR12chEbVJN2kHBFkfkUJMsgSCA__', // Replace with the actual image link
    socials: {
      email: '#',
      linkedin: '#',
      youtube: '#',
    },
  },
  {
    name: 'Anders Jensen',
    title: 'Founder and Youtuber',
    description:
      'We always dreamed of creating something unique together. Sure, we had amazing jobs, but we knew deep down we wanted to make a bigger impact. We wanted to inspire, teach, and enjoy every moment of our lives.',
    image: 'https://s3-alpha-sig.figma.com/img/6491/ed5c/21fb23170e37315020ed1bdac46cf8da?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KT6a9F5tv7X8kznqVw8n4e1k8qqwceLXL96FkB8CLKx4KVNtEehbbFgS0mdP28SDqgm2zVTOlBXK8Y5hCtJa4VAO5~f9AGySibQQ8iPmmViovlWLd~4G3rkNIrgY1I5YnsdtMNbvB-Fb~Zgbul9ZcHBMb3JXIy1zJb7Qg8egiTayAj8eMDjX-hb4r~7MLRwZ0R6QhasZRvzLvDFdCUR1cEHxyPEcW~HX7w99fy776F7iTIPgSJRlj8MrftP726esvftQP7ZTEatyhyp2o6PKBH9aIZNa2~FUEEIGi4~PTAJi7A3ZyHrbsSO6WU-dYMNFxKRKJZzMtKsjAC4fwaGSqQ__', // Replace with the actual image link
    socials: {
      email: '#',
      linkedin: '#',
      youtube: '#',
    },
  },
];

function Founders() {
  return (
    <div className="min-h-screen bg-green-100 py-12 px-5 lg:px-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Meet our Founders</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-bold">{mentor.name}</h2>
              <h3 className="text-green-500 mb-4">{mentor.title}</h3>
              <p className="text-gray-700 text-center mb-6">{mentor.description}</p>
              <div className="flex space-x-4">
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
