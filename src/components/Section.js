import Card from "./Card";

export default function Section({ title, foodInfo }) {
    console.log(foodInfo)
  return (
    <>
      <div className="options-wrapper">
        <div className="options-header">{title}</div>
        <div className="options-list">
          {foodInfo.map((food, index) => <Card info={food} key={index}/>)}
        </div>
      </div>
    </>
  );
}
