import { For, onMount } from "solid-js";
import { Transition } from 'solid-transition-group'
import { AiOutlineClose } from 'solid-icons/ai'
import { invoke } from "@tauri-apps/api/tauri";

import { Routes } from "@/components/Routes";
import { Tabs, TabItem } from "@/components/Tabs";

import { getRoutes } from "@/utils/common";
import { useMain } from "@/store";
import { AppsConfig, ITabConfig } from "@/config/types";

import "./Main.css";
import { useLocation, useNavigate } from "@solidjs/router";



function App() {
  const routesConfig = getRoutes()
  const [state, { onTabChange, closeTab }] = useMain() as any
  onMount(() => {
    const [currentState] = useMain() as any
    const location = useLocation()
    const isRouterMatched = currentState?.appTabsConfig?.some((item: ITabConfig) => item.path === location.pathname)
    if (!isRouterMatched) {
      const navigate = useNavigate()
      navigate('/', { replace: true })
    }
  })
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
  );
}

export default App;
