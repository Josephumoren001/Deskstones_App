import React from 'react';

const TermsAndConditions = () => {
  const conditions = [
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
    "Price: Our package is only available in bundles of a minimum of 10 hours at €2,025 / DKK 15,000 (+ VAT if applicable).",
  ];

  return (
    <div className="bg-green-50 p-8 rounded-lg w-full mx-auto px-5 lg:px-20 py-32 ">
        <div className="lg:max-w-4xl dark:text-gray-700">
      <h1 className="text-4xl font-bold mb-6">Terms and conditions:</h1>
      <p className="mb-6">
        The following special terms and conditions apply to our training and consulting package:
      </p>
      <ul className="space-y-6">
        {conditions.map((condition, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 text-green-600">•</span>
            <span>{condition}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;