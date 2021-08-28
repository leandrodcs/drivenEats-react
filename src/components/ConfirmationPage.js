

export default function ConfirmationPage({checkingOut, order}) {
  console.log(order);
  return (
    <div className="confirm-page">
      <div className="confirm-header">Revise seu pedido</div>
      <div className="confirm-box">
        {order.plates.map((plate) => {
          if(plate.amount) {
            return (
              <div className="confirm-line">
                <div>{plate.amount} {plate.name}</div>
                <div>{plate.price}</div>
              </div>
            );
          }
        })}
        {order.drinks.map((drink) => {
          if(drink.amount) {
            return (
              <div className="confirm-line">
                <div>{drink.amount} {drink.name}</div>
                <div>{drink.price}</div>
              </div>
            );
          }
        })}
        {order.desserts.map((dessert) => {
          if(dessert.amount) {
            return (
              <div className="confirm-line">
                <div>{dessert.amount} {dessert.name}</div>
                <div>{dessert.price}</div>
              </div>
            );
          }
        })}
        <div className="confirm-line bold">
          <div>TOTAL</div>
          <div>asdas</div>
        </div>
      </div>
      <div className="final-confirm-button">Tudo certo, pode pedir!</div>
      <div className="cancel" onClick={() => checkingOut(false)}>Cancelar</div>
    </div>
  );
}
