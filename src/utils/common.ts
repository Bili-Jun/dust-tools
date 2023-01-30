import { AiOutlineBuild } from "solid-icons/ai";
import { FaBrandsReact } from 'solid-icons/fa'
import { IoLogoVue } from 'solid-icons/io'
import { VsGist } from 'solid-icons/vs'
import { RouteConfig } from "@/components/Routes/types"
import { APPS_CONFIG } from "@/config/common"
import { IAppConfig, TabsConfig } from "@/config/types"
import { IconTypes } from "solid-icons";
import { ClassNames, IBaseClassNamesObject } from "@/types";

export function isString (val: unknown): boolean {
  if (val === undefined || val === null) {
    return false
  }
  return Object.prototype.toString.call(val) === '[object String]'
}

export function isArray (val: unknown): boolean {
  if (val === undefined || val === null) {
    return false
  }
  return Object.prototype.toString.call(val) === '[object Array]'
}

function getBaseClassNames (classNames: ClassNames): string | void {
  if (isString(classNames) && classNames.length) {
    return classNames as unknown as string
  }
  
  if (isArray(classNames)) {
    return (classNames as Array<string | IBaseClassNamesObject>)?.filter?.(Boolean)?.map?.((item) => getBaseClassNames(item as unknown as ClassNames))?.join?.(' ')
  }

  const keys = Object.keys(classNames)
  
  return keys.length ? keys?.join(' ') : undefined
}

export function getClassNames (...classNames: ClassNames[]): string | void {
  if (!classNames || !classNames.length) {
    return
  }

  const targetClassNames = classNames.filter(Boolean)

  if (targetClassNames.length === 1) {
    return getBaseClassNames(classNames[0])
  }
  return targetClassNames?.map?.((item) => getBaseClassNames(item))?.join?.(' ')
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