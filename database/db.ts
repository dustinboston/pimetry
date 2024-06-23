import 'server-only';

// TODO: https://authjs.dev/getting-started/adapters/drizzle
// https://orm.drizzle.team/docs/get-started-postgresql#postgresjs

import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
} from "drizzle-orm/pg-core"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import type { AdapterAccountType } from "next-auth/adapters"
 
const connectionString = process.env.POSTGRES_URL; 
const pool = postgres(connectionString, { max: 1 })

export const db = drizzle(pool)
 
