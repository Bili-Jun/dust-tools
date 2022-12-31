import { useMain } from "@/store";
import { lazy } from "solid-js";
import { store as CreateComponentsStore } from "@/pages/CreateComponents"

import { AppsConfig } from "./types";

export const APPS_CONFIG: AppsConfig = [{
  path: '/',
  title: 'Home',
  component: lazy(() => import("@/pages/Home"))
}, {
  path: '/create-components/:id',
  title: '新前端组件',
  component: lazy(() => import("@/pages/CreateComponents")),
  icon: 'AiOutlineBuild',
  store: CreateComponentsStore
}]
  