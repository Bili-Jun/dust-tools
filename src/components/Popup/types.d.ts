import { Accessor } from "solid-js"

export interface IPopupBaseProps {
  children?: any
  class?: Accessor<string>
  closePopup?: (params?: unknown) => unknown
}

export interface IPopupConfig extends IPopupBaseProps {
}