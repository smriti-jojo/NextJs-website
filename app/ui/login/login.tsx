import React, { useState, FormEvent } from 'react';

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-[300px] w-[250px] rounded-sm border-2 border-black px-4 py-5 shadow-sm shadow-gray-300">
      <form onSubmit={onSubmit}>
        <div className="">
          <h1 className="flex justify-center font-bold text-black">
            Login/Register
          </h1>

          <div className="my-3 flex-col">
            <div className="my-3">
              <input type="text" name="name" placeholder="name" required />
            </div>
            <div className="my-3">
              <input type="email" name="email" placeholder="email" required />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-md border-2 border-black bg-red-400 p-3"
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
