import { nanoid } from 'nanoid'
import { APPS_CONFIG } from "@/config/common"
import { IAppStore } from "@/config/types"
import ComponentsType from "./ComponentsType"
import Pannel from './Pannel'
import CodeTemplateEditor from './CodeTemplateEditor'
import "./style.css"

export const store: IAppStore = {
  state: {
    visible: false
  },
  actions: (globalStore: any) => {
    const [_, { openPopup, closePopup, onAppChange }] = globalStore as any
    const action = (componentType: string, title?: string) => {
      const appDetail = APPS_CONFIG[1]
      const id = nanoid()
      onAppChange(appDetail.path, { targetPath: `/create-components/${componentType}/${id}`, title })
      closePopup()
    }
    openPopup({
      children: <ComponentsType action={action} />
    })
  }
}

export default function CreateComponents () {
  return (
    <div class="create-components-container">
      <Pannel />
      <CodeTemplateEditor />
    </div>
  )
}