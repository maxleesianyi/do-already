import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { promises } from "../../../../db/schema";
export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) { const { id } = await context.params; const { status } = await request.json() as { status?: string }; if (status !== "completed" && status !== "missed") return Response.json({ error: "Invalid status" }, { status: 400 }); try { await getDb().update(promises).set({ status, updatedAt: new Date().toISOString() }).where(eq(promises.id, id)); return Response.json({ ok: true }); } catch { return Response.json({ ok: false }); } }
