import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const path=request.nextUrl.pathname

  const isPublicPath=path==='/login' || path==='/Signup'
  const token=request.cookies.get('token')?.value || ''
  if(isPublicPath && token)
  {
    return NextResponse.redirect(new URL('/',request.nextUrl))
  }
  if (!isPublicPath && !token)
  {
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }
}
 
// routes we want to protect
export const config = {
  matcher:[
    '/',
    '/login',
    '/profile',
    '/profile/:path*',
    '/logout',
    '/Signup'
  ]
}