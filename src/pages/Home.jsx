import { useState } from "react";


function Home() {

  const [click, setClick] = useState("");
  console.log(click);
  return (
    <div className="text-center">
      <h1 className="text-6xl text-blue-300 font-extrabold">
        NextLevel <span className="text-blue-400">Weather</span>
      </h1>
      <p className="py-4 text-md text-gray-400">
        Check your weather today in next level.
      </p>

      <div>
        <button
          type="button"
          onClick={() => setClick("Clicked")}
          className="text-lg font font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 py-1 rounded-4xl text-gray-100"
        >
          Check Weather
        </button>
      </div>
    </div>
  );
}

export default Home