import {useContext} from "react";
import DateContext from "../store/DateContext.tsx";

export default function DateCounter() {
    const {date, count} = useContext(DateContext);

    let text: string = "Today is";

    if (count > 0) {
        text = `${count} day(s) from now will be`;
    }

    if (count < 0) {
        const absCount = Math.abs(count);
        text = `${absCount} day(s) ago was`;
    }

    return (
        <p>{text} {date.toDateString()}</p>
    );
}