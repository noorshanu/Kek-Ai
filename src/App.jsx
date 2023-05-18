import HomePage from "pages/HomePage";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`${
        loading
          ? "h-screen overflow-y-hidden"
          : "h-auto overflow-y-auto overflow-x-hidden"
      }`}
    >
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[10000] bg-bg">
          <img
            src="images/loader.gif"
            className="max-w-[20rem] w-[90%] pointer-events-none select-none relative bottom-10"
            alt="loader"
          />
        </div>
      )}

      <HomePage />
    </div>
  );
}

export default App;
