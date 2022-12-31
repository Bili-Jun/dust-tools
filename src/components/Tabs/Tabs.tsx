import { TabProvider } from "./store";
import { ITabsProps } from "./types";

export default function Tabs(props: ITabsProps) {
  return (
    <div class="tabs">
      <TabProvider
        onTabChange={props.onTabChange}
        activeTabKey={props.activeTabKey}
      >
        {props.children}
      </TabProvider>
    </div>
  )
};