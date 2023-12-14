'use client';
import React from 'react';
import '../ui/global.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const page = () => {
  const [name, setName] = useState('');

  const handleEnter = () => {
    console.log('enter target', name);
  };
  return (
    <div>
      <div className="h-screen w-full bg-gray-300">
        <div className="flex w-full justify-center pt-[5%]">
          <div className="flex-col">
            <div className=" text-2xl font-bold text-black">
              What is your Name?
            </div>
            <div className=" mt-5">
              <input
                type="text"
                className="w-[300px]"
                placeholder="Full Name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-5 flex">
              <button
                className="rounded-md bg-blue-500 px-3 py-2 shadow-sm shadow-blue-700"
                onClick={handleEnter}
              >
                <ArrowRightIcon className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
