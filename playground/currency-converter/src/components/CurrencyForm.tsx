import Select from "./Select.tsx";

interface CurrencyFormProps {
  currencies: string[];
  onChangeQuantity: (value: number) => void;
  onChangeFromCurrency: (value: string) => void;
  onChangeToCurrency: (value: string) => void;
  fromCurrency: string;
}

export default function CurrencyForm({
  currencies,
  onChangeQuantity,
  onChangeToCurrency,
  onChangeFromCurrency,
  fromCurrency,
}: CurrencyFormProps) {
  return (
    <form>
      <input
        autoFocus={true}
        type="number"
        step={0.1}
        min={0}
        onChange={(e) => onChangeQuantity(Number(e.target.value))}
      />
      <Select options={currencies} onChange={onChangeFromCurrency} />
      <Select
        options={currencies.filter((currency) => currency !== fromCurrency)}
        onChange={onChangeToCurrency}
      />
    </form>
  );
}
