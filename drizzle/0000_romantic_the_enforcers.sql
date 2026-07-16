CREATE TABLE `promises` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`category` text NOT NULL,
	`due_text` text NOT NULL,
	`relevant_person` text NOT NULL,
	`preparation` text NOT NULL,
	`confidence` text NOT NULL,
	`status` text DEFAULT 'due' NOT NULL,
	`approval_state` text DEFAULT 'saved' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
