import { For, createSignal } from "solid-js";
import { Transition } from 'solid-transition-group'
import { useNavigate } from "@solidjs/router";
import { AiOutlineClose } from 'solid-icons/ai'
import { invoke } from "@tauri-apps/api/tauri";

import { Routes } from "@/components/Routes";
import { Tabs, TabItem } from "@/components/Tabs";

import { getRoutes, getTabsConfig } from "@/utils/common";
import { useMain } from "@/store";
import { AppsConfig, ITabConfig } from "@/config/types";

import "./Main.css";



function App() {
  const routesConfig = getRoutes()
  const [state, { onTabChange, closeTab }] = useMain() as any

  return (
    <>
      <header>
        <Tabs onTabChange={onTabChange} activeTabKey={() => state.activeAppKey}>
          <For each={state.appTabsConfig as AppsConfig}>
            {(item) => <TabItem key={item.path}>{item.title}{item.path !== '/' && <AiOutlineClose class="close-tab" onClick={(e) => { e.stopPropagation(); closeTab(item.path) }} />}</TabItem>}
          </For>
        </Tabs>
      </header>
      <main>
        <Transition name="fade">
          <Routes config={routesConfig} />
        </Transition>
      </main>
    </>
    
    // <div class="container">
    //   <h1>Welcome to Tauri!</h1>

    //   <p>Click on the Tauri, Vite, and Solid logos to learn more.</p>

    //   <div class="row">
    //     <div>
    //       <input
    //         id="greet-input"
    //         onChange={(e) => setName(e.currentTarget.value)}
    //         placeholder="Enter a name..."
    //       />
    //       <button type="button" onClick={() => greet()}>
    //         Greet
    //       </button>
    //     </div>
    //   </div>

    //   <p>{greetMsg}</p>
    // </div>
  );
}

export default App;
