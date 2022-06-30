import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import RSS from "rss";

export async function getAllPosts() {
    let files = fs.readdirSync(path.join("data/posts"));
    files = files.map(function (fileName) {
        return {
            name: fileName,
            time: fs.statSync('data/posts/' + fileName).ctime.getTime()
        };
    })
    files.sort(function (a, b) {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
    });
    files = files.map(item => item.name)
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
    return posts
}


export async function generateRssFeed() {
  const siteURL = "https://felixtr.is-a.dev";
  const allPosts = getAllPosts();

  const feed = new RSS({
    title: "FelixTr's blog",
    description: "",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, FelixTr`,
  });

  allPosts.map((post) => {
    feed.item({
      title: post.frontMatter?.title,
      url: `${siteURL}/${post.slug}`,
      date: post.frontMatter?.date,
      description: post.frontMatter?.description,
    });
  });


  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}