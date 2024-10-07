import { Input } from "@/components/ui/input";

type UncontrolledInputProps = {
  defaultValue: string;
};
function UncontrolledInput({ defaultValue }: UncontrolledInputProps) {
  return <Input defaultValue={defaultValue} className="w-30" />;
}

export default UncontrolledInput;
