import React from 'react';

const Datas = ({ filtered }) => {
  // filtered is now an array; we’ll loop through its details
  if (!filtered || filtered.length === 0) return null;

  return (
    <div className="space-y-2">
      {filtered[0].deatils.map((item, i) => (
        <p key={i} className="text-gray-700 text-sm">
          • {item}
        </p>
      ))}
    </div>
  );
};

export default Datas;
