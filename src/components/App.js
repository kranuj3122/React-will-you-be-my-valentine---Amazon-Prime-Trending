import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  let [index, setIndex] = useState(0);
  const onNext = () => {
    setIndex((i) => i + 1);
  };
  const onPrev = () => {
    setIndex((i) => i - 1);
  };
  const onRestart = () => {
    setIndex((i) => 0);
  };
  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      {index != 0 ? (
        <button
          data-testid="button-prev"
          style={{ left: "5px", position: "absolute" }}
          onClick={onPrev}
        >
          Prev
        </button>
      ) : null}
      {index !== 0 ? (
        <button
          data-testid="button-restart"
          style={{ left: "600px", position: "absolute" }}
          onClick={onRestart}
        >
          Restart
        </button>
      ) : null}
      {index !== 4 ? (
        <button
          data-testid="button-next"
          style={{ right: "5px", position: "absolute" }}
          onClick={onNext}
        >
          Next
        </button>
      ) : null}
    </>
  );
};

export default App;
