import { Link } from "react-router-dom";

export default function ConfirmationPage({order}) {
  console.log(order);
  const {plates, drinks, desserts} = order;
  const finalOrder = [];
  let finalPrice = 0;

  function sumPrice(price) {

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
        finalOrder.push(item);
      }
    })
    drinks.forEach(drink => {
      if(drink.amount) {
        const item = drink;
        item.type = "drink";
        finalOrder.push(item);
      }
    })
    desserts.forEach(dessert => {
      if(dessert.amount) {
        const item = dessert;
        item.type = "dessert";
        finalOrder.push(item);
      }
    })
    console.log(finalOrder);
    return finalOrder;
  }

  function whatsappMessage(){
    const platesMessage= `%0a-%20Prato(s):${(finalOrder.filter(plate =>  plate.type === "plate")).map((plate) => { 
      return `%20${plate.name}%20(${plate.amount}x)`
    })}`
    const drinksMessage= `%0a-%20Bebida(s):${(finalOrder.filter(drink =>  drink.type === "drink")).map((drink) => { 
      return `%20${drink.name}%20(${drink.amount}x)`
    })}`
    const dessertsMessage= `%0a-%20Sobremesa(s):%20${(finalOrder.filter(dessert =>  dessert.type === "dessert")).map((dessert) => { 
      return `%20${dessert.name}%20(${dessert.amount}x)`
    })}`
    const finalMessage = `Olá,%20gostaria%20de%20fazer%20o%20pedido:
    ${platesMessage}
    ${drinksMessage}
    ${dessertsMessage}
    %0aTotal:%20R$%20${finalPrice.toFixed(2).replace(".",",")}
    `;
    console.log(finalMessage);
    window.open(`https://wa.me/5545998022472?text=${finalMessage}`);
  }

  return (
    <div className="confirm-page">
      <div>
        <div className="confirm-header">Revise seu pedido</div>
        <div className="confirm-box">
          {organizeOrder().map(o => {
            <componente />
            return (
            <div className="confirm-line">
              <div>{o.amount} x {o.name}</div>
              <div>{(o.price.replace(",", ".") * o.amount).toFixed(2).replace(".",",")}</div>
            </div>
            )
          })}
          <div className="confirm-line bold">
            <div>TOTAL</div>
            <div>R$ {sumPrice(finalOrder)}</div>
          </div>
        </div>
      </div>
      <div className="final-confirm-button" onClick={whatsappMessage}>Tudo certo, pode pedir!</div>
      <div className="cancel"><Link to="/">Cancelar</Link></div>

    </div>
  );
}
