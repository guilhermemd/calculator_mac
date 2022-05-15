import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [display, setdisplay] = useState("");
  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="digits">
        <div className="digits__row__one">
          <button className="digit__operator__special">AC</button>
          <button className="digit__operator__special">+/-</button>
          <button className="digit__operator__special">%</button>
          <button className="digit__operator__common">/</button>
        </div>
        <div className="digits__row__two">
          <button className="digit__number">1</button>
          <button className="digit__number">2</button>
          <button className="digit__number">3</button>
          <button className="digit__operator__common">X</button>
        </div>
        <div className="digits__row__three">
          <button className="digit__number">4</button>
          <button className="digit__number">5</button>
          <button className="digit__number">6</button>
          <button className="digit__operator__common">-</button>
        </div>
        <div className="digits__row__four">
          <button className="digit__number">7</button>
          <button className="digit__number">8</button>
          <button className="digit__number">9</button>
          <button className="digit__operator__common">+</button>
        </div>
        <div className="digits__row__five">
          <button className="digit__number">0</button>
          <button className="digit__number">,</button>
          <button className="digit__operator__common">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
