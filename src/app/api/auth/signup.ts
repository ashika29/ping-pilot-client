import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const url = process.env.NEXT_PUBLIC_API_URL + "/auth/register";
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Registration failed" },
      { status: response.status }
    );
  }

  const data = await response.json();

  return NextResponse.json(data);
}
