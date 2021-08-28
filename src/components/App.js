import Header from "./Header";
import Section from "./Section";
import ConfirmButton from "./ConfirmButton";
import ConfirmationPage from "./ConfirmationPage";
import React, { useState } from "react";

export default function App() {

    const meals = {
        plates: [
            {
                name: "Frango Yin Yang",
                img: "assets/frango_yin_yang 1.png",
                description: "Um pouco de batata, um pouco de salada",
                price: "14,90",
                amount: 0,
            },
            {
                name: "Hamburgão",
                img: "assets/hamburguer.jfif",
                description: "Esse bixo é gostoso em",
                price: "18,90",
                amount: 0,
            },
            {
                name: "Macarrãozão",
                img: "assets/macarrao.jfif",
                description: "Macarrão da hora feito na hora",
                price: "17,90",
                amount: 0,
            },
        ],
        drinks: [
            {
                name: "Coquinha gelada",
                img: "assets/coquinha_gelada 1.png",
                description: "Uma coquinha gelada e no capricho",
                price: "5,00",
                amount: 0,
            },
            {
                name: "Suquinho",
                img: "assets/juice.jfif",
                description: "Um suquinho gelado e no cacpricho",
                price: "6,00",
                amount: 0,
            },
            {
                name: "Chazinho",
                img: "assets/tea.jpg",
                description: "Um chazinho gelado e no cacpricho",
                price: "7,00",
                amount: 0,
            },
        ],
        desserts: [
            {
                name: "Pudim",
                img: "assets/pudim 1.png",
                description: "Pudinzinho bem caprichado",
                price: "8,00",
                amount: 0,
            },
            {
                name: "Chico balanceado",
                img: "assets/chico.jpg",
                description: "Chico balanceado no capricho né",
                price: "9,00",
                amount: 0,
            },
            {
                name: "Cupcakes",
                img: "assets/cupcakes.jfif",
                description: "Esses não estão no capricho",
                price: "3,00",
                amount: 0,
            },
        ],
    };
    const { plates, drinks, desserts } = meals;
    const [order, setOrder] = useState(meals);
    const [orderState, setOrderState] = useState(false);
    const [checkOut, setCheckOut] = useState(false);

    function updateOrder(name, amount, type) {
        order[type].forEach((meal) => {
            if(meal.name === name) {
                meal.amount = amount;
            }
        });
        setOrder({...order});
        checkOrderState();
    }

    function checkOrderState() {
        const anyPlateSelected = order.plates.filter(plate => plate.amount !== 0).length;
        const anyDrinkSelected = order.drinks.filter(drink => drink.amount !== 0).length;
        const anyDessertSelected = order.desserts.filter(dessert => dessert.amount !== 0).length;
        if (anyPlateSelected && anyDrinkSelected && anyDessertSelected) {
            setOrderState(true);
        }
        else {
            setOrderState(false);
        }
    }

    function checkingOut(state) {
        setCheckOut(state);
    }

    return (
        <>
            <Header />
            <div className="main">
                <Section title={"Primeiro, sua comida"} mealInfo={plates} updateOrder={updateOrder} type="plates"/>
                <Section title={"Agora, sua bebida"} mealInfo={drinks} updateOrder={updateOrder} type="drinks" />
                <Section title={"Por fim, sua sobremesa"} mealInfo={desserts} updateOrder={updateOrder} type="desserts" />
            </div>
            <ConfirmButton orderState={orderState} checkingOut={checkingOut} />
            {checkOut ? 
                <ConfirmationPage checkingOut={checkingOut} order={order}/> 
                : ""
            }
        </>
    );
}
