export default function ConfirmButton({orderState, checkingOut}) {
  return (
    <>
      <div className="confirm-wrapper">
        <div className="confirm-button">
          <div>Selecione os 3 itens para fechar o pedido</div>
        </div>
      </div>
      <div className={`confirm-wrapper confirmation ${orderState ? "appear" : ""}`} onClick={() => checkingOut(true)}>
        <div className="confirm-button green-button">Fechar pedido</div>
      </div>
    </>
  );
}
