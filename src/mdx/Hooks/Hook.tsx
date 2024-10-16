import { Button } from "@/components/ui/button";
import {
  useStateWithUpdateNotifier1,
  useStateWithUpdateNotifier2,
} from "./hooks/useMyStateWithUpdateNotifier";
function UpdateNotifier1() {
  const [state, setState] = useStateWithUpdateNotifier1<number>(0, console.log);
  const handleOnClick321 = () => {
    setState(3);
    setState(2);
    setState(1);
  };
  const handleOnClick45Plus = () => {
    setState(4);
    setState(5);
    setState((cur) => cur + 1);
  };
  const handleOnClick789 = () => {
    setState(7);
    setState(8);
    setState(9);
  };
  return (
    <>
      <div className="flex justify-between w-96">
        <Button onClick={handleOnClick321}>setState:3,2,1</Button>
        <Button onClick={handleOnClick45Plus}>setState:4,5,+</Button>
        <Button onClick={handleOnClick789}>setState:7,8,9</Button>
      </div>
      <div className="leading-9 w-30">Current state: {state}</div>
    </>
  );
}

function UpdateNotifier2() {
  const [state, setState] = useStateWithUpdateNotifier2<number>(0);
  const handleOnClick321 = () => {
    setState(3);
    setState(2, console.log);
    setState(1);
  };
  const handleOnClick45Plus = () => {
    setState(4);
    setState(5);
    setState((cur) => cur + 1);
  };
  const handleOnClick789 = () => {
    setState(7, console.log);
    setState(8);
    setState(9);
  };
  return (
    <>
      <div className="flex justify-between w-[28rem]">
        <Button onClick={handleOnClick321}>setState:3,2.log,1</Button>
        <Button onClick={handleOnClick45Plus}>setState:4,5,+</Button>
        <Button onClick={handleOnClick789}>setState:7.log,8,9</Button>
      </div>
      <div className="leading-9 w-30">Current state: {state}</div>
    </>
  );
}

export { UpdateNotifier1, UpdateNotifier2 };
