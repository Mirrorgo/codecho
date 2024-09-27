import { useState } from "react";
import { Button } from "../ui/button";

function Hello() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="bg-slate-400">{count}</div>
      <Button onClick={() => setCount((pre) => pre + 1)}>+</Button>
    </div>
  );
}

export default Hello;
