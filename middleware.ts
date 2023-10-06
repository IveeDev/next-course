// import { NextRequest, NextResponse } from "next/server";
// Note that it is done differently when using next-authentication
// import middleware from "next-auth/middleware";

// export default middleware;

// shoter way
export { default } from "next-auth/middleware";
// This is just showing us the way middleware is done in Next.js
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// this is the list of path we want our middleware to protect.
export const config = {
  //   matcher: ["/users"],
  // We can also pass parameter
  matcher: ["/users/:id*"],
};
