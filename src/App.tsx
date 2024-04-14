import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1 data-testid="counter-value">{count}</h1>
        <button
          data-testid="counter-button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
