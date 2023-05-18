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

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        {/* <img src="images/loader.gif" alt="" /> */}
        <img
          src="images/loader.gif"
          className="max-w-[20rem] w-[90%] pointer-events-none select-none relative bottom-10"
          alt="loader"
        />
      </div>
    );
  }

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
