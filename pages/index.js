import Page from '../layouts/Page';
import PostItem from '../components/PostItem';
import { styled } from "stiches.config";
import readingTime from "reading-time";
import Link from "next/link";

import { motion } from "framer-motion";
import { RiArrowDownL, RiArrowDownLine, RiArrowRightFill, RiArrowRightLine, RiArrowRightUpLine, RiGithubLine, RiMailLine, RiRssLine, RiTwitterLine, } from "react-icons/ri";
import {  getAllPosts, getAllSketches } from "lib";
import { ArrowRightIcon, ArrowTopRightIcon, Cross1Icon, Cross2Icon, GridIcon } from '@radix-ui/react-icons';
import { Button } from 'components/Button';
import { useMedia } from 'react-use';
import { useState } from 'react';
import SketchItem from 'components/SketchItem';

import { Suspense } from 'react'
import { MDXRemote } from 'next-mdx-remote';
import { components } from 'components/sketchs-components';

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

const LinkButton = styled('div', {
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  color: '$mauve9',
  marginLeft: -10,
  padding: '5px 10px',
  borderRadius: 8,
  fontWeight: 400,
  marginBottom: 0,
  transition: "0.44s ease all",
  fontSize: "$small",
  cursor: "pointer",
  '&:hover': {
    color: "$mauve10",
    textDecoration: "underline",
    transition: "0.44s ease all",
    textDecorationColor: "$gray8",
    // background:"$mauve4",
  }
})

const Text = styled('p', {
  fontSize: "$small",
  fontWeight: 300,
  color: '$gray12',
  userSelect: "none",

})

const Box = styled('div')


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

const Row = styled('div', {
  display: "flex",
  alignItems: "center"
})

