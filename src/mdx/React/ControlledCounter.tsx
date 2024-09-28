import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC, useState } from "react";

const ControlledCounter: FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) setValue(newValue);
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="Enter number"
        className="w-30"
      />
      <Button onClick={() => setValue((prev) => prev + 1)}>+1</Button>
      <div>Current value: {value}</div>
    </div>
  );
};

export default ControlledCounter;
