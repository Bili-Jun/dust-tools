import { ClassNames } from "@/types";
import { getClassNames } from "@/utils/common";
import { IInputProps } from "./types";

export default function Input (props: IInputProps) {
  return (
    <span class={getClassNames('normal-input', props.class as ClassNames) as string}>
      <input
        class={getClassNames(props.inputClass as ClassNames) as string}
        placeholder={props.placeholder}
      />
    </span>
  )
}
