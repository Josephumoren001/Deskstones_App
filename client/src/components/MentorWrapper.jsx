import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, } from 'react-icons/fa';

function MentorWrapper() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/mentor/getmentors?approvalStatus=approved');
        const data = await res.json();
        if (!res.ok) {
          console.error('API response error:', data);
          setError(true);
          setLoading(false);
          return;
        }
        console.log('Fetched mentors:', data); // Add this line
        setMentors(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching mentors:', error);
        setError(true);
        setLoading(false);
      }
    };
  
    fetchMentors();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading mentors. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen bg-green-100 py-12 px-5 lg:px-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Mentors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={mentor._id} // Using mentor._id as a unique key
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={mentor.imageUrl} // Use mentor's image URL from backend
                alt={mentor.name}
                className="w-[100px] h-[100px] rounded-full mb-4"
              />
              <h2 className="text-xl font-bold dark:text-gray-700 ">{mentor.fullName}</h2>
              <h3 className="text-white mb-4 bg-green-500 px-6 py-2 rounded-lg mt-3">{mentor.role}</h3>
              <p className="text-gray-700 text-center mb-6">{mentor.bio}</p>
              <div className="flex space-x-4">
                <a href={`mailto:${mentor.email}`} className="text-gray-500 hover:text-gray-900">
                  <FaEnvelope size={24} />
                </a>

                <a href={`${mentor.linkedin}`} className="text-gray-500 hover:text-gray-900">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentorWrapper;
