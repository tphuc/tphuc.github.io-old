
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
import styled from 'styled-components';
import { RiArrowLeftFill, RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';


const InlineCode = styled.code`
  color: #224;
  font-size: 16px;
  line-height:24px;
  background: rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  padding: 1px 2px;
  border-radius: 4px;
`

const A = styled.a`
  text-decoration: underline;
`
const components = {
  Nav,
  pre: SyntaxHighlighter,
  MotionButton,
  inlineCode: InlineCode,
  a: A,
}


const ButtonBack = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;
    transition: 0.4s ease all;
    margin-top: 1em;
    margin-bottom: 1em;
    color: #a3a2a2;
    &:hover {
        color: #222222;
        transform: translate(0px, 5px);
    }
`

const Tag = styled.span`
    color: #535354;
    padding: 2px 4px;
    border: 1px solid #rgba(0,0,0,0.2);
    border-radius: 3px;
    margin-right: 3px;
    cursor:default;
    background: rgba(0,0,0,0.1)
`

export default function Post({ frontMatter, slug, mdxSource }) {
  const meta = {
    title: frontMatter.title,
    description: frontMatter.description,
    ...frontMatter
  }

  return (
    <Page meta={meta}>
      <h1 style={{ marginBottom: 10, fontSize: "3em", }}>
        {frontMatter.title}
      </h1>
      <p style={{ marginTop: 0, color: 'rgb(110,110,115)' }}>
        {frontMatter.date}
      </p>
      {frontMatter?.tags?.map((item, id) => <Tag key={id}>#{item}</Tag>)}
      {frontMatter.thumbnail && <div style={{ position: "relative", marginTop:20, borderRadius: 8, overflow: 'hidden', width: "100%", height:'max(260px, 14vw)' }}>
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

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
}

