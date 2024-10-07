import { useState } from "react";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
const InputShow = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2 w-2/5">
      <div className="flex items-center justify-between">
        <div>受控模式:</div>
        <ControlledInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div>非受控模式:</div>
        <UncontrolledInput defaultValue={""} />
      </div>
    </div>
  );
};
export default InputShow;
