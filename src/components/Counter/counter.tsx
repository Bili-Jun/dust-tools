import { createSignal, createContext, useContext } from "solid-js";

const CounterContext = createContext();

export function CounterProvider(props: any) {
  const [count, setCount] = createSignal(props.count || 0),
    counter = [
      count,
      {
        increment() {
          setCount(c => c + 1);
        },
        decrement() {
          setCount(c => c - 1);
        }
      }
    ];

  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
}

export function useCounter() { return useContext(CounterContext); }