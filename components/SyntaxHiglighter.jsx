import React from 'react';
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";


const LanguageHeadingContainer = styled.div`
    position: relative;
    background: #2c2c2b;
    color: #fff;
    padding: 5px 10px;
    font-size: 12px;
    margin: 0px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`

const CodeSnippetContainer = styled.div`
  position: relative;
  margin-top: 48px;
  margin-bottom: 60px;
  transition: all 200ms ease-in 0s;
`;

const PreBlock = styled.pre`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  outline-offset: 2px;
  overflow-x: auto;
  margin: 0px;
  padding: 24px;
  min-height: 50px;
  border-radius:10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  max-width: 100vw;
  box-shadow: rgba(49, 57, 65, 0.2) 0px  8px 14px;
`;

const myCustomTheme = {
    plain: {
        color: "rgb(234,234,235)",
        backgroundColor: "rgba(54,54,57)",
        fontFamily: "var(--font-family-syntax)",
        fontSize: "16px",
    },
    styles: [
        {
            types: ["changed"],
            style: {
                color: "rgb(162, 191, 252)",
                fontStyle: "italic",
            },
        },
        {
            types: ["deleted"],
            style: {
                color: "rgba(239, 83, 80, 0.56)",
                fontStyle: "italic",
            },
        },
        {
            types: ["inserted", "attr-name"],
            style: {
                color: "rgb(173, 219, 103)",
                fontStyle: "italic",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "#7f8c98",
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "url"],
            style: {
                color: "#fe8170",
            },
        },
        {
            types: ["variable"],
            style: {
                color: "rgb(214, 222, 235)",
            },
        },
        {
            types: ["number"],
            style: {
                color: "rgb(247, 140, 108)",
            },
        },
        {
            types: ["builtin", "char", "constant", "function"],
            style: {
                color: "#6bdfff",
            },
        },
        {
            // This was manually added after the auto-generation
            // so that punctuations are not italicised
            types: ["punctuation"],
            style: {
                color: "rgb(199, 146, 234)",
            },
        },
        {
            types: ["selector", "doctype"],
            style: {
                color: "rgb(199, 146, 234)",
                fontStyle: "italic",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#d9baff",
            },
        },
        {
            types: ["tag", "operator", "keyword"],
            style: {
                color: "#fe7ab2",
            },
        },
        {
            types: ["boolean"],
            style: {
                color: "rgb(255, 88, 116)",
            },
        },
        {
            types: ["property"],
            style: {
                color: "#b181ec",
            },
        },
        {
            types: ["namespace"],
            style: {
                color: "#d9baff",
            },
        },
    ],
};



const SyntaxHighlighter = ({ children }) => {
    const code = children.props.children;
    const language = children.props.className?.replace("language-", "").trim();
    const file = children.props?.file?.trim()

    return (
        <Highlight {...defaultProps} code={code} language={language} theme={myCustomTheme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <CodeSnippetContainer>
                    {file || language && (
                        <LanguageHeadingContainer onClick={() => console.log(code)}>{file ? file : language}</LanguageHeadingContainer>
                    )}
                    <PreBlock className={className} style={{ ...style }}>
                        {tokens.slice(0, -1).map((line, i) => (
                            <div key={i}  {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </PreBlock>
                </CodeSnippetContainer>
            )}
        </Highlight>
    );
};


export default SyntaxHighlighter;