import React from 'react';
import data from '../../data/Candies.json';
import SearchCard from './SearchCard';
import SearchSugg from './SearchSugg';
import Notfounded from '../search not founded/Notfounded';

const SearchResult = ({ query }) => {
  const lower = query.toLowerCase();
  const filter = data.filter((e) => e.name.toLowerCase().includes(lower));

  return (
    <div className="p-2">
      {filter.length > 0 ? (
        <>
          {/* suggestions */}
          <SearchSugg filter={filter} />

          {/* heading */}
          <div className="flex items-center justify-center py-1">
            <div className="w-6xl">
              <h1>
                Showing results for <span className="font-medium">"{query}"</span>
              </h1>
            </div>
          </div>

          {/* product cards */}
          <SearchCard data={filter} />
        </>
      ) : (
        <Notfounded />
      )}
    </div>
  );
};

export default SearchResult;
