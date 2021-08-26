import Card from "./Card";

export default function Section({ title, mealInfo }) {
    console.log(mealInfo)
  return (
    <>
      <div className="options-wrapper">
        <div className="options-header">{title}</div>
        <div className="options-list">
          {mealInfo.map((meal, index) => <Card info={meal} key={index}/>)}
        </div>
      </div>
    </>
  );
}
