import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Page from '../layouts/Page';
import PostItem from '../components/PostItem';
import { styled } from "stiches.config";
import readingTime from "reading-time";
import Link from "next/link";

import { motion } from "framer-motion";

const Title = styled('p', {
  fontSize:"14px",
  color:'$gray11',
  fontWeight:400,
  transition:"0.44s ease all",

})


const Underline = styled('a', {
  textDecoration:"underline",
  textDecorationColor:"$mauve9",
  cursor:"pointer"
})

const StyledTitle = styled('a', {

  fontSize:"small",
  color:'$gray11',
  fontWeight:500,
  marginBottom:0,
  transition:"0.44s ease all",
  cursor:"pointer",
  '&:hover': {
    textDecoration:"underline",
    transition:"0.44s ease all",
    textDecorationColor:"$gray8"
  }
})

const Text = styled('p', {
  fontSize:"small",
  fontWeight:300,
  color: '$gray12',
  userSelect:"none"
})

export default function Home({posts}) {
  return (
    <Page meta={{
      title:'felixtr',
      description: "My personal website 🪐.",
      image: 'images/avatar.png'
    }}>
        <motion.div  animate={{ opacity: [0, 1] }} >
          <Text>
            UI/UX enthusiast, currently building experiences on the web. For the past years I built and developed mobile, website, dashboard with React, React Native, Nextjs.
            <br/>
            <br/>{"Now I'm focused on"} <Link href='https://www.solidjs.com'><Underline>SolidJs</Underline></Link>, {"it's a wonderful new reactive library"}. Occasionally read bout <Link href='https://www.solidjs.com'><Underline>WAI-ARIA</Underline></Link> practices to build such accessible high quality  UI library. 
          </Text>
        </motion.div>

        <br/>
        <br/>
        <motion.div animate={{ opacity: [0, 1] }} transition={{delay:0.3}}>
        <Link href='/'>
          <StyledTitle>All posts</StyledTitle>
        </Link>
        </motion.div>
        <motion.div  animate={{ opacity: [0, 1] }} transition={{delay:0.5}}>
        {posts?.map((item, id) => <PostItem key={id} slug={item.slug} readTime={item.readTime} frontMatter={item?.frontMatter}/>)}
        </motion.div>
      
        <br/>
        <br/>
        <motion.div  animate={{ opacity: [0, 1] }} transition={{delay:0.8}}>
          <Title>Contact</Title>
        </motion.div>
        <motion.div  animate={{ opacity: [0, 1] }} transition={{delay:1}}>
          <Text>{"Let's go for coffee if you're in HCM city. You can reach me online at "}<Link href='/'><Underline>felixtrandev@gmail.com</Underline></Link></Text>
        </motion.div>
    </Page>
  )
}


export async function getStaticProps() {
  // Read the pages/posts dir
  let files = fs.readdirSync(path.join("data/posts"));

  // Get only the mdx files
  files = files.filter((file) => file.split(".")[1] === "mdx");

  // Read each file and extract front matter
  const posts = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(
        path.join("data/posts", file),
        "utf-8"
      );

      const { data: frontMatter, content } = matter(mdWithData);
      let readTime = Math.floor(readingTime(content).minutes)

      return {
        frontMatter,
        slug: 'posts/' + file.split(".")[0],
        readTime
      };
    })
  );

  // Return all the posts frontMatter and slug as props
  return {
    props: {
      posts,
    },
  };
}