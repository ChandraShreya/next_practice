"use client"
import useCounter from "./counter";

export default function CounterCusTom() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
