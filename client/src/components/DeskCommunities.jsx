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
            <img src="https://s3-alpha-sig.figma.com/img/dcfa/c475/0c470c713f10468dd1515adc29250229?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjSOv0t0H-IZzqDl85Vjde8sUTbE8-1o543J4w4G4Yssgy6pImqsnjPK2bKmYgj56Ygzl9B0PftruSNJB3RpxZLpUwyVOq7eU9lvOCl6ZKUcSKBw2aSHv3BflxdqHU3rlU6ji0py1IiAxjyTnZogRNhbeSeBApT8bYqFvI2UnzJskU4IBcHBW7CBf7opQ~ruT3GHc-PEf-0AHZEYiEE6Zz2bUy3jQVLTI~BaWokW1NE2fxjIPsTKw59Lm9k8~GTwfttVz2LMMSGHyHh~n8Rpf9630RZsMkMxGlu259HL92CQ9AMMQWADg8Ww00KS5Pni0tDOQ09jP9NWhAuRe83MUw__" alt="Cyber Security" className="w-full" />
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
            <img src="https://s3-alpha-sig.figma.com/img/dcfa/c475/0c470c713f10468dd1515adc29250229?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjSOv0t0H-IZzqDl85Vjde8sUTbE8-1o543J4w4G4Yssgy6pImqsnjPK2bKmYgj56Ygzl9B0PftruSNJB3RpxZLpUwyVOq7eU9lvOCl6ZKUcSKBw2aSHv3BflxdqHU3rlU6ji0py1IiAxjyTnZogRNhbeSeBApT8bYqFvI2UnzJskU4IBcHBW7CBf7opQ~ruT3GHc-PEf-0AHZEYiEE6Zz2bUy3jQVLTI~BaWokW1NE2fxjIPsTKw59Lm9k8~GTwfttVz2LMMSGHyHh~n8Rpf9630RZsMkMxGlu259HL92CQ9AMMQWADg8Ww00KS5Pni0tDOQ09jP9NWhAuRe83MUw__" alt="ChatGPT" className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">ChatGPT</h2>
              <p className="text-gray-600 mb-2">News and best practices about ChatGPT.</p>
              <p className="text-emerald-400">'The ChatGPT Community' LinkedIn Group</p>
            </div>
          </div>
        </Link>
        
        <Link to="#" className="block">
          <div className="border border-emerald-400 rounded-lg overflow-hidden">
            <img src="https://s3-alpha-sig.figma.com/img/aabe/a4e7/d803a5d99c2c2dcb2585a8efaec3c95a?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qejVT4ikDqDhF0GK7kbroSqVvshKVuOWC1ud4H-bxmkfYIN0oUHXARZ48uc0bxiQTaAZb-jTtqLTc22ZclYYcr114-PG3iRqayf8H~4yM881IbHJhghr1SGnMS9eZDQvzcjcXmjDUjy62jJGjQAiBBkowiX8p94WQpOgcogumi4cYqdgr92Ob4K2iL0zYcj0eWImyTd2go6aiHhi8f3Y-zZs7gxXNxeuL7e58OgqFiMX~CgSnWrd16YeFkYGuHNeBJzA86MUOIHFmm723AhzCEZ3CdZMUUfkGBh-x9o-oGh56H9DNegcOU5P2fc1~XFPIPEx2vv~ZLhM6CTy1dJhEw__" alt="ChatGPT" className="w-full" />
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