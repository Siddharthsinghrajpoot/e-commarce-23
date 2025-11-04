import React from "react";

const UserForm = () => {
  return (
    <div className="max-w-lg  bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Information</h2>
      <form className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          placeholder="Street"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="State"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Zip Code"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
