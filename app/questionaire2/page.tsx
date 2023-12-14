'use client';
import React from 'react';
import '../ui/global.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useRouter } from 'next/navigation';

const page = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleEnter = (val: any) => {
    console.log('enter target', val);
    const NewDate = new Date().toLocaleDateString('en-US');
    console.log('NewDate', NewDate);
    setValue(NewDate);
    setOpen(false);
  };

  const handleCalendar = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    console.log('hi');
    router.push('/dashboard');
  };

  return (
    <div>
      <div className="h-screen w-full bg-gray-300">
        <div className="flex w-full justify-center pt-[5%]">
          <div className="flex-col">
            <div className=" text-2xl font-bold text-black">
              What is your Date of Birth?
            </div>
            <div className=" mt-5">
              <input
                type="text"
                className="w-[300px]"
                placeholder="DD/MM/YY"
                value={value}
                onChange={(e) => handleEnter(e)}
              />
              <button onClick={handleCalendar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </button>
              <dialog open={open}>
                <Calendar onChange={(e) => handleEnter(e)} />
              </dialog>
            </div>
            <div className="mt-5 flex">
              <button
                className="rounded-md bg-blue-500 px-3 py-2 shadow-sm shadow-blue-700"
                onClick={handleSubmit}
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
