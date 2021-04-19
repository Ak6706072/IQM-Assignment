import React, { useState, useEffect } from "react";
import Questions from "./components/Questions/Questions";
import Header from "./components/Header/Header";
import "./App.css";
function App() {
  const [quests, setQuests] = useState([]);

  const getQuestion = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=firebase"
    );
    const data = await response.json();
    setQuests(data);
    console.log(data.items);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Questions questions={quests.items} />
      </div>
    </div>
  );
}

export default App;
