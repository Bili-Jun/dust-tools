import { AiOutlineBuild } from "solid-icons/ai";
import { RouteConfig } from "@/components/Routes/types"
import { APPS_CONFIG } from "@/config/common"
import { IAppConfig, TabsConfig } from "@/config/types"

export function getClassNames (...classNames: string[]): string | void {
  if (!classNames || !classNames.length) {
    return
  }

  const targetClassNames = classNames.filter(Boolean)

  if (targetClassNames.length === 1) {
    return targetClassNames[0]
  }
  return targetClassNames.join(' ')
}

export function getRoutes (): RouteConfig {
  return APPS_CONFIG?.map((item) => ({ path: item.path, component: item.component, children: item.children }))
}

export function getTabsConfig (): TabsConfig {
  return APPS_CONFIG?.map?.((item) => ({ path: item.path, title: item.title }))
}

export function getAppsStore () {
  return APPS_CONFIG?.map?.((item) => ({ path: item.path, store: item.store }))
}

const icons = {
  AiOutlineBuild
}

export function getAppIcon (app: string) {
  const item = APPS_CONFIG?.find?.((item) => item.path === app)
  const { icon } = (item as IAppConfig) || {}
  if (!icon) {
    return
  }
  const Component = (icons as any)?.[icon]
  return Component
}