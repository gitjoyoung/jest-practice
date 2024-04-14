import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const tasks = [
    { id: 1, title: "task 1" },
    { id: 2, title: "task 2" },
  ];
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
        <List tasks={tasks} />
      </div>
    </>
  );
}

export default App;
