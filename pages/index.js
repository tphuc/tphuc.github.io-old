import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Page from '../layouts/Page';
import PostItem from '../components/PostItem';

export default function Home({posts}) {
  console.log(posts)
  return (
    <Page meta={{
      title:'felixtr',
      description: 'programmer kind of, front-end enjoyer'
    }}>
    
        <h2>All posts</h2>
        {posts?.map((item, id) => <PostItem key={id} slug={item.slug} frontMatter={item?.frontMatter}/>)}
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

      const { data: frontMatter } = matter(mdWithData);

      return {
        frontMatter,
        slug: 'posts/' + file.split(".")[0],
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