import Page from '../layouts/Page';
import PostItem from '../components/PostItem';
import { styled } from "stiches.config";
import readingTime from "reading-time";
import Link from "next/link";

import { motion } from "framer-motion";
import { RiArrowDownL, RiArrowDownLine, RiArrowRightUpLine, RiGithubLine, RiTwitterLine, } from "react-icons/ri";
import { generateRssFeed, getAllPosts } from "lib";

const Title = styled('p', {
  fontSize: "$small",
  color: '$mauve9',
  fontWeight: 400,
  transition: "0.44s ease all",

})


const Underline = styled('span', {
  textDecoration: "underline",
  textDecorationColor: "$mauve9",
  cursor: "pointer",
  color: '$gray12',
})

const StyledTitle = styled('a', {
  fontSize: "$small",
  "writing-mode": "vertical-rl",
  "text-orientation": 'mixed',
  color: '$mauve9',
  fontWeight: 400,
  marginBottom: 0,
  transition: "0.44s ease all",
  cursor: "pointer",
  '&:hover': {
    textDecoration: "underline",
    transition: "0.44s ease all",
    textDecorationColor: "$gray8"
  }
})

const Text = styled('p', {
  fontSize: "$small",

  fontWeight: 300,
  color: '$gray12',
  userSelect: "none",

})


const A = styled('a', {
  // margin:0,
  display: "flex",
  alignItems: "center",
  fontSize: '$small',
  color: '$gray12',
  fontWeight: 300,
  transition: "0.46s ease all",

})

const Description = styled('p', {
  margin: 0,
  marginTop: '5px',
  marginBottom: '0px',
  fontSize: "$small",
  color: '$gray11',
  fontWeight: 300,
  transition: "0.46s ease all",
})

export default function Home({ posts }) {
  return (
    <Page meta={{
      title: 'felixtr',
      description: "Felix's personal space. He wrote his thoughts, experiences & documented his work 🪐.",
      image: 'images/avatar.png'
    }}>
      <motion.div animate={{ opacity: [0, 1] }} >
        <Text>
          UI/UX enthusiast, currently building experiences on the web. For the past years I built and developed mobile, website, dashboard with React, React Native, Nextjs.
          <br />
          <br />{"Now I'm focused on"} <Link href='https://www.solidjs.com'><a target={'_blank'}>
            <Underline>SolidJs</Underline></a></Link>, {"it's a wonderful new reactive library"}. Occasionally I study and read about <Link href='https://w3c.github.io/aria/'><a target='_blank'><Underline>WAI-ARIA</Underline></a></Link> practices to build such accessible high quality  UI library.
        </Text>
      </motion.div>

      <br />
      <br />
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.3 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>


          <Title css={{ marginTop: 0 }}>Latest posts</Title>
          <Link href='/posts'>
            <StyledTitle>All posts <RiArrowDownLine rotate={20} /></StyledTitle>
          </Link>
        </div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.5 }}>
        <div style={{ marginTop: -50 }}>
          {posts?.slice(posts?.length - 2)?.map((item, id) => <PostItem key={id} slug={item.slug} readTime={item.readTime} frontMatter={item?.frontMatter} />)}
        </div>
      </motion.div>

      <br />
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.8 }}>
        <Title>My projects</Title>
      </motion.div>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.9 }}>
        <Link passHref href={'https://primepattern.xyz'}>
          <A>Prime Pattern NFTs <RiArrowRightUpLine size={16} /></A>

        </Link>
        <Description>my nft artwork collection</Description>
      </motion.div>

      <br />
      <br />
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1 }}>
        <Title>Contact</Title>
      </motion.div>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.2 }}>
        <Text>{"Let's go for coffee if you're in HCM city. You can reach me online at "}<Link href='/'><Underline>felixtrandev@gmail.com</Underline></Link></Text>
        <br />
        <Title>Socials</Title>
        <Link href='https://twitter.com/felixtrandev'>
          <a target={'_blank'}>
            <Text css={{ cursor: "pointer", display: 'inline', marginRight: '.5em' }}><RiTwitterLine size={18} /></Text>
          </a>
        </Link>
        <Link href='https://github.com/tphuc'>
          <a target={'_blank'}>
            <Text css={{ cursor: "pointer", display: 'inline' }}><RiGithubLine size={18} /></Text>
          </a>
        </Link>
      </motion.div>

    </Page>
  )
}


export async function getStaticProps() {
  // Read the pages/posts dir
  generateRssFeed();
  let posts = await getAllPosts()
  
  // Return all the posts frontMatter and slug as props
  return {
    props: {
      posts,
    },
  };
}