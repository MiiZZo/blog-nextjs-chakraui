import React, { useRef, useEffect } from "react";
import MD, { MarkdownOptions } from "markdown-to-jsx";
import hljs from "highlight.js";
import { Heading, Text, List, ListItem, PseudoBox } from "@chakra-ui/core";
import { Blockquote } from "@ui";

interface MarkdownProps {
  children: string;
}

export function Markdown({ children }: MarkdownProps) {
  const rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    rootRef.current
      .querySelectorAll("pre code")
      .forEach((block: HTMLElement) => {
        hljs.highlightBlock(block);
      });
  }, [children]);

  return (
    <div ref={rootRef}>
      <MD options={mdOptions}>{children}</MD>
    </div>
  );
}

const mdOptions: MarkdownOptions = {
  overrides: {
    h1: {
      component: Heading,
      props: { fontSize: "2xl", mb: 5 }
    },
    h2: {
      component: Heading,
      props: { fontSize: "xl", mb: 5 }
    },
    h3: {
      component: Heading,
      props: { fontSize: "lg", mb: 5 }
    },
    h4: {
      component: Heading,
      props: { fontSize: "md", mb: 5 }
    },
    h5: {
      component: Heading,
      props: { fontSize: "sm", mb: 5 }
    },
    h6: {
      component: Heading,
      props: { fontSize: "xs", mb: 5 }
    },
    p: {
      component: Text,
      props: { mb: 5 }
    },
    li: {
      component: ListItem,
      props: { mb: 5 }
    },
    ul: {
      component: List,
      props: { styleType: "disc" }
    },
    ol: {
      component: List,
      props: { styleType: "decimal" }
    },
    code: {
      component: PseudoBox,
      props: { as: "code", mb: 5 }
    },
    blockquote: {
      component: Blockquote
    }
  }
};
