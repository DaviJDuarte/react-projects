interface CalculatedTipProps {
    orderAmount: number,
    myTip: number,
    friendsTip: number
}

export default function CalculatedTip({orderAmount, myTip, friendsTip}: CalculatedTipProps) {
    const tip = (myTip + friendsTip) / 2;
    const total = orderAmount + (orderAmount * tip / 100);
    return (
        <p>
            Your total amount is: ${total.toFixed(2)} (${orderAmount.toFixed(2)} order + {tip}% tip)
        </p>
    );
}