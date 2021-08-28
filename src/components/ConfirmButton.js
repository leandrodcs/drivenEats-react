import { Link } from "react-router-dom";

export default function ConfirmButton({orderState}) {
  return (
    <>
      <div className="confirm-wrapper">
        <div className="confirm-button">
          <div>Selecione os 3 itens para fechar o pedido</div>
        </div>
      </div>
      <Link to="/revisar">
        <div className={`confirm-wrapper confirmation ${orderState ? "appear" : ""}`}>
          <div className="confirm-button green-button">Fechar pedido</div>
        </div>
      </Link>
    </>
  );
}
