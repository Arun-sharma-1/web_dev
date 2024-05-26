import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { COOKIE_NAME } from "@/constants/index";
export async function POST(request: Request) {
  const body = await request.json();
  console.log("body is ", body);

  const { username, password } = body;

  //validate

  //db call
  if (username != "admin" || password != "admin") {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
    });
  }
  //if message from db is authorized , then move ahead

  const secret = process.env.JWT_SECRET || "";

  //token generate kro
  const token = sign(
    {
      username,
    },
    secret,
    {
      expiresIn: "1hr",
    }
  );

  //generate cookie
  const serializeData = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 10 * 30,
    path: "/",
  });

  const response = NextResponse.json({
    message: "Authenticated",
    status: 200,
  });
  response.headers.set("Set-Cookie", serializeData);

  return response;
}
