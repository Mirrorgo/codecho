import { useCallback, useEffect, useRef, useState } from "react";

interface Options {
  pollingInterval?: number;
}

type Service<TData, TParams extends any[]> = (
  ...args: TParams
) => Promise<TData>;

function useRequest<TData, TParams extends any[] = []>(
  service: Service<TData, TParams>,
  options: Options = {}
) {
  const { pollingInterval } = options;

  const [data, setData] = useState<TData | undefined>(undefined);
  const [isRequesting, setIsRequesting] = useState(false);

  const pollingTimerRef = useRef<NodeJS.Timeout | null>(null);
  // TODO: 这里是不是得优化一下, 而且 run 不用传入参数吧?
  const serviceRef = useRef(service);
  serviceRef.current = service;

  const cancel = useCallback(() => {
    if (pollingTimerRef.current) {
      clearTimeout(pollingTimerRef.current);
      pollingTimerRef.current = null;
    }
    setIsRequesting(false);
  }, []);

  const run = useCallback(
    async (...params: TParams) => {
      // 取消之前的请求或轮询
      cancel();

      setIsRequesting(true);

      const fetchData = async () => {
        try {
          const result = await serviceRef.current(...params);
          setData(result);

          if (pollingInterval) {
            pollingTimerRef.current = setTimeout(fetchData, pollingInterval);
          } else {
            setIsRequesting(false);
          }
        } catch (error) {
          console.error("Request error:", error);
          setIsRequesting(false);
        }
      };

      fetchData();
    },
    [pollingInterval, cancel]
  );

  useEffect(() => {
    // 组件卸载时取消请求或轮询
    return () => {
      cancel();
    };
  }, [cancel]);

  return {
    data,
    isRequesting,
    run,
    cancel,
  };
}

export default useRequest;
