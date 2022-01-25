
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

const components = {
  Nav,
  pre: SyntaxHighlighter,
  MotionButton
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
      <div style={{ position: "relative", borderRadius: 8, overflow: 'hidden', width: "100%", height:'max(260px, 14vw)' }}>
        <Image

          src={frontMatter.thumbnail}
          alt={frontMatter.title}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <MDXRemote  {...mdxSource} components={components} />
      <ButtonBack><RiArrowLeftLine /><span>back to all posts</span> </ButtonBack>

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

