import Header from "./Header";
import Section from "./Section";
import ConfirmButton from "./ConfirmButton";
import ConfirmationPage from "./ConfirmationPage";

export default function App() {
  const meals = {
    plates: [
      {
        name: "Frango Yin Yang",
        img: "assets/frango_yin_yang 1.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "14,90",
        selected: false,
        amount: 0,
      },
      {
        name: "Hamburgão",
        img: "assets/hamburguer.jfif",
        description: "Esse bixo é gostoso em",
        price: "18,90",
        selected: false,
        amount: 0,
      },
      {
        name: "Macarrãozão",
        img: "assets/macarrao.jfif",
        description: "Macarrão da hora feito na hora",
        price: "17,90",
        selected: false,
        amount: 0,
      },
    ],
    drinks: [
      {
        name: "Coquinha gelada",
        img: "assets/coquinha_gelada 1.png",
        description: "Uma coquinha gelada e no capricho",
        price: "5,00",
        selected: false,
        amount: 0,
      },
      {
        name: "Suquinho",
        img: "assets/juice.jfif",
        description: "Um suquinho gelado e no cacpricho",
        price: "6,00",
        selected: false,
        amount: 0,
      },
      {
        name: "Chazinho",
        img: "assets/tea.jpg",
        description: "Um chazinho gelado e no cacpricho",
        price: "7,00",
        selected: false,
        amount: 0,
      },
    ],
    desserts: [
      {
        name: "Pudim",
        img: "assets/pudim 1.png",
        description: "Pudinzinho bem caprichado",
        price: "8,00",
        selected: false,
        amount: 0,
      },
      {
        name: "Chico balanceado",
        img: "assets/chico.jpg",
        description: "Chico balanceado no capricho né",
        price: "9,00",
        selected: false,
        amount: 0,
      },
      {
        name: "Cupcakes",
        img: "assets/cupcakes.jfif",
        description: "Esses não estão no capricho",
        price: "3,00",
        selected: false,
        amount: 0,
      },
    ],
  };

  const { plates, drinks, desserts } = meals;

  return (
    <>
      <Header />
      <div className="main">
        <Section title={"Primeiro, sua comida"} mealInfo={plates} />
        <Section title={"Agora, sua bebida"} mealInfo={drinks} />
        <Section title={"Por fim, sua sobremesa"} mealInfo={desserts} />
      </div>
      <ConfirmButton />
      <ConfirmationPage />
    </>
  );
}
