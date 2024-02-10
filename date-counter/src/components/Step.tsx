import {useContext} from "react";
import DateContext from "../store/DateContext.tsx";

export default function Step() {
    const {stepValue, setStepValue} = useContext(DateContext);

    const increaseStepHandler = () => {
        setStepValue(s => s + 1);
    };

    const decreaseStepHandler = () => {
        if (stepValue > 1) {
            setStepValue(s => s - 1);
        }
    };

    return (
        <div>
            <h3>Steps</h3>
            <div style={{display: "flex", gap: 20}}>
                <button onClick={increaseStepHandler}>+</button>
                <p>{stepValue} day(s)
                </p>
                <button onClick={decreaseStepHandler}>-</button>
            </div>
        </div>
    )
        ;
}
