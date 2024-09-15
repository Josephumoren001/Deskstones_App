import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Register() {
  const [role, setRole] = useState('');
  const [state, handleSubmit] = useForm("mblreayp");

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Thanks for joining!</h2>
          <p className="text-gray-700">Your submission was successful.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5 lg:px-20">
      <div className="container mx-auto p-6 md:flex md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-12">
        {/* Left side with Heading */}
        <div className="md:w-1/2 dark:text-white text-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold">Become a <span className='text-green-500'> Deskstones</span> <br /> Expert</h1>
        </div>

        {/* Right side with form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                id="first-name"
                type="text"
                name="first-name"
                placeholder="First Name"
                required
                className="text-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-none"
              />
              <ValidationError prefix="First Name" field="first-name" errors={state.errors} />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                id="last-name"
                type="text"
                name="last-name"
                placeholder="Last Name"
                required
                className="text-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              <ValidationError prefix="Last Name" field="last-name" errors={state.errors} />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="text-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                id="whatsapp"
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number"
                required
                className="text-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
              <ValidationError prefix="WhatsApp" field="whatsapp" errors={state.errors} />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Programs</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                name="role"
                required
                className="text-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Programs</option>
                <option value="backend">Kid Can Code</option>
                <option value="frontend">Distraction to Distinction</option>
                <option value="ml">Consultation</option>
                
              </select>
              <ValidationError prefix="Role" field="role" errors={state.errors} />
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
              >
                {state.submitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
