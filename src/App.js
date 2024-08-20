import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex items-center justify-center py-12 my-12">
        <i className="text-gray-300 px-7" class="ri-information-2-line"></i>
        <i className="text-gray-300" class="ri-settings-2-line"></i>
        <i
          className="text-gray-300 px-7"
          data-testid="reset"
          onClick={() => setCount(0)}
          class="ri-reset-left-fill"
        ></i>
      </div>
      <div>
        <h1
          className="text-gray-300 flex items-center justify-center text-9xl font-bold"
          data-testid="counter"
        >
          {count}
        </h1>
        <div className="text-gray-300 flex items-center justify-center py-12 mt-14">
          <button
            className="rounded-full outline outline-offset-0 outline-gray-300 p-2 px-4 mr-20"
            data-testid="increase"
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </button>
          <button
            className="rounded-full outline outline-offset-0 outline-gray-300 p-2 px-5 ml-20"
            data-testid="decrease"
            onClick={() => setCount((count) => (count <= 0 ? 0 : count - 1))}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
