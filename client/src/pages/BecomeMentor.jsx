import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

const BecomeMentor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    bio: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [user, setUser] = useState(null); // To store user information
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin'); // Redirect to sign-in if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const imageUrl = await uploadImage(formData.image);
      const res = await fetch('/api/mentor/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await user.getIdToken()}`, // Send user token for backend verification
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          role: formData.role,
          email: formData.email,
          linkedin: formData.linkedin,
          bio: formData.bio,
          imageUrl,
        }),
      });

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      alert('Application submitted successfully!');
      navigate('/'); // Redirect to homepage
    } catch (error) {
      setError(true);
      console.error('Error submitting application:', error);
      setLoading(false);
    }
  };

  const uploadImage = async (image) => {
    if (!image) {
      setImageUploadError('Please select an image');
      return;
    }

    setImageUploadError(null);
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}-${image.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUploadProgress(null);
          setImageUploadError(null);
          resolve(downloadURL);
        }
      );
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Become a Mentor</h2>
      {error && <p className="text-red-500 mb-4">Something went wrong. Please try again.</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded text-gray-600"
          required
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          className="w-full p-2 border rounded text-gray-600"
          required
        />
          <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded text-gray-600"
          required
        />
          <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          className="w-full p-2 border rounded text-gray-600"
          required
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="w-full p-2 border rounded text-gray-600"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full p-2 border rounded text-gray-600"
          required
        />
        {imageUploadProgress && <p>Upload Progress: {imageUploadProgress}%</p>}
        {imageUploadError && <p className="text-red-500">{imageUploadError}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Apply as Mentor'}
        </button>
      </form>
    </div>
  );
};

export default BecomeMentor;
