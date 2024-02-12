import {Dispatch} from "react";

interface OrderAmountInputProps {
    value: number,
    onChange: Dispatch<number>
}

export default function OrderAmountInput({value, onChange}: OrderAmountInputProps) {
    return (
        <div>
            <p>Enter the order amount:</p>
            <input type="number" step={0.01} value={value} name="order-amount" id="order-amount"
                   onChange={(e) => onChange(Number(e.target.value))}/>
        </div>
    );
}
