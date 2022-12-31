import { useCounter } from "./counter";

export default function Nested() {
  const [count, { increment }] = useCounter() as any
  return (
    <>
      <div>{count}</div>
      <button onclick={increment}>+</button>
      <button>-</button>
    </>
  );
};
