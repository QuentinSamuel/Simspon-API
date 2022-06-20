import { useEffect, useState } from "react";
import axios from "axios";
import Simpson from "./Simpson";
import "./App.css";

export default function App() {
  const [simpsonsQuotes, setSimpsonsQuotes] = useState("");

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => {
        setSimpsonsQuotes(response.data[0]);
      });
  };

  useEffect(getQuote, []);

  return (
    <div className="App">
      <Simpson simpsonsQuotes={simpsonsQuotes} />
      <button onClick={getQuote}>Get a new quote</button>
    </div>
  );
}
