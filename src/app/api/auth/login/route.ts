import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const url = process.env.NEXT_PUBLIC_API_URL + "auth/login";
  const headers = {
    "Content-Type": "application/json",
  };
  console.log("Login URL:", url);
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ email, password }),
  });
  console.log(response.headers.get("pilot_token"));
  console.log(response.headers.get("refresh_token"));
  console.log(response.headers.get("set-cookie"));
  if (!response.ok) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data, {
    status: response.status,
    headers: {
      "Set-Cookie": response.headers.get("set-cookie") || "",
    },
  });
}
