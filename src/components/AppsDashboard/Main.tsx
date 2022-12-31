import { APPS_CONFIG } from "@/config/common";
import { getAppIcon } from "@/utils/common";
import { For } from "solid-js";
import { IAppsDashboardMainProps } from "./types";
import './Main.css'
import { useMain } from "@/store";

export default function AppsDashboardMain (props: IAppsDashboardMainProps) {
  const apps = APPS_CONFIG.filter((item) => item.path !== '/')
  const store = useMain()
  return (
    <section class="dashboard">
      <For each={apps}>
        {(item) => {
          const Icon = getAppIcon(item.path)
          return (
            <div
              class="app-item"
            >
              <div
                class="app-item-btn"
                onClick={() => {
                    if (!props.currentAppTabsConfig?.find((o) => o.path === item.path)) {
                      const isUpdateApp = item.store?.actions?.(store)
                      if (isUpdateApp) {
                        props?.onAppChange?.([...props.currentAppTabsConfig, item]) 
                      }
                    }
                  }
                }
              >
                <Icon class="app-icon" size={32} />
                {item.title}
              </div>
            </div>
          )}
        }
      </For>
    </section>
  )
}