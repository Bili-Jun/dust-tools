import { JSX } from "solid-js";

export type ClickEvent = JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined

export interface IButtonProps {
  children?: any
  class?: string
  onClick?: ClickEvent
  ghost?: boolean
}