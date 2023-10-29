

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import Database from "../models/Database";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const supabase = createClient<Database>(
  process.env.SUPABASE_PROJECT_URL || "",
  process.env.SUPABASE_PRIVATE_KEY || ""
);


export default supabase;