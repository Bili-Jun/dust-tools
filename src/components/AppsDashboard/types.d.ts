import { AppsConfig } from "@/config/types";
import { Accessor } from "solid-js";

export interface IAppsDashboardMainProps {
  currentAppTabsConfig: AppsConfig
  onAppChange: (appKey: AppsConfig) => void
}
