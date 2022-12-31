import { render } from "solid-js/web";
import PopupBase from "./PopupBase";
import { IPopupConfig } from "./types";

function openPopup(config?: IPopupConfig) {
  const body = document.body
  const dom = document.createElement('div')

  const className = () => (config as IPopupConfig).class as any
  const remove = () => {
    dom.remove()
  }
  render(
    () => (
      <PopupBase class={className} closePopup={config?.closePopup || remove}>
        {(config as IPopupConfig)?.children}
      </PopupBase>
    ),
    dom
  );
  body.appendChild(dom)
  return {
    remove
  } 
}

export {
  PopupBase,
  openPopup
}