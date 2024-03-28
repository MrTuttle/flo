// app/api/users/route.tsx
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

import { Prisma } from "@prisma/client";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const posts = prisma.post.findMany({
    // where: {email: ''} look at documentation, many conditions are possibles here
  });

  return NextResponse.json(posts);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
