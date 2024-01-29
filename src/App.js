import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div>
      {loading ? (
        <div className="loader">
          {" "}
          <PropagateLoader
            color="#36d7b7"
            size={25}
            loading={loading}
            speedMultiplier={1}
          />
          {/* <ClimbingBoxLoader speedMultiplier={1}/> */}
        </div>
      ) : (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      )}
    </div>
  );
}

export default App;
