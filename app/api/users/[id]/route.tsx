import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

// For Getting A User
export async function GET(request: NextRequest, { params: { id } }: Props) {
  // Fetch data from db; we are still testing since we do not a have a databse yet.

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user)
    // If not found, return error 404
    return NextResponse.json({ error: "User not found!" }, { status: 404 });

  // Else return data
  return NextResponse.json(user);
}

// For Updating A User
export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body); // Using Validation
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id }, // specify the user that we wnat to update
    //
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

// For Deleting A user
export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // Fetch User from db
  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  // if not found, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Delete the user from db
  const deletedUser = await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json(deletedUser);
}
