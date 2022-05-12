
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Nav from '../../components/Nav';
import SyntaxHighlighter from '../../components/SyntaxHiglighter';
import Page from '../../layouts/Page';
import MotionButton from '../../components/demo/MotionButton';
import Image from 'next/image';

import { RiArrowLeftFill, RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';
import readingTime from 'reading-time';
import { styled } from 'stiches.config';



const InlineCode = styled(`code`, {
  'fontFamily':"inherit",
  'font-size': 'small',
  lineHeight:1.5,
  background: '$grayA3',
  'border': '1px solid $mauve7',
  'padding': '0px 2px',
  'border-radius': '4px',
  'whiteSpace':"nowrap"
})

const A = styled(`a`, {
  'text-decoration': 'underline',
  fontSize:"small",
  color:"$mauve12"
})


const P = styled('p', {
  fontWeight:300,
  lineHeight:1,
  lineHeight:1.5,
})


const H2 = styled('h2', {
  fontSize:"medium",
  fontWeight:400
})

const Li = styled('li', {
  fontWeight:300
})

const components = {
  Nav,
  pre: SyntaxHighlighter,
  MotionButton,
  inlineCode: InlineCode,
  h2: H2,
  a: A,
  p: P,
  li: Li
}


const ButtonBack = styled(`div`, {
    'display':'flex',
    'flex-direction':'row',
    'align-items':'center',
    'justify-content':'space-between',
    'cursor': 'pointer',
    'transition':'0.4s ease all',
    'margin-top': '1em',
    'margin-bottom': '1em',
    float:"right",
    color:"$mauve11",
    height:30,
    borderRadius:8,
    padding: '0 10px',
    transition:"0.4s ease all",
    background:"$mauve2",
    border:"1px solid $mauve3",
    '&:hover': {
      background:"$mauve3",
        'color': '$text',
        'transform': 'translate(0px, 5px)',
    }
})

const Tag = styled(`span`, {
    color: '#535354',
    padding: '2px 4px',
    border: '1px solid #rgba(0,0,0,0.2)',
    'border-radius': '3px',
    'margin-right': '3px',
    'cursor':'default',
    'background': 'rgba(0,0,0,0.1)'
})


const Text = styled('p', {
  fontWeight:300,
  fontSize:"medium"
})

export default function Post({ frontMatter, slug, mdxSource, readTime }) {
  const meta = {
    title: frontMatter.title,
    description: frontMatter.description,
    ...frontMatter
  }

  return (
    <Page meta={meta}>
      <Text>
        {frontMatter.title}
      </Text>
      <Text css={{ fontSize: 'small', color:"$mauve11" }}>
        {frontMatter.date}
      </Text>
      {/* {frontMatter?.tags?.map((item, id) => <Tag key={id}>#{item}</Tag>)} */}
      {frontMatter.thumbnail && <div style={{ position: "relative", marginTop: 20, borderRadius: 14, overflow: 'hidden', width: "100%", height: 'max(260px, 14vw)' }}>
        <Image

          src={frontMatter.thumbnail}
          alt={frontMatter.title}
          layout='fill'
          objectFit='cover'
        />
      </div>}

      <MDXRemote  {...mdxSource} components={components} />
      <Link passHref href='/'>
        <ButtonBack><RiArrowLeftLine /><span>back to all posts</span> </ButtonBack>
      </Link>

    </Page>
  );
};


export async function getStaticPaths() {
  // Read the files inside the pages/posts dir
  console.log(__dirname)
  const files = fs.readdirSync(path.join("data/posts"));


  // Generate path for each file
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params: { slug } }) {
  // read each file
  const markdown = fs.readFileSync(
    path.join("data/posts", slug + ".mdx"),
    "utf-8"
  );

  // Extract front matter
  const { data: frontMatter, content } = matter(markdown);

  const mdxSource = await serialize(content);

  let readTime = readingTime(content).minutes

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      readTime
    },
  };
}

