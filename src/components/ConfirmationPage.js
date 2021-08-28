export default function ConfirmationPage({checkingOut}) {
  return (
    <div className="confirm-page appear">
      <div className="confirm-box">
        <div className="confirm-header">Confirme seu pedido</div>
        <div className="confirm-line">
          <div className="confirm food"></div>
          <div className="confirm food price"></div>
        </div>
        <div className="confirm-line">
          <div className="confirm drink"></div>
          <div className="confirm drink price"></div>
        </div>
        <div className="confirm-line">
          <div className="confirm dessert"></div>
          <div className="confirm dessert price"></div>
        </div>
        <div className="confirm-line bold">
          <div>TOTAL</div>
          <div className="final price"></div>
        </div>
        <div className="final-confirm-button">Tudo certo, pode pedir!</div>
        <div className="cancel" onClick={() => checkingOut(false)}>Cancelar</div>
      </div>
    </div>
  );
}
