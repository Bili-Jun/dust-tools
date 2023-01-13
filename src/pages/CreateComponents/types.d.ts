export interface IComponentsTypeProps {
  children?: any
  class?: string
  action: (componentType: string, title?: string) => void
}