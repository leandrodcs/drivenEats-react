import React, { useState } from "react";

export default function Card({info}) {
    const {name, img, price, description} = info;
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState(0);


    function Add() {
        setValue(value + 1);
    }

    function Decrease() {
        setValue(value - 1);
        if (value === 1) {
            setSelected("");
        }
    }

    function Select(e) {
        setSelected("selected");
        if (e.target.innerHTML === "-") {
            Decrease();
        }
        if (e.target.innerHTML === "+") {
            Add();
        }
        if (value === 0) {
            setValue(value + 1);
            return;
        }
    }

  return (
    <div className={`option food ${selected}`} onClick={Select}>
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



