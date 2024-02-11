import './App.css'
import OrderAmountInput from "./components/OrderAmountInput.tsx";
import SelectTip from "./components/SelectTip.tsx";
import CalculatedTip from "./components/CalculatedTip.tsx";
import {useState} from "react";

function App() {
    const [orderAmount, setOrderAmount] = useState<number>(0);
    const [myTip, setMyTip] = useState(0);
    const [friendsTip, setFriendsTip] = useState(0);

    return (
        <main>
            <h2 style={{textDecoration: "underline"}}>Tip Calculator</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <OrderAmountInput value={orderAmount} onChange={setOrderAmount}/>
                <SelectTip value={myTip} onChange={setMyTip}>
                    How did you like the service?
                </SelectTip>
                <SelectTip value={friendsTip} onChange={setFriendsTip}>
                    How did your friend like the service?
                </SelectTip>
            </form>
            <section>
                {orderAmount > 0 && <CalculatedTip
                    orderAmount={orderAmount}
                    myTip={myTip}
                    friendsTip={friendsTip}
                />}
            </section>
        </main>
    );
}

export default App
