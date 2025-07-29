import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";
//need to query the databse to get all posts
//since this is a server componenet - server side rendered, we can fetch data directly

async function getPosts() {
  const posts = prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return posts;
}
async function createPost(postTitle, postContent, authorId) {
  const post = await prisma.post.create({
    data: {
      title: postTitle,
      content: postContent,
      authorId: authorId,
      published: true, //assuming we want to publish the post immediatelys
    },
  });
}
export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.page}>
      <Link href="/add-post">Add Post</Link>
      {/*link to add post page, file based routing so name needs to match the public route folder*/}
      <h1>Feed</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </div>
  );
}
