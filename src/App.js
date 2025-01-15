import React, { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",
  });

  const handleNoHover = () => {
    const randomTop = Math.random() * 80 + 10; // Between 10% and 90%
    const randomLeft = Math.random() * 80 + 10; // Between 10% and 90%
    setNoButtonStyle({
      ...noButtonStyle,
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    const audio = new Audio("/celebration.mp3"); // Add your song file to 'public' folder
    audio.play();
  };

  return (
    <div className="App">
      {showConfetti && <Confetti />}
      <h1>Would you like to be my Valentine? ❤️</h1>
      <div className="button-container">
        <button className="yes-button" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="no-button"
          style={noButtonStyle}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
