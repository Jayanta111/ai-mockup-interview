import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_aHSdB4uN7vZA@ep-dry-scene-a52swnjl-pooler.us-east-2.aws.neon.tech/ai-mock-interviewer?sslmode=require',
  },
});