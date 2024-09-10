import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

function CodeMarkdown({ content }: { content: string }) {
  const text = React.useMemo(() => {
    return String(content)?.replace(/\n$/, "") || "";
  }, [content]);

  return (
    <Markdown
      aria-label="code markdown"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;
          const text = String(children)?.replace(/\n$/, "") || "";
          return (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language="javascript"
              style={docco}
              className="rounded-lg"
              // style={vscDarkPlus}
            >
              {text as string}
            </SyntaxHighlighter>
          );
        },
      }}
    >
      {text}
    </Markdown>
  );
}

export default CodeMarkdown;
