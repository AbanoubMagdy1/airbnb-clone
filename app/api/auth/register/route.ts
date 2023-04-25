import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaClient";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  const existingUser = await prisma.user.findUnique({
    where: {email}
  })

  if(existingUser) {
    return NextResponse.json({message: 'The email is already taken'}, {status: 409})
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {email, name, hashedPassword}
  });

  return NextResponse.json(user, {status: 201})
}