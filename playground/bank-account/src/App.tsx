import { useReducer } from "react";
import Button from "./components/Button.tsx";

interface IAccount {
  balance: number;
  loan: number;
  isActive: boolean;
}

interface IAccountAction {
  type:
    | "openAccount"
    | "deposit"
    | "withdraw"
    | "requestLoan"
    | "payLoan"
    | "closeAccount";
  payload?: number;
}

const initialState: IAccount = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state: IAccount, action: IAccountAction): IAccount => {
  const { isActive, balance, loan } = state;
  const { type, payload } = action;

  switch (type) {
    case "openAccount":
      if (!isActive) return { ...state, isActive: true, balance: 500 };
      break;
    case "deposit":
      if (isActive) return { ...state, balance: balance + payload! };
      break;
    case "withdraw":
      if (isActive) return { ...state, balance: balance - payload! };
      break;
    case "requestLoan":
      if (isActive && loan === 0)
        return {
          ...state,
          loan: action.payload!,
          balance: balance + payload!,
        };
      break;
    case "payLoan":
      if (isActive && loan > 0)
        return {
          ...state,
          balance: balance - loan,
          loan: 0,
        };
      break;
    case "closeAccount":
      if (isActive && loan === 0 && balance === 0)
        return { ...state, isActive: false };
      break;
    default:
      throw new Error("Invalid account operation");
  }

  return state;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isActive, balance, loan } = state;

  return (
    <div className={"flex flex-col gap-2"}>
      <h1 className={"text-2xl font-bold"}>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <Button
        className={
          "bg-gray-600 text-white p-2 rounded-lg disabled:brightness-50 cursor-pointer"
        }
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={isActive}
      >
        Open account
      </Button>

      <Button
        onClick={() => {
          dispatch({ type: "deposit", payload: 150 });
        }}
        disabled={!isActive}
      >
        Deposit 150
      </Button>

      <Button
        onClick={() => {
          dispatch({ type: "withdraw", payload: 50 });
        }}
        disabled={!isActive}
      >
        Withdraw 50
      </Button>

      <Button
        onClick={() => {
          dispatch({ type: "requestLoan", payload: 5000 });
        }}
        disabled={!isActive || loan > 0}
      >
        Request a loan of 5000
      </Button>

      <Button
        onClick={() => {
          dispatch({ type: "payLoan" });
        }}
        disabled={!isActive || loan === 0}
      >
        Pay loan
      </Button>

      <Button
        onClick={() => {
          dispatch({ type: "closeAccount" });
        }}
        disabled={!(isActive && balance === 0 && loan === 0)}
      >
        Close account
      </Button>
    </div>
  );
}
