// middleware.js
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req:NextRequest) {
    
  // Get the JWT token from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If the user is already logged in and trying to access the login page, redirect them to the homepage or dashboard
  if (token && req.nextUrl.pathname === '/login' || token && req.nextUrl.pathname === '/' ) {
    return NextResponse.redirect(new URL('/dashboard', req.url)); // Redirect to homepage or dashboard if logged in
  }

  // If there is no token (user not authenticated), allow access to the login page
  if (!token && req.nextUrl.pathname === '/login' || !token && req.nextUrl.pathname === '/') {
    return NextResponse.next(); // Allow access to login page
  }

  // If the user is not logged in and trying to access protected routes, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if not logged in
  }

  // Allow the request to continue for other protected routes
  return NextResponse.next();
}

// Specify the protected routes
export const config = {
  matcher: [ '/','/login', '/dashboard/:path*'], // Matches /dashboard, /dashboard/settings, /dashboard/anything
};