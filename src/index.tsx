/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";

import Main from "./Main";
import { MainProvider } from "./store";

import "./style.css";

render(
  () => (
    <Router source={hashIntegration()}>
      <MainProvider><Main /></MainProvider>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
