import { FC, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

// 导入需要的语言支持
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { CodeBlockWrapper } from "./code-block-wrapper";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);

// 定义 Props 类型
const CodeBlock: FC<{ className?: string; children: string }> = ({
  children,
  className,
}) => {
  // const language = className ? className.replace(/language-/, "") : "";
  const [lang, collapse] = (className || "")
    .replace(/language-/, "")
    .split(":");
  const language = lang || "";
  const shouldCollapse = collapse !== "no-collapse";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const code = (
    <>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
        }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {children}
      </SyntaxHighlighter>
      <CopyToClipboard text={children} onCopy={handleCopy}>
        <button className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs transition duration-200">
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </>
  );

  return (
    <div className="relative my-4 rounded-lg overflow-hidden">
      {/* TODO: 行数比较少的时候不折叠? */}
      {shouldCollapse ? <CodeBlockWrapper>{code}</CodeBlockWrapper> : code}
    </div>
  );
};

export default CodeBlock;
