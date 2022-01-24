
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Nav from '../../components/Nav';
import SyntaxHighlighter from '../../components/SyntaxHiglighter';
import Page from '../../layouts/Page';
import MotionButton from '../../components/demo/MotionButton';


const components = {
    Nav,
    pre:SyntaxHighlighter,
    MotionButton
}

export default function Post({ frontMatter, slug, mdxSource }){
  const meta = {
    title: frontMatter.title,
    description: frontMatter.description,
    ...frontMatter
  }

   return (
      <Page meta={meta}>
        <p style={{marginBottom:"5px", color:'#7f8c98'}}>
          {frontMatter.date}
        </p>
        <h1 style={{fontSize:"2em", marginTop:'0px'}}>
          {frontMatter.title}
        </h1>
        <MDXRemote  {...mdxSource} components={components} />
      </Page>
  );
};


export async function getStaticPaths() {
    // Read the files inside the pages/posts dir
    const files = fs.readdirSync(path.join("posts"));


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
      path.join("posts", slug + ".mdx"),
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

