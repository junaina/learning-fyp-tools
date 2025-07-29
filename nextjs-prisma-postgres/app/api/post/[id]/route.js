import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  //just export unction and not default
  const id = params.id;
  const post = await prisma.post.delete({
    where: { id },
  });
  return NextResponse.json(request);
}
