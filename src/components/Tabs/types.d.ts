import { Accessor } from "solid-js"

export type ActiveTabKey = Accessor<string>

export interface ITabItemProps {
  key?: string
  children?: any
}

export interface ITabsProps {
  children?: any
  onTabChange?: (params?: any) => void
  activeTabKey?: ActiveTabKey
}
