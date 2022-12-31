import { getClassNames } from "@/utils/common";
import { Button } from "../Button";
import { useTab } from "./store";

import { ITabItemProps } from "./types";

import "./TabItem.css"

export default function TabItem(props: ITabItemProps) {
  const [activeTabKey, setActiveTabKey] = useTab() as any
  const action = () => setActiveTabKey(props.key)

  return (
    <Button
      class={(props.key === activeTabKey() ? getClassNames('tab-item', 'active') : 'tab-item') as string}
      onClick={action}>{props.children}
    </Button>
  );
};
