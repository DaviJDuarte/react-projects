import './App.css'
import DateCounter from "./components/DateCounter.tsx";
import DateContextProvider from "./store/DateContextProvider.tsx";
import Count from "./components/Count.tsx";
import Step from "./components/Step.tsx";

function App() {
    return (
        <div className={"App"}>
            <DateContextProvider>
                <Count/>
                <Step/>
                <DateCounter/>
            </DateContextProvider>
        </div>
    );
}

export default App
