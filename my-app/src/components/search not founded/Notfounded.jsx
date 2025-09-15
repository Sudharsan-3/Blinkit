import Image from "next/image";
import React from "react";

const Notfounded = () => {
    return (
        <div className="w-fit flex flex-col items-center justify-center py-12">
            {/* Image */}
            <div className="relative w-40 h-40 mb-4">
                <img
                    src="https://blinkit.com/57070263a359a92dc0fe.png"
                    alt="Not Found"
                    className="w-40 h-40 object-contain"
                />

            </div>

            {/* Text */}
            <h1 className="text-lg font-semibold text-gray-800">
                Nothing here yet
            </h1>
            <p className="text-sm text-gray-500 mt-1 text-center">
                We couldn’t find any products for your search.
            </p>

            {/* Button */}
            <button
                className="mt-4 px-5 py-2 bg-green-500 text-white text-sm font-medium rounded-lg shadow hover:bg-green-600 transition"
            >
                Request Product
            </button>
        </div>
    );
};

export default Notfounded;
