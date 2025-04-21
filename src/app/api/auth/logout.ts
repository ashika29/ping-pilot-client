import { NextResponse } from "next/server";

export async function POST() {
  const url = process.env.NEXT_PUBLIC_API_URL + "/auth/logout";
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
      { error: "Logout failed" },
      { status: response.status }
    );
  }

  return NextResponse.json({ message: "Logout successful" });
}
