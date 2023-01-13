import { Button } from "@/components/Button";
import { getCreateComponentsConfig, getIconComponent } from "@/utils/common";
import { For } from "solid-js/web";
import { IComponentsTypeProps } from "./types";
import "./ComponentsType.css"

export default function ComponentsType (props?: IComponentsTypeProps) {
  const config = getCreateComponentsConfig()
  return (
    <>
      <h3>{config.desc.SELECT_TYPE}</h3>
      <div class="component-type-content">
        <For each={config.items}>
          {(item) => {
            const { icon, title, name } = item as any || {}
            const Icon = getIconComponent(icon)
            return (
              <Button class="component-type-item" ghost onClick={() => props?.action(name, title)}>
                {Icon && <Icon class="item-icon" size={16} />}
                <span>{title}</span>
              </Button>
            )
          }}
        </For>
      </div>
    </>  
  )
}