"use client"
import React from 'react';

const Details = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* ✅ Top details section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Product Name (Example)</h1>
        <p className="text-gray-600 mb-4">
          Brand: Example Brand | Category: Electronics | In Stock
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is a sample product description. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloremque quod sapiente dignissimos sit
          voluptate, vel accusantium, quae incidunt laudantium fuga sint
          exercitationem distinctio repudiandae ipsam cum ullam. Commodi! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          aliquam.
        </p>
        <div className="mt-4">
          <span className="text-xl font-semibold text-green-600">₹499</span>
          <span className="text-sm text-gray-400 line-through ml-2">₹799</span>
        </div>
      </div>

      {/* ✅ Additional info below */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Free shipping on orders above ₹999</li>
          <li>10-day return policy</li>
          <li>1-year manufacturer warranty</li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
