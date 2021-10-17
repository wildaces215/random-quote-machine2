import { createStore } from "redux";

var quotes = [
  "Do or not there is no try -Yoda",
  "Walk softly and carry a big stick",
  "Four score and seven years ago.",
];

function quoteReducer(state = { quote: "" }, action) {
  switch (action.type) {
    case "quotes/newQuote":
      var index = Math.floor(Math.random() * 3);
      return { quote: quotes[index] };
    default:
      return state;
  }
}
let store = createStore(quoteReducer);
export default store;
