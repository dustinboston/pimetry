import 'server-only';

import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@/db/schema';

const connectionString = process.env.POSTGRES_URL ?? '';
export const connection = postgres(connectionString, { max: 1 });
export const db = drizzle(connection, { schema });
