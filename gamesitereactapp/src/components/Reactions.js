// import ReactCSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { useRef, useEffect } from "react";

export default function Reactions(props) {
  let gameStarted = "notStarted";
  const ball = useRef();
  const startBtn = useRef();
  const goal = useRef();
  const container = useRef();

  const startGame = () => {
    ball.current.classList.add("ballMoveClass");
    startBtn.current.innerHTML = "stop";
    gameStarted = "justStarted";
  };

  const stopGame = () => {
    gameStarted = "justStopped";
    const extra = container.current.getBoundingClientRect().width * 0.1;

    ball.current.style.marginLeft = `${
      ball.current.getBoundingClientRect().left -
      container.current.getBoundingClientRect().left +
      extra
    }px`;
    ball.current.classList.remove("ballMoveClass");
    startBtn.current.innerHTML = "restart";
  };

  const restartGame = () => {
    ball.current.style.marginLeft = 0;
    gameStarted = false;
    startBtn.current.innerHTML = "start";
  };

  const keyPress = (e) => {
    console.log("keypress");
    if (gameStarted === "notStarted") {
      startGame();
    } else if (gameStarted === "justStarted") {
      stopGame();
    } else if (gameStarted === "justStopped") {
      restartGame();
    }
    gameStarted === false ? startGame() : stopGame();
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  });

  return (
    <div className="reactions-container" ref={container}>
      <h1>Reactions</h1>
      <div className="track">
        <div className="goal" ref={goal}></div>
        <div className="ball" ref={ball}></div>
      </div>
      <div className="lives">
        <div className="life">❤️</div>
        <div className="life">❤️</div>
        <div className="life">❤️</div>
      </div>
      <button onClick={keyPress} ref={startBtn}>
        start
      </button>
    </div>
  );
}
