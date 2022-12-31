import { createSignal, createContext, useContext } from "solid-js";
import { ITabsProps } from "./types";

const TabContext = createContext();

export function TabProvider(props: ITabsProps) {
  const [activeTabKey, setActiveTabKey] = createSignal(props.activeTabKey)
  const value = [
    props.activeTabKey || activeTabKey,
      props.onTabChange || ((key) => {
        setActiveTabKey(key);
      }),
    ];

  return (
    <TabContext.Provider value={value}>
      {props.children}
    </TabContext.Provider>
  );
}

export function useTab() { return useContext(TabContext); }