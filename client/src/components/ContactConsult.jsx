import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactConsult = () => {
  const [state, handleSubmit] = useForm("mdknrlwn");
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Perform form submission using Formspree's handleSubmit
    handleSubmit(e);
  
    // Check the form state after submission
    if (state.succeeded) {
      console.log("Form submitted successfully!");
    } else if (state.errors.length > 0) {
      console.error("Error submitting form", state.errors);
    }
  };
  
  if (state.succeeded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Thanks for constacting us!</h2>
          <p className="text-gray-700">Your submission was successful.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-5 lg:px-20 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <p className="text-emerald-400 font-semibold mb-2">How can we help?</p>
          <h1 className="text-4xl font-bold mb-4">Questions, feedback, or bookings</h1>
          <p className="text-gray-600">
            For more questions, details, and booking, contact us at info@deskstones.com or fill out the contact form.
            We respond within 24 hours and are happy to arrange a meeting or chat to discuss how we can meet your specific needs.
          </p>
        </div>
        <form onSubmit={onSubmit} className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-gray-700">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError prefix="Firstname" field="firstName" errors={state.errors} />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError prefix="Lastname" field="lastName" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4 text-gray-700"
            rows="5"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="agreeToPolicy" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-emerald-400 underline">Privacy Policy</a>.
            </label>
            <ValidationError prefix="Checkbox" field="agreeToPolicy" errors={state.errors} />
          </div>

          <button
            type="submit"
            className="bg-emerald-400 text-white font-semibold py-2 px-4 rounded hover:bg-emerald-500 transition duration-300"
            disabled={state.submitting}
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactConsult;
