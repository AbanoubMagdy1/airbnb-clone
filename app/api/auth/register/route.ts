import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaClient";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {email, name, hashedPassword}
  });

  return NextResponse.json(user)
}