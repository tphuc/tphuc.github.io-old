import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import rangeParser from 'parse-numeric-range';
import { styled } from 'stiches.config';
import { useTheme } from 'next-themes';
import { gray, mauve, slate } from '@radix-ui/colors';


const LanguageHeadingContainer = styled(`div`, {
    // display:"inline-block",
    position: 'relative',
    background: '$grayA1',

    color: '$gray12',
    padding: '5px 10px',
    'font-size': 'small',
    borderBottom:'1px solid $gray4',
    // margin: 2,
    // borderTopLeftRadius:8,
    // borderTopRightRadius:8,
    // borderRadius:8,

})



const CodeSnippetContainer = styled(`div`, {
    position: 'relative',
    marginTop: 1,
    marginBottom: 3,
    transition: 'all 200ms ease-in 0s',
    border:'1px solid $gray4',
    // boxShadow: '0px  2px 0px rgba(0,0,0,0.1)',
    'border-top-left-radius': 12,
    'border-top-right-radius': 12,
    'border-bottom-left-radius': 12,
    'border-bottom-right-radius': 12,
    overflow:'hidden',
})

const PreBlock = styled(`pre`, {
    'font-family': 'Arial, Helvetica, sans-serif',
    'font-size': 'small',
    'outline-offset': 2,
    'overflow-x': 'auto',
    margin: 0,
    paddingTop: 20,
    paddingBottom: 20,
    minHeight: 50,
    // borderRadius: 18,
    // 'border-top-left-radius': 12,
    // 'border-top-right-radius': 12,
    'border-bottom-left-radius': 12,
    'border-bottom-right-radius': 12,
    maxWidth: '100vw',
    
})


const Line = styled(`div`, {
    paddingLeft: 20,
    paddingBottom: 2,
    lineHeight:1,
    fontSize: 'small',
    '&.highlight-line': {
        width:"100%",
        backgroundColor: '$grayA2',
    }
})


const Span = styled('span', {
    fontSize: "smaller"
})






const calculateLinesToHighlight = (meta) => {
    const RE = /{([\d,-]+)}/;
    if (RE.test(meta)) {
        const strlineNumbers = RE.exec(meta)[1];
        const lineNumbers = rangeParser(strlineNumbers);
        return (i) => lineNumbers.includes(i + 1);
    } else {
        return () => false;
    }
};





const SyntaxHighlighter = ({ children }) => {
    const code = children.props.children;
    const language = children.props.className?.replace("language-", "").trim();
    const file = children.props?.file?.trim()
    const metastring = children.props.metastring || "";
    const shouldHighlightLine = calculateLinesToHighlight(metastring);
    const {theme} = useTheme();

    const myCustomTheme = React.useMemo(() => ({
        plain: {
            color: theme === 'dark' ? mauve.mauve2 : slate.slate12,
            backgroundColor: theme === 'dark' ? gray.gray12 : mauve.mauve1,
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
                    color: theme === 'dark'?"rgb(173, 219, 103)": "#B73999",
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
                    color: theme === 'dark' ? "#fe8170":"#853e64",
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
                    color:  theme === 'dark' ? "#6bdfff":"#587EA8",
                },
            },
            {
                // This was manually added after the auto-generation
                // so that punctuations are not italicised
                types: ["punctuation"],
                style: {
                    color:  theme === 'dark' ? "rgb(199, 146, 234)": "#587EA8",
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
                    color:   theme === 'dark' ? "#d9baff": "#587EA8",
                },
            },
            {
                types: ["tag", "operator", "keyword"],
                style: {
                    color: theme === 'dark' ? "#fe7ab2":"#323E7D",
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
                    color:  theme === 'dark' ? "#d9baff":"#587EA8",
                },
            },
        ],
    }), [theme]);

    return (
        <Highlight {...defaultProps} code={code} language={language} theme={myCustomTheme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <CodeSnippetContainer>
                    {(file || language) && (
                        <LanguageHeadingContainer onClick={() => console.log(code)}>{file ? file : language}</LanguageHeadingContainer>
                    )}
                    <PreBlock className={className} style={{ ...style }}>
                        
                        {tokens.slice(0, -1).map((line, i) => {
                            const lineProps = getLineProps({ line, key: i });
                            if (shouldHighlightLine(i)) {
                                lineProps.className = `${lineProps.className} highlight-line`;
                            }
                            return <Line key={i}  {...lineProps}>
                                {line.map((token, key) => (
                                    <Span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </Line>
                        })}
                    </PreBlock>
                </CodeSnippetContainer>
            )}
        </Highlight>
    );
};


export default SyntaxHighlighter;