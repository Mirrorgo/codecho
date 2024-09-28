import { FC, PropsWithChildren } from "react";
// import CodeBlock from "./mg/code-block";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./mg/code-block";

// 创建一个自定义 code 组件
const CodeComponent: FC<any> = (props) => {
  // 判断是否有 className 属性，如果有则是块级代码，否则是行内代码
  if (props.className) {
    return <CodeBlock {...props} />;
  }

  // 行内代码保持原样显示
  return <code {...props} />;
};

// const components: MDXComponents = {
// 这个类型为什么总是解决不了?
const components: any = {
  //   h1: "h2",
  code: CodeComponent,
  //   code(properties) {
  //     //   return <pre {...properties} />;
  //     return <CodeBlock {...properties} />;
  //   },
};
export const MDXWrapper: FC<PropsWithChildren> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
