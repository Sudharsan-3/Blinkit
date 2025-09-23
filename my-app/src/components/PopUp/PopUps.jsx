import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Datas from './Datas';
import Data from '../../data/Charges.json';

const PopUps = ({ open, onClose, title }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) setTimeout(() => setShow(true), 10);
    else setShow(false);
  }, [open]);

  if (!open) return null;

  const filtered = Data.filter(
    (e) => e.name.toLowerCase() === title.toLowerCase()
  );

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* modal */}
      <div
        className={`
          relative w-full max-w-xl bg-white shadow-lg p-5
          rounded-t-2xl md:rounded-2xl
          transform transition-transform duration-300 ease-in-out
          ${show ? 'translate-y-0' : 'translate-y-full'}
          md:translate-y-0
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        {title && <h2 className="text-lg font-semibold mb-3 capitalize">{title}</h2>}

        <Datas filtered={filtered} />

        <div className="flex items-center justify-center pt-5">
          <button
            onClick={onClose}
            className="text-green-500 font-semibold cursor-pointer"
          >
            Sounds good
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopUps;
