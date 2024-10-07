import { FC, PropsWithChildren, useEffect, useRef } from "react";
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

// Common component to wrap headings with an anchor
const HeadingWithAnchor: FC<PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => {
  return (
    <a href={`#${id}`} id={id}>
      {children}
    </a>
  );
};

// Heading components with vertical spacing
function TypographyH1(props: PropsWithChildren<{ id: string }>) {
  return (
    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl my-6">
      <HeadingWithAnchor id={props.id}>{props.children}</HeadingWithAnchor>
    </h1>
  );
}

function TypographyH2(props: PropsWithChildren<{ id: string }>) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight my-4 first:mt-0">
      <HeadingWithAnchor id={props.id}>{props.children}</HeadingWithAnchor>
    </h2>
  );
}

function TypographyH3(props: PropsWithChildren<{ id: string }>) {
  return (
    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight my-3">
      <HeadingWithAnchor id={props.id}>{props.children}</HeadingWithAnchor>
    </h3>
  );
}

function TypographyH4(props: PropsWithChildren<{ id: string }>) {
  return (
    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-2">
      <HeadingWithAnchor id={props.id}>{props.children}</HeadingWithAnchor>
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
  // A counter to keep track of the heading order
  const headingCount = useRef(0);

  useEffect(() => {
    headingCount.current = 0; // Reset the count when the component mounts
  }, []);

  // Function to generate an id based on the heading count
  const generateHeadingId = () => {
    headingCount.current += 1;
    return `item-${headingCount.current}`;
  };

  // Components mapping for MDX
  const components: any = {
    h1: (props: PropsWithChildren) => (
      <TypographyH1 {...props} id={generateHeadingId()} />
    ),
    h2: (props: PropsWithChildren) => (
      <TypographyH2 {...props} id={generateHeadingId()} />
    ),
    h3: (props: PropsWithChildren) => (
      <TypographyH3 {...props} id={generateHeadingId()} />
    ),
    h4: (props: PropsWithChildren) => (
      <TypographyH4 {...props} id={generateHeadingId()} />
    ),
    blockquote: TypographyBlockquote,
    p: TypographyP,
    code: CodeComponent,
    ul: TypographyList,
    a: TypographyA,
  };

  return <MDXProvider components={components}>{children}</MDXProvider>;
};
