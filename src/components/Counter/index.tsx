import { render } from "solid-js/web";
import Nested from "./nested";
import { CounterProvider } from "./counter";

export function Test(props: any) {
  return <div>
    {props.children}
  </div>
};

export default function Counter() {
  return <CounterProvider>
    <h1>Welcome to Counter App</h1>
    <Test>
      <Nested />
    </Test>
  </CounterProvider>
};