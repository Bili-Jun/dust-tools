import { IRouteConfigItem } from '@/components/Routes/types'

export interface ITabConfig {
  path: string
  title?: string
}

export interface IAppStore {
  state: unknown
  actions?: (store?: unknown) => boolean | void

}

export interface IAppConfig extends ITabConfig, IRouteConfigItem {
  icon?: string,
  store?: IAppStore
}

export type AppsConfig = IAppConfig[]

export type TabsConfig = ITabConfig[]