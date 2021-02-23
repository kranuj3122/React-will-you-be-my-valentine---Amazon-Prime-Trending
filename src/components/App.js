import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  let [index, setIndex] = useState(0);
  const onNext = () => {
    setIndex(index + 1);
  };
  const onPrev = () => {
    setIndex(index - 1);
  };
  const onRestart = () => {
    setIndex(0);
  };
  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      {index != 0 ? (
        <button data-testid="button-prev" onClick={onPrev}>
          Prev
        </button>
      ) : null}
      {index !== 0 ? (
        <button data-testid="button-restart" onClick={onRestart}>
          Restart
        </button>
      ) : null}
      {index !== slides.length - 1 ? (
        <button data-testid="button-next" onClick={onNext}>
          Next
        </button>
      ) : null}
    </>
  );
};

export default App;
