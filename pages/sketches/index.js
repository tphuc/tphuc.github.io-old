import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostItem from '../../components/PostItem';
import { styled } from "stiches.config";
import readingTime from "reading-time";
import Link from "next/link";

import { motion } from "framer-motion";
import { RiArrowDownL, RiArrowDownLine, RiArrowGoBackLine, RiArrowLeftLine, RiArrowRightUpLine, } from "react-icons/ri";
import Head from "next/head";
import Page from "layouts/Page";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Title = styled('p', {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "$small",
    color: '$mauve9',
    fontWeight: 400,
    transition: "0.44s ease all",

})



const Text = styled('p', {
    fontSize: "$small",
    fontWeight: 300,
    color: '$gray12',
    cursor: 'default',
    marginTop: '.5em'
})

const SubText = styled('p', {
    userSelect: "none",
    fontSize: "$x-small",
    color: '$gray11',
    fontWeight: 300,
    marginBottom: 0,
    transition: "0.46s ease all",
})



const PostItemContainer = styled('div', {
    borderTop: "1px solid $mauve4"
})


const HR = styled('hr', {
    borderWidth: 0,
    borderTopWidth: 1,
    borderTop: '1px solid $mauve5'
})

export default function Posts({ sketches }) {
    const router = useRouter()
    return (
        <Page meta={{
            title: 'felixtr | sketch',
            description: "My personal website 🪐.",
            image: 'images/avatar.png'
        }}>
            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
                <Title onClick={() => router.back()}><ArrowLeftIcon/> Sketches</Title>
            </motion.div>
            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.5 }}>
                <div>
                    {sketches?.map((item, id) => <PostItemContainer key={id}>
                        <SubText>
                            {item?.frontMatter?.date}
                        </SubText>
                        <Link href={item?.slug}>
                            <Text css={{ cursor: "pointer" }}>{item?.frontMatter?.title}</Text>
                        </Link>
                    </PostItemContainer>
                    )}
                    <HR />
                </div>
            </motion.div>
        </Page>
    )
}


export async function getStaticProps() {
    // Read the pages/posts dir
    let files = fs.readdirSync(path.join("data/sketches"));

    // Get only the mdx files
    files = files.filter((file) => file.split(".")[1] === "mdx")
        .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) return -1;
            if (new Date(a.date) < new Date(b.date)) return 1;
            return 0;
        });

    // Read each file and extract front matter
    const sketches = await Promise.all(
        files.map((file) => {
            const mdWithData = fs.readFileSync(
                path.join("data/sketches", file),
                "utf-8"
            );

            const { data: frontMatter, content } = matter(mdWithData);
            let readTime = Math.floor(readingTime(content).minutes)

            return {
                frontMatter,
                slug: 'sketches/' + file.split(".")[0],
                readTime
            };
        })
    );

    // Return all the posts frontMatter and slug as props
    return {
        props: {
            sketches,
        },
    };
}