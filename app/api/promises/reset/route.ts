import { ensurePromiseSchema, getDb } from "../../../../db";
import { promises } from "../../../../db/schema";

export async function POST() {
  try {
    await ensurePromiseSchema();
    await getDb().delete(promises);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Could not reset the demo." },
      { status: 500 },
    );
  }
}
