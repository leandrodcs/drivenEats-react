import Header from "./Header";
import Section from "./Section";
import ConfirmButton from "./ConfirmButton";
import ConfirmationPage from "./ConfirmationPage";

export default function App() {
  const foods = {
    plates: [
      {
        name: "Frango Yin Yang",
        img: "assets/frango_yin_yang 1.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "14,90",
      },
      {
        name: "Hamburgão",
        img: "assets/hamburguer.jfif",
        description: "Esse bixo é gostoso em",
        price: "18,90",
      },
      {
        name: "Macarrãozão",
        img: "assets/macarrao.jfif",
        description: "Macarrão da hora feito na hora",
        price: "17,90",
      },
    ],
    drinks: [
      {
        name: "Coquinha gelada",
        img: "assets/coquinha_gelada 1.png",
        description: "Coquinha gelada",
        price: "5,00",
      },
      {
        name: "Suquinho",
        img: "assets/juice.jfif",
        description: "Um suquinho gelado e no cacpricho",
        price: "6,00",
      },
      {
        name: "Chazinho",
        img: "assets/tea.jpg",
        description: "Um chazinho gelado e no cacpricho",
        price: "7,00",
      },
    ],
    desserts: [
      {
        name: "Pudim",
        img: "assets/pudim 1.png",
        description: "Pudinzinho bem caprichado",
        price: "8,00",
      },
      {
        name: "Chico balanceado",
        img: "assets/chico.jpg",
        description: "Chico balanceado no capricho né",
        price: "9,00",
      },
      {
        name: "Cupcakes",
        img: "assets/cupcakes.jfif",
        description: "Esses não estão no capricho",
        price: "3,00",
      },
    ],
  };

  const { plates, drinks, desserts } = foods;

  return (
    <>
      <Header />
      <div className="main">
        <Section title={"Primeiro, sua comida"} foodInfo={plates} />
        <Section title={"Agora, sua bebida"} foodInfo={drinks} />
        <Section title={"Por fim, sua sobremesa"} foodInfo={desserts} />
      </div>
      <ConfirmButton />
      <ConfirmationPage />
    </>
  );
}