export default function Home({ posts, sketches }) {
  // const isMobile = useMedia('(max-width: 480px)')
  const [isGridDisplay, setGridDisplay] = useState(false);

  return (
    <div style={{ display: "flex", boxSizing: "border-box", justifyContent: "center", minWidth: "100vw", minHeight: "90vh" }}>
      <motion.div style={{ flex: 1, }}>
        <Page meta={{
          title: 'felixtr',
          description: "Felix's personal space. He wrote his thoughts, experiences & documented his work 🪐.",
          image: 'images/avatar.png'
        }}>
          <motion.div animate={{ opacity: [0, 1] }} >
            <Text>
              UI/UX enthusiast, currently building experiences on the web. For the past years I built and developed mobile, website, dashboard with React, React Native, Nextjs.
              <br />
              <br />{"Now I'm looking on"} <Link href='https://www.solidjs.com'><a target={'_blank'}>
                <Underline>SolidJs</Underline></a></Link>, {"it's a wonderful new reactive library"}. Occasionally I study and read about <Link href='https://w3c.github.io/aria/'><a target='_blank'><Underline>WAI-ARIA</Underline></a></Link> practices to build such accessible high quality  UI library.
            </Text>
          </motion.div>

          <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.3 }}>

            <Title>Socials</Title>
            <div style={{ display: "inline-flex", gap: 5 }}>
              <Link href="mailto:felixtran.dev@gmail.com">
                <a target={'_blank'} >
                  <Text css={{ cursor: "pointer", display: 'inline', }}><RiMailLine size={18} /></Text>
                </a>
              </Link>
              <Link href='https://twitter.com/felixtrandev'>
                <a target={'_blank'}>
                  <Text css={{ cursor: "pointer", display: 'inline', }}><RiTwitterLine size={18} /></Text>
                </a>
              </Link>

              <Link href='https://github.com/tphuc'>
                <a target={'_blank'}>
                  <Text css={{ cursor: "pointer", display: 'inline' }}><RiGithubLine size={18} /></Text>
                </a>
              </Link>

              <Link href='https://felixtr.is-a.dev/feed.xml'>
                <a target={'_blank'}>
                  <Text css={{ cursor: "pointer", display: 'inline', }}><RiRssLine size={18} /></Text>
                </a>
              </Link>
            </div>
          </motion.div>

          <br />





          <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.2 }}>
            <Title>My projects</Title>
          </motion.div>

          <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.3 }}>
            <Box css={{ display: "grid", gap:20, gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
              <Box>
                <Link passHref href={'https://primepattern.xyz'}>
                  <A>Prime Pattern NFTs <RiArrowRightUpLine size={16} /></A>
                </Link>
                <Description>my nft artwork collection</Description>
              </Box>
              <Box>
                <Link passHref href={'https://minnuochoa.com'}>
                  <A>Min nuoc hoa<RiArrowRightUpLine size={16} /></A>
                </Link>
                <Description>Simple storefront for selling perfumes & accessories</Description>
              </Box>
            </Box>
          </motion.div>


          <br />
          <br />


          <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.5 }}>
            <Row css={{ justifyContent: "space-between" }}>
              <Link passHref href={'/posts'}>
                <LinkButton>Featured posts <ArrowRightIcon /> </LinkButton>
              </Link>

              {/* <Button onClick={() => setGridDisplay(!isGridDisplay)}>
                <GridIcon />
              </Button> */}

            </Row>

            <div style={{}}>
              {posts.slice(-1)?.map((item, id) => <PostItem key={id} slug={item.slug} readTime={item.readTime} frontMatter={item?.frontMatter} />)}
            </div>

          </motion.div>
          <br />
          <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.5 }}>
            <Row css={{ justifyContent: "space-between" }}>
              <Link passHref href={'/posts'}>
                <LinkButton>Sketches <ArrowRightIcon/></LinkButton>
              </Link>

              <Button css={{
                display: "none",
                '@bp3': {
                  display: 'flex'
                },

              }} style={{ gap: 5 }} onClick={() => setGridDisplay(!isGridDisplay)}>
                <span style={{ fontSize: "small", fontWeight: 300 }}> browse sketches </span> <GridIcon />
              </Button>

            </Row>

            <div style={{}}>
              {sketches?.map((item, id) => <SketchItem key={id} slug={item.slug} readTime={item.readTime} frontMatter={item?.frontMatter} />)}
            </div>

          </motion.div>
          {/* <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1 }}>
        <Title>Contact</Title>
      </motion.div> */}


        </Page>
      </motion.div>

      <motion.div
        layout
        initial="hidden"
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 200
        }}
        animate={isGridDisplay ? 'show' : 'hidden'}
        variants={{
          hidden: {
            opacity: 0,
            width: 0
          },
          show: {
            opacity: 1,
            width: '40vw',
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.6
            }
          }
        }} style={{ overflow: "hidden" }} >
        <Box css={{ padding: 20, background: "$mauve3", height: '100vh', borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button onClick={() => setGridDisplay(false)} style={{ marginLeft: -10 }}><Cross1Icon width={20} height={20} /></Button>
            <Link href='/sketches'><LinkButton>all sketches <RiArrowRightLine /></LinkButton></Link>
          </Box>
          <br />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", columnGap: 10, rowGap: 10 }}>
            {sketches?.map((item, id) => {
              return <motion.div style={{ padding: 0, margin: 0, position: "relative", }} initial={{ opacity: 0 }} key={id} variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
              }}>

                <div style={{ position: "relative", width: '100%', height: '100%', minHeight: 180 }}>
                  <Box css={{
                    // pointerEvents:"none",
                    background: "$mauve5",
                    cursor: "pointer",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: 14,
                    border: '1px solid hsla(264, 100%, 100%, 0.06)',
                    transition: "all 0.8s ease",
                    transform: "translate(0px, 0px)",
                    '& > .blur': {
                      pointerEvents: "none",
                      opacity: 0.5,
                      '--positionX': 1,
                      '--positionY': 8,
                      '-webkit-transition': 'all 0.8s ease-in-out',
                      '-moz-transition': 'all 0.8s ease-in-out',
                      '-o-transition': 'all 0.8s ease-in-out',
                      transition: "all 0.8s ease-in-out",
                      backgroundImage: "radial-gradient( 800px circle at calc(var(--positionX) * 40px) calc(var(--positionY) * 6px),  rgba(255, 255, 255, 0.06), transparent 40% )",
                      // transform: 'translate3d(calc((var(--positionX) * 66px) - 50%), calc((var(--positionY) * 66px) - 50%), 0)'
                    },
                    // ------------------------
                    '&:has(.cell:nth-child(10n + 1):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 0,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 1):nth-child(-n + 10):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 0,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 2):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 1,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 11):nth-child(-n + 20):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 1,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 3):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 2,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 21):nth-child(-n + 30):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 2,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 4):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 3,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 31):nth-child(-n + 40):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 3,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 5):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 4,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 41):nth-child(-n + 50):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 4,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 6):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 5,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 51):nth-child(-n + 60):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 5,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)
                    },

                    '&:has(.cell:nth-child(10n + 7):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 6,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 61):nth-child(-n + 70):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 6,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 8):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 7,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 71):nth-child(-n + 80):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 7,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 9):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 8,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 81):nth-child(-n + 90):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 8,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(10n + 10):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionX': 9,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },

                    '&:has(.cell:nth-child(n + 91):nth-child(-n + 100):hover) > .blur': {
                      opacity: 1,
                      transition: "all 0.8s ease",
                      '--positionY': 9,
                      // transform: 'translate3d(calc((var(--positionX) * 20px) - 45%), calc((var(--positionY) * 20px) - 45%), 0)'
                    },
                  }}>
    
                    <Box style={{ position: 'relative', background: item?.frontMatter?.theme == 'dark' ? '#121214' : blackA.blackA1 }}>
                      <Box css={{
                        borderRadius: 14,
                        overflow: "hidden",
                        width: '100%', minHeight: 300, display: "flex",
                        justifyContent: "center",
                        padding: 20,
                        backgroundImage: `linear-gradient(to right, ${item?.frontMatter?.theme == 'dark' ? 'rgba(39, 39, 42, 0.25)' : blackA.blackA2} 1px, transparent 1px), linear-gradient(${item?.frontMatter?.theme == 'dark' ? 'rgba(39, 39, 42, 0.25)' : blackA.blackA2} 1px, transparent 1px)`,
                        'background-origin': 'border-box, border-box',
                        'background-position-x': '0px, 0px',
                        ' background-position-y': '0px, 0px',
                        'background-size': '32px 32px, 32px 32px',
                        alignItems: "center"
                      }}>
                        <MDXRemote {...item.mdxSource} components={components} />
                        {/* <span>{item.frontMatter?.title}</span>
                      <Description>{item.frontMatter?.description}</Description> */}
                        <Box css={{
                          position: "absolute", padding: '2px 5px', bottom: 5, left: 5,
                        }}>
                          <Link href={item?.slug}><LinkButton style={{ margin: 0 }}>{item?.frontMatter?.title} <ArrowTopRightIcon /></LinkButton></Link>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </div>
              </motion.div>
            })}
          </div>
        </Box>
      </motion.div>


    </div >
  )
}


export async function getStaticProps() {
  // Read the pages/posts dir
  // generateRssFeed();
  let posts = await getAllPosts()
  let sketches = await getAllSketches()

  // Return all the posts frontMatter and slug as props
  return {
    props: {
      posts,
      sketches
    },
  };
}



