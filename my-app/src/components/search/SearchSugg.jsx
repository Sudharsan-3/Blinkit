import Image from 'next/image';
import React from 'react';

const SearchSugg = ({ filter = [] }) => {
  const suggestions = filter.slice(0, 4);

  return (
    <div className="flex items-center justify-center  ">
      <div className='w-6xl'>
         <div className="w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-sm  rounded-xl">
          {suggestions.length > 0 ? (
            <ul className="">
              {suggestions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {/* Image with white background */}
                  <div className=" p-1 flex-shrink-0  rounded-lg shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 truncate">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-4 text-center text-sm text-gray-500">
              No suggestions
            </div>
          )}
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default SearchSugg;
