import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const protectedRoutes = ['/dashboard', '/account', '/orders'];

export async function middleware(req: NextRequest) {
  
  const pathname = req.nextUrl.pathname;
  if (!protectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

 
  const token = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');

  if (!token) {
    
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/account/:path*', '/orders/:path*'],
};
