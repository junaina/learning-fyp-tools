import DeletePostButton from "@/app/components/DeletePostButton";
export default function Post({ id, title, content, authorName }) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", margin: "16px 0" }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <strong> Author: {authorName}</strong>
      <br />
      <DeletePostButton postid={id} />
    </div>
  );
}
