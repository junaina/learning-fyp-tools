"use client"; //client component

import styles from "@/app/page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/add-post", {
        method: "POST",
        HEADERS: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      }); // Redirect to the home page after adding the post
      router.refresh();
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  return (
    <main className={styles.main}>
      <Link href={"/"}>View Feed</Link>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            margin: "16px 0",
          }}
        >
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              name="title"
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              name="content"
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div>
            <p>
              <button type="submit">Publish</button>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}
