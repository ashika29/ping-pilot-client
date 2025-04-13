import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // TODO: Add logic to send email id & password to the server

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
