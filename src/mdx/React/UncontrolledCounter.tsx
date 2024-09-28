import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const UncontrolledCounter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    if (inputRef.current) {
      const newValue = parseInt(inputRef.current.value, 10);
      if (!isNaN(newValue)) {
        setValue((prevValue) => prevValue + newValue);
        inputRef.current.value = ""; // Clear the input field
      }
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        type="number"
        ref={inputRef}
        placeholder="Enter number"
        className="w-30"
      />
      <Button onClick={increment}>+1</Button>
      <div>Current value: {value}</div>
    </div>
  );
};

export default UncontrolledCounter;
