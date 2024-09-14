import React, { useState } from 'react';

const ContactConsult = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto py-8 px-5 lg:px-20 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <p className="text-emerald-400 font-semibold mb-2">How can we help?</p>
          <h1 className="text-4xl font-bold mb-4">Questions, feedback or bookings</h1>
          <p className="text-gray-600">
            For more questions, details, and booking, contact Stine at
            info@andersjensen.org or fill out the contact form. We
            respond within 24 hours and are happy to arrange a meeting
            or chat to discuss how we can meet your specific needs.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="5"
            required
          ></textarea>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agreeToPolicy"
              id="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="agreeToPolicy" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-emerald-400 underline">Privacy Policy</a>.
            </label>
          </div>
          <button
            type="submit"
            className="bg-emerald-400 text-white font-semibold py-2 px-4 rounded hover:bg-emerald-500 transition duration-300"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactConsult;