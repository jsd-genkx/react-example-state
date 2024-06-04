import { useState } from "react";

function Counter() {
  // Declare state variable to hold the current count
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  const handleClickDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-3xl font-medium">Current Count: {count}</p>
        <div className="flex space-x-4">
          <button
            onClick={handleClickIncrement}
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
          >
            Increment
          </button>
          <button
            onClick={handleClickDecrement}
            className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-500 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
