import { AiOutlineClose } from 'solid-icons/ai'
import { getClassNames } from "@/utils/common";
import { IPopupBaseProps } from "./types";
import './PopupBase.css'

export default function PopupBase(props: IPopupBaseProps) {
  const classNames = (): string | void => getClassNames('popup-container', props?.class?.() as string)
  return (
    <>
      <div class="popup-bg"></div>
      <div class={classNames() as string}>
        <div class="popup-content">
          <AiOutlineClose class="close-popup" onClick={props.closePopup} size={24} />
          {props.children}
        </div>
      </div> 
    </>
  )
}