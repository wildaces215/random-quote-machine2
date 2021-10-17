import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const quote = useSelector((state) => state.quote);
  const newQuote = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>{quote}</h1>
        <button
          onClick={() => {
            store.dispatch({ type: "quotes/newQuote" });
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
