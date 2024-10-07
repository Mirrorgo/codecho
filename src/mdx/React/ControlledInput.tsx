import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

type ControlledInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
function ControlledInput({ value, onChange }: ControlledInputProps) {
  return <Input value={value} onChange={onChange} className="w-30" />;
}

export default ControlledInput;
