import AppsDashboardMain from "@/components/AppsDashboard/Main";
import { openPopup } from "@/components/Popup";
import { useMain } from "@/store";

export default function Home () {
  const [state, { setState }] = useMain() as any
  return (
    <AppsDashboardMain currentAppTabsConfig={state.appTabsConfig} onAppChange={(appTabsConfig) => setState('appTabsConfig', appTabsConfig)}></AppsDashboardMain>
  )
}