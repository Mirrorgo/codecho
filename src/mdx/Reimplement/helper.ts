/**
 * 创建一个防抖函数
 * @template T 原函数的类型
 * @param {T} func 需要防抖的函数
 * @param {number} delay 防抖延迟时间（毫秒）
 * @returns {(...args: Parameters<T>) => void} 防抖处理后的函数
 */
// TODO 之后显示的时候支持显示js和ts双版本
function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    // 清除之前的定时器
    clearTimeout(timeoutId);

    // 设置新的定时器
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 创建一个节流函数
 * @template T 原函数的类型
 * @param {T} func 需要节流的函数
 * @param {number} limit 节流时间间隔（毫秒）
 * @returns {(...args: Parameters<T>) => void} 节流处理后的函数
 */

function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export { throttle, debounce };
