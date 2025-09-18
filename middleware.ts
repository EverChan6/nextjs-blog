import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  // runtime: 'nodejs', // 报错：Error: Cannot find the middleware module，原因貌似：Next.js 15.3.2 与 NextAuth v5.0.0-beta.25/v5.0.0-beta.29 在 middleware runtime 上的兼容性问题
};
