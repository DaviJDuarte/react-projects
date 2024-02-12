import {Dispatch} from "react";

interface SelectTipProps {
    children?: string,
    value: number,
    onChange: Dispatch<number>
}

export default function SelectTip({children, value, onChange}: SelectTipProps) {
    type tipOption = { value: number, description: string };
    const tipOptions: tipOption[] = [
        {
            value: 0,
            description: "Dissatisfied (0%)"
        },
        {
            value: 5,
            description: "It was good (5%)"
        },
        {
            value: 10,
            description: "I was good (10%)"
        },
        {
            value: 15,
            description: "It was great (15%)"
        },
        {
            value: 20,
            description: "Absolutely Amazing! (20%)"
        }
    ];

    return (
        <div>
            <p>{children}</p>
            <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
                {tipOptions.map(t => (
                    <option value={t.value}>{t.description}</option>
                ))}
            </select>
        </div>
    );
}