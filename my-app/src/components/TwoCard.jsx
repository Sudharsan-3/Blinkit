import React from "react";
import Image from "next/image";

const TwoCard = ({ data }) => {
  const two = data.filter((e) => e.type === "two");

  return (
    <div className="flex items-center justify-center my-5">
      <div
        className="
          w-full max-w-7xl 
          grid grid-cols-2 gap-4 
          md:grid-cols-2 lg:hidden
        "
      >
        {two.map((e, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center text-center 
              rounded-lg cursor-pointer transition-transform duration-300 hover:cursor-pointer
            "
          >
            {/* fixed height wrapper for equal image height */}
            <div className="w-full h-20 flex items-center justify-center bg-blue-50 rounded-xl overflow-hidden">
              <Image
                src={e.image}
                alt={`Image ${i + 1}`}
                width={400}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>

            {/* name */}
            <p className="mt-2 text-sm font-medium text-gray-700">
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoCard;
