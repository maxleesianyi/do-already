import { desc, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { promises } from "../../../db/schema";
export async function GET() { try { const rows = await getDb().select().from(promises).where(eq(promises.approvalState, "saved")).orderBy(desc(promises.createdAt)); return Response.json({ promises: rows }); } catch { return Response.json({ promises: [] }); } }
