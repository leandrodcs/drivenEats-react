import React, { useState } from "react";

export default function Card({info}) {
    const {name, img, price, description, selected, amount} = info;
    const [value, setValue] = useState(0);

    function add() {
        setValue(value + 1);
    }

    function decrease() {
        setValue(value - 1);
    }

    function select(e) {
        if (e.target.innerHTML === "-") {
            decrease();
        }
        if (e.target.innerHTML === "+") {
            add();
        }
        if (value === 0) {
            setValue(value + 1);
        }
    }
    
  return (
    <div className={`option food ${value > 0 ? "selected" : ""}`} onClick={select}>
      <img
        src={img}
        alt="Seu aparelho não consegue carregar a imagem"
      />
      <div className="option-name">{name}</div>
      <div className="option-description">
      {description}
      </div>
      <div className="option-price">
        R$ <span className="price">{price}</span>
      </div>
      <p className="number">
          <span>-</span>
          <span>{value}</span>
          <span>+</span>
      </p>
    </div>
  );
}



