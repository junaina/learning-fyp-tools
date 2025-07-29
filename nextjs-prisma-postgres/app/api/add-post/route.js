import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  console.log({ res });
  const { title, content } = res;
  //storing in the database
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: true,
      author: {
        create: {
          name: "nur",
        },
      },
    },
  });

  return NextResponse.json({ data: res });
}
