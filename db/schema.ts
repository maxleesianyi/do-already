import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const promises = sqliteTable("promises", {
  id: text("id").primaryKey(), title: text("title").notNull(), category: text("category").notNull(), dueText: text("due_text").notNull(), relevantPerson: text("relevant_person").notNull(), preparation: text("preparation").notNull(), confidence: text("confidence").notNull(), status: text("status").notNull().default("due"), approvalState: text("approval_state").notNull().default("saved"), createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`), updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
