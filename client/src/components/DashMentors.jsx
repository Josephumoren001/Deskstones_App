import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Assuming you have a Redux setup to manage user state
import { Button } from 'flowbite-react'; // Importing Button component for admin actions

const DashMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'approved', 'unassigned'

  const { currentUser } = useSelector((state) => state.user); // Get current user from Redux

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true);
        // Fetch all mentors without filters
        const res = await fetch('/api/mentor/getmentors');
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setMentors(data);
          setFilteredMentors(data); // Initialize with all mentors
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error fetching mentors:', error);
      }
    };
    fetchMentors();
  }, []);

  useEffect(() => {
    // Apply filtering whenever the filter state changes or mentors data changes
    const applyFilter = () => {
      let filtered = [...mentors];
      if (filter === 'pending') {
        filtered = filtered.filter((mentor) => mentor.approvalStatus === 'pending');
      } else if (filter === 'approved') {
        filtered = filtered.filter((mentor) => mentor.approvalStatus === 'approved');
      } else if (filter === 'unassigned') {
        filtered = filtered.filter((mentor) => !mentor.isAssigned);
      }
      setFilteredMentors(filtered);
    };
    applyFilter();
  }, [filter, mentors]);

  // Function to handle approving a mentor
  const handleApprove = async (mentorId) => {
    try {
      const res = await fetch(`/api/mentor/approveMentor/${mentorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Assuming you have a token or auth mechanism for admin actions
          Authorization: `Bearer ${currentUser?.token}`, 
        },
      });
      const data = await res.json();
      if (res.ok) {
        // Update the mentors state with the updated mentor
        setMentors((prevMentors) =>
          prevMentors.map((mentor) =>
            mentor._id === mentorId ? data : mentor
          )
        );
      } else {
        alert(`Failed to approve mentor: ${data.message}`);
      }
    } catch (error) {
      console.error('Error approving mentor:', error);
      alert('An error occurred while approving the mentor.');
    }
  };

  // Function to handle assigning a mentor
  const handleAssign = async (mentorId) => {
    try {
      const res = await fetch(`/api/mentor/assignMentor/${mentorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser?.token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        // Update the mentors state with the updated mentor
        setMentors((prevMentors) =>
          prevMentors.map((mentor) =>
            mentor._id === mentorId ? data : mentor
          )
        );
      } else {
        alert(`Failed to assign mentor: ${data.message}`);
      }
    } catch (error) {
      console.error('Error assigning mentor:', error);
      alert('An error occurred while assigning the mentor.');
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading mentors. Please try again later.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Mentors</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="filter" className="block mb-2 font-semibold">Filter by status:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="all">All Mentors</option>
          <option value="pending">Pending Approval</option>
          <option value="approved">Approved Mentors</option>
          <option value="unassigned">Unassigned Mentors</option>
        </select>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMentors.map((mentor) => (
          <div key={mentor._id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={mentor.imageUrl} alt={mentor.fullName} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-semibold">{mentor.fullName}</h2>
            <p className="text-gray-600">{mentor.role}</p>
            <p className="mt-2">{mentor.bio}</p>
            <p className="mt-2"><strong>Status:</strong> {mentor.approvalStatus}</p>
            <p><strong>Assigned:</strong> {mentor.isAssigned ? 'Yes' : 'No'}</p>

            {/* Admin Actions */}
            <div className="mt-4 flex gap-2">
              {mentor.approvalStatus === 'pending' && (
                <Button color="success" onClick={() => handleApprove(mentor._id)}>
                  Approve
                </Button>
              )}
              {mentor.approvalStatus === 'approved' && !mentor.isAssigned && (
                <Button color="primary" onClick={() => handleAssign(mentor._id)}>
                  Assign
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashMentors;
