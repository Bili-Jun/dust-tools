import { Component } from "solid-js"

export interface IRouteConfigItem {
  path: string
  component?: Component
  children?: IRouteConfigItem[]
  redirect?: string
}

export type RouteConfig = IRouteConfigItem[]

export interface IRouterProps {
  config: RouteConfig
}
