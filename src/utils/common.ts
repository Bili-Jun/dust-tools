import { AiOutlineBuild } from "solid-icons/ai";
import { FaBrandsReact } from 'solid-icons/fa'
import { IoLogoVue } from 'solid-icons/io'
import { VsGist } from 'solid-icons/vs'
import { RouteConfig } from "@/components/Routes/types"
import { APPS_CONFIG } from "@/config/common"
import { IAppConfig, TabsConfig } from "@/config/types"
import { IconTypes } from "solid-icons";

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

export function getAppInfo (app: string) {
  return APPS_CONFIG?.find?.((item) => item.path === app)
}

const icons: {
  [key: string]: IconTypes
} = {
  AiOutlineBuild,
  FaBrandsReact,
  IoLogoVue,
  VsGist
}

export function getIconComponent (icon: string) {
  if (!icon) {
    return
  }
  const Component = icons?.[icon]
  return Component
}

export function getAppIcon (app: string) {
  const item = APPS_CONFIG?.find?.((item) => item.path === app)
  const { icon } = (item as IAppConfig) || {}
  const Component = getIconComponent(icon as string)
  return Component
}

export function getCreateComponentsConfig () {
  const app = APPS_CONFIG[1]
  return app.config
}