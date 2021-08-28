import Card from "./Card";

export default function Section({ title, mealInfo, updateOrder, type}) {
    return (
        <>
            <div className="options-wrapper">
                <div className="options-header">{title}</div>
                <div className="options-list">
                    {mealInfo.map((meal, index) => <Card info={meal} updateOrder={updateOrder} type={type} key={index}/>)}
                    <div className="margin-right"></div>
                </div>
            </div>
        </>
    );
}
