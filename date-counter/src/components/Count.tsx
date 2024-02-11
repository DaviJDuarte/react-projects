import {useContext} from "react";
import DateContext from "../store/DateContext.tsx";

export default function Count() {
    const {count, setCount, updateDate, stepValue} = useContext(DateContext);

    const increaseCountHandler = () => {
        updateDate(1);
        setCount(c => c + stepValue);
    };

    const decreaseCountHandler = () => {
        updateDate(-1);
        setCount(c => c - stepValue);
    };

    return (
        <div>
            <h3>Count</h3>
            <div style={{display: "flex", gap: 20}}>
                <button onClick={increaseCountHandler}>+</button>
                <p>{count} day(s)
                </p>
                <button onClick={decreaseCountHandler}>-</button>
            </div>
        </div>
    );
}