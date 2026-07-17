import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(env.DB, { schema });
}

let promiseSchemaReady: Promise<void> | undefined;

export function ensurePromiseSchema() {
  if (!env.DB) throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  promiseSchemaReady ??= env.DB.prepare(`CREATE TABLE IF NOT EXISTS promises (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    due_text TEXT NOT NULL,
    relevant_person TEXT NOT NULL,
    preparation TEXT NOT NULL,
    confidence TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'due',
    approval_state TEXT NOT NULL DEFAULT 'saved',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`).run().then(() => undefined);
  return promiseSchemaReady;
}
