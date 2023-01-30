import { Component } from "solid-js"

export interface IBaseClassNamesObject {
  [className: string]: boolean
}

export type ClassNames = string | IBaseClassNamesObject | Array<string | IBaseClassNamesObject>

export interface IBaseProps {
  class?: ClassNames
}

export interface IComponentProps extends IBaseProps{
  children?: Component | Component[] | string | number
}

export interface IMainProvideProps extends IComponentProps {
}
