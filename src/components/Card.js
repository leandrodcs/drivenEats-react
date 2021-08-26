export default function Card(props) {
    const {name, img, price, description} = props.info;

  return (
    <div className="option food">
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
      <div className="number"></div>
    </div>
  );
}
