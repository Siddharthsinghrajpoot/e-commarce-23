import React from "react";

const NewsletterBox = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Subscribed!");
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-bold">Subscribe now and get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quo.
      </p>

      {/* Removed <p> wrapping form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 mt-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-400 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-black border border-black text-white px-4 py-2 rounded "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
