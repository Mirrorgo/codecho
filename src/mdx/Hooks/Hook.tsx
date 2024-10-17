import { Button } from "@/components/ui/button";
import {
  useStateWithUpdateNotifier1,
  useStateWithUpdateNotifier2,
} from "./hooks/useMyStateWithUpdateNotifier";
import useRequest from "./hooks/useRequest";
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

// 模拟 fetch 请求函数
// const fetchFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   if (response.ok) {
//     const result = await response.json();
//     return result;
//   }
//   throw new Error("请求失败");
// };

const getUsername = async () => {
  // 模拟 API 调用
  console.log("fetch data");
  return Promise.resolve("John Doe");
};

function PollingComponent() {
  // 使用 usePolling Hook，传入 fetch 函数，轮询间隔和超时时间
  const { data, isRequesting, run, cancel } = useRequest(getUsername, {
    pollingInterval: 3000,
  });

  return (
    <div>
      {data ? (
        <div>
          <p>获取到的数据: {JSON.stringify(data)}</p>
        </div>
      ) : isRequesting ? (
        <p>等待数据中...</p>
      ) : (
        <p>点击开始轮询按钮</p>
      )}
      <div className="flex gap-6">
        <Button onClick={() => run()} disabled={isRequesting}>
          开始轮询
        </Button>
        <Button onClick={cancel} disabled={!isRequesting}>
          停止轮询
        </Button>
      </div>
    </div>
  );
}

export { UpdateNotifier1, UpdateNotifier2, PollingComponent };
