import { ClickEvent, IButtonProps } from "./types"
import { getClassNames } from "@/utils/common"

import "./Button.css"


export default function Button (props: IButtonProps) {
  const defaultEvent = (props.onClick || (() => {})) as ClickEvent
  return (
    <button class={getClassNames('btn', props.class as string, props.ghost ? 'ghost' : '') as string} type="button" onClick={defaultEvent}>
      <div class="btn-inner">{props.children}</div>
    </button>
  )
}
