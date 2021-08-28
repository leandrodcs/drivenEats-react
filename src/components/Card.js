import React, { useState } from "react";

export default function Card({info, updateOrder, type}) {
    const {name, img, price, description, selected, amount} = info;
    const [value, setValue] = useState(amount);

    function add() {
        setValue(value + 1);
    }

    function decrease() {
        setValue(value - 1);
    }

    function select(e) {
        if (e.target.innerHTML === "-") {
            decrease();
            updateOrder(name, value - 1, type);
        }
        if (e.target.innerHTML === "+") {
            add();
            updateOrder(name, value + 1, type);
        }
        if (value === 0) {
            setValue(value + 1);
            updateOrder(name, value + 1, type);
        }
    }

    return (
        <div className={`option ${selected ? "selected" : ""}`} onClick={select}>
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



