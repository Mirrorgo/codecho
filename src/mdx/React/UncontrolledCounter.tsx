import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC, useRef, useState } from "react";

const UncontrolledCounter: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    if (inputRef.current) {
      const increment = parseInt(inputRef.current.value, 10);
      if (!isNaN(increment)) {
        setCount((prevCount) => prevCount + increment);
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
      <Button onClick={handleIncrement}>Add</Button>
      <div>Count: {count}</div>
    </div>
  );
};

export default UncontrolledCounter;
