import React from 'react';
import Vision from '../components/Vision';
import Mision from '../components/Mission';

function VisionMission() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center px-5 lg:px-20">
      <div className="mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Vision Card */}
        <Vision />
        <Mision />
        
      </div>
    </div>
  );
}

export default VisionMission;
