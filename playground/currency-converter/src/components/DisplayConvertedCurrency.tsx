import { useEffect, useState } from "react";

interface DisplayConvertedCurrencyProps {
  quantity: number;
  fromCurrency: string;
  toCurrency: string;
}

interface apiResult {
  amount: number;
  base: string;
  date: string;
  rates: {
    [currency: string]: number;
  };
}

export default function DisplayConvertedCurrency({
  quantity,
  fromCurrency,
  toCurrency,
}: DisplayConvertedCurrencyProps) {
  const [result, setResult] = useState<number | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (quantity <= 0) {
          setResult(null);
          return;
        }

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${quantity}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal },
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = (await res.json()) as apiResult;
        setResult(data.rates[toCurrency]);
      } catch (e) {
        if (e instanceof Error && e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [quantity, toCurrency, fromCurrency]);

  return (
    <>
      {error && <p>{error}</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && result && (
        <p>
          ${result.toFixed(2)} {toCurrency}
        </p>
      )}
    </>
  );
}
