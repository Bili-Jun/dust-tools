import { lazy } from "solid-js";
import { store as CreateComponentsStore } from "@/pages/CreateComponents"

import { AppsConfig } from "./types";

export const APPS_CONFIG: AppsConfig = [{
  path: '/',
  title: 'Home',
  component: lazy(() => import("@/pages/Home"))
}, {
  path: '/create-components/:type/:id',
  title: '新前端组件',
  component: lazy(() => import("@/pages/CreateComponents")),
  icon: 'AiOutlineBuild',
  store: CreateComponentsStore,
  config: {
    lang: ['js', 'ts'],
    desc: {
      SELECT_TYPE: '请选择业务组件类型'
    },
    items: [{
      name: 'reactFunctionComponent',
      title: 'react函数组件',
      icon: 'FaBrandsReact',
      fields: []
    }, {
      name: 'reactClassComponent',
      title: 'react类组件',
      icon: 'FaBrandsReact',
      fields: []
    }, {
      name: 'vueOptionsComponent',
      title: 'vue组件',
      icon: 'IoLogoVue',
      fields: []
    }, {
      name: 'vueClassComponent',
      title: 'vue类组件',
      icon: 'IoLogoVue',
      fields: []
    }, {
      name: 'solidjsComponent',
      title: 'solidjs组件',
      icon: 'VsGist',
      fields: []
    }],
    common: [{}]
  }
}]
  