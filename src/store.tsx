import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store"
import { getAppsStore, getTabsConfig } from "@/utils/common";
import { useNavigate } from "@solidjs/router";
import { ITabConfig } from "@/config/types";
import { openPopup as openPopupBase } from "@/components/Popup";
import { IPopupConfig } from "@/components/Popup/types";
import { IMainProvideProps } from "./types";

const MainContext = createContext();

export function MainProvider(props: IMainProvideProps) {
  const tabsConfig = getTabsConfig()
  const appsStoreConfig = getAppsStore()
  const defaultActiveTabKey = tabsConfig?.[0]?.path
  const navigate = useNavigate()
  const store: any = {
    appTabsConfig: [tabsConfig?.[0]],
    activeAppKey: defaultActiveTabKey,
    globalPopupInstance: null
  }

  appsStoreConfig?.forEach?.((item) => {
    store[item.path] = item.store
  })
  const [state, setState] = createStore(store)
  const onTabChange = (href: string) => {
    setState('activeAppKey', href)
    navigate(href, { replace: true })
  }
  const closeTab = (app: string) => {
    const newAppTabsConfig = state.appTabsConfig.filter((item: ITabConfig) => item.path !== app)
    setState('appTabsConfig', newAppTabsConfig)
    onTabChange(newAppTabsConfig[newAppTabsConfig.length - 1].path)
  }
  const value = [
    state,
    {
      setState,
      onTabChange,
      closeTab,
      openPopup(config?: IPopupConfig) {
        const instance = openPopupBase(config)
        setState('globalPopupInstance', instance as any)
      },
      closePopup() {
        (state.globalPopupInstance as any)?.remove?.();
        setState('globalPopupInstance', null)
      }
    }
  ];

  return (
    <MainContext.Provider value={value}>
      {props.children}
    </MainContext.Provider>
  );
}

export function useMain() { return useContext(MainContext); }