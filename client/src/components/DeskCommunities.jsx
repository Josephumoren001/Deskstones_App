import React from 'react';
import { Link } from 'react-router-dom';

const DeskCommunities = () => {
  return (
    <div className=" mx-auto px-5 lg:px-20 py-20">
      <div className="mb-8">
        <p className="text-emerald-400 font-semibold mb-2">Free support, problem-solving, and networking</p>
        <h1 className="text-4xl font-bold mb-4">Online communities</h1>
        <p className="text-gray-600">Join our vibrant online communities to connect with +15,000 members for ongoing support, problem-solving, and networking.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="#" className="block">
          <div className="border border-emerald-400 rounded-lg overflow-hidden">
            <img src="https://i.imgur.com/zPw1v2i.png" alt="Cyber Security" className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Cyber Security</h2>
              <p className="text-gray-600 mb-2">Join 13,000+ RPA and AI enthusiasts that network and help each other.</p>
              <p className="text-emerald-400">
                <span role="img" aria-label="love">❤️</span> 'Automation' on Discord
              </p>
            </div>
          </div>
        </Link>
        
        <Link to="#" className="block">
          <div className="border border-emerald-400 rounded-lg overflow-hidden">
            <img src="https://i.imgur.com/lGVrqux.png" alt="ChatGPT" className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">ChatGPT</h2>
              <p className="text-gray-600 mb-2">News and best practices about ChatGPT.</p>
              <p className="text-emerald-400">'The ChatGPT Community' LinkedIn Group</p>
            </div>
          </div>
        </Link>
        
        <Link to="#" className="block">
          <div className="border border-emerald-400 rounded-lg overflow-hidden">
            <img src="https://i.imgur.com/6TCVPAg.png" alt="ChatGPT" className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">ChatGPT</h2>
              <p className="text-gray-600 mb-2">News and best practices about ChatGPT.</p>
              <p className="text-emerald-400">'The ChatGPT Community' LinkedIn Group</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DeskCommunities;