import { FC, PropsWithChildren } from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./mg/code-block";

// Custom code component
const CodeComponent: FC<any> = (props) => {
  // Check if className is present to determine if it's a block or inline code
  if (props.className) {
    return <CodeBlock {...props} />;
  }
  // Return inline code
  return <code {...props} />;
};

// Heading components with vertical spacing
function TypographyH1(props: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl my-6">
      {props.children}
    </h1>
  );
}

function TypographyH2(props: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight my-4 first:mt-0">
      {props.children}
    </h2>
  );
}

function TypographyH3(props: PropsWithChildren) {
  return (
    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight my-3">
      {props.children}
    </h3>
  );
}

function TypographyH4(props: PropsWithChildren) {
  return (
    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-2">
      {props.children}
    </h4>
  );
}

function TypographyBlockquote(props: PropsWithChildren) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  );
}

function TypographyP(props: PropsWithChildren) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
  );
}
function TypographyList(props: PropsWithChildren) {
  return <ul className="mt-1 ml-6 list-disc [&>li]:mt-1">{props.children}</ul>;
}

function TypographyA(props: PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={props.href}
      className={`text-blue-600 hover:underline`} // Customize styles here
    >
      {props.children}
    </a>
  );
}

// MDX Wrapper component
export const MDXWrapper: FC<PropsWithChildren> = ({ children }) => {
  // heading的方式不知道怎么弄这个计数器比较好？或许可以弄一个中间件在构建的时候读取所有md内容，然后额外补上id
  // item+index的方式来源于掘金和思否。 因为用一些特殊工具生成id的不可读。而用标题直接生成可能标题内容相同，所以用index
  // Function to generate an id based on the heading count
  // const generateHeadingId = () => {
  //   headingCount.current += 1;
  //   return `item-${headingCount.current}`;
  // };

  // Components mapping for MDX
  const components: any = {
    h1: TypographyH1,
    h2: TypographyH2,
    h3: TypographyH3,
    h4: TypographyH4,
    blockquote: TypographyBlockquote,
    p: TypographyP,
    code: CodeComponent,
    ul: TypographyList,
    a: TypographyA,
  };

  return <MDXProvider components={components}>{children}</MDXProvider>;
};
