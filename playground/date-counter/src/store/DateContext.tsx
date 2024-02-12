import {createContext, Dispatch, SetStateAction} from "react";

interface IDateContext {
    date: Date;
    updateDate: ((sign: 1 | -1) => void);
    stepValue: number;
    setStepValue: Dispatch<SetStateAction<number>>
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}

const DateContext = createContext<IDateContext>({
        date: new Date(),
        updateDate: () => {
        }, // Dummy function
        stepValue: 1,
        setStepValue: () => {
        }, // Dummy function
        count: 0,
        setCount: () => {
        }
    }
);

export default DateContext;