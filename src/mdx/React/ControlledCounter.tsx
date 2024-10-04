import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FC, useState } from "react";

const ControlledCounter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleIncrement = () => {
    const increment = parseInt(inputValue, 10);
    if (!isNaN(increment)) {
      setCount((prevCount) => prevCount + increment);
      setInputValue("");
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter number"
        className="w-30"
      />
      <Button onClick={handleIncrement}>Add</Button>
      <div>Count: {count}</div>
    </div>
  );
};

export default ControlledCounter;
