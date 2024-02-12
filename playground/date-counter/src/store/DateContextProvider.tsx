import DateContext from "./DateContext.tsx";
import React, {useState} from "react";

interface DateContextProviderProps {
    children: React.ReactNode
}

export default function DateContextProvider({children}: DateContextProviderProps) {
    const [date, setDate] = useState<Date>(new Date());
    const [stepValue, setStepValue] = useState<number>(1);
    const [count, setCount] = useState<number>(0);

    const updateDate = (sign: 1 | -1 = 1) => {
      setDate((d) => {
          d.setDate(d.getDate() + (stepValue * sign));
          return d;
      });
    };

    return (
        <DateContext.Provider value={{date, updateDate: updateDate, stepValue, setStepValue, count, setCount}}>
            {children}
        </DateContext.Provider>
    );
}