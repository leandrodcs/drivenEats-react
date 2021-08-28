import { Link } from "react-router-dom";

export default function ConfirmationPage({order}) {
  console.log(order);
  const {plates, drinks, desserts} = order;
  const final = [];

  function sumPrice(price) {
    let finalPrice = 0;
    price.forEach(p => {
      finalPrice+= (p.price.replace(",", ".") * p.amount);
    })
    return finalPrice.toFixed(2).replace(".",",");
  }

  function organizeOrder() {
    plates.forEach(plate => {
      if(plate.amount) {
        const item = plate;
        item.type = "plate";
        final.push(item);
      }
    })
    drinks.forEach(drink => {
      if(drink.amount) {
        const item = drink;
        item.type = "drink";
        final.push(item);
      }
    })
    desserts.forEach(dessert => {
      if(dessert.amount) {
        const item = dessert;
        item.type = "dessert";
        final.push(item);
      }
    })
    console.log(final);
    return final;
  }

  return (
    <div className="confirm-page">
      <div className="confirm-header">Revise seu pedido</div>
      <div className="confirm-box">
        {organizeOrder().map(o => {
          <componente />
          return (
          <div className="confirm-line">
            <div>{o.amount} {o.name}</div>
            <div>{(o.price.replace(",", ".") * o.amount).toFixed(2).replace(".",",")}</div>
          </div>
          )
        })}
        <div className="confirm-line bold">
          <div>TOTAL</div>
          <div>R$ {sumPrice(final)}</div>
        </div>
      </div>
      <div className="final-confirm-button">Tudo certo, pode pedir!</div>
      <Link to="/">
        <div className="cancel">Cancelar</div>
      </Link>
    </div>
  );
}
