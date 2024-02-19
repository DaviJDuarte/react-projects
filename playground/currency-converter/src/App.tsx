import "./App.css";
import CurrencyForm from "./components/CurrencyForm.tsx";
import { useState } from "react";
import DisplayConvertedCurrency from "./components/DisplayConvertedCurrency.tsx";

const currencies: string[] = ["EUR", "USD", "BRL", "CAD", "INR"];

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>(currencies[0]);
  const [toCurrency, setToCurrency] = useState<string>(currencies[1]);

  function changeQuantityHandler(value: number) {
    setQuantity(value);
  }

  function changeFromCurrencyHandler(value: string) {
    setFromCurrency(value);
  }

  function changeToCurrencyHandler(value: string) {
    setToCurrency(value);
  }

  return (
    <main>
      <CurrencyForm
        currencies={currencies}
        onChangeQuantity={changeQuantityHandler}
        onChangeFromCurrency={changeFromCurrencyHandler}
        onChangeToCurrency={changeToCurrencyHandler}
        fromCurrency={fromCurrency}
      />

      <DisplayConvertedCurrency
        quantity={quantity}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </main>
  );
}

export default App;
