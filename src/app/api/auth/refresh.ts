import { NextResponse } from "next/server";

export async function POST() {
  const url = process.env.NEXT_PUBLIC_API_URL + "/auth/refresh";
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url, {
    method: "POST",
    headers,
    credentials: "include", // Ensure cookies are sent with the request
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
