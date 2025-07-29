//button client component that goes in the post server component
"use client";
import { useRouter } from "next/navigation";
export default function DeletePostButton({ postid }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await fetch(`/api/post/${postid}`, {
        method: "DELETE", //defined in /api/post/[id]/route.js
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: postid }),
      });

      router.refresh();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return <button onClick={handleDelete}>Delete Post</button>;
}
