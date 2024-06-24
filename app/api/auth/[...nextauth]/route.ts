// https://next-auth.js.org/configuration/initialization#route-handlers-app
// https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template/blob/main/app/api/auth/%5B...nextauth%5D/route.ts

import { handlers } from '@/lib/auth';
export const { GET, POST } = handlers;
