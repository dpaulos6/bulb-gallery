import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    let { error } = await supabase.auth.signOut();

    if (!error) {
      return res
        .status(200)
        .json({ success: true, data: "Logout successful." });
    }
    if (error) {
      return res
        .status(500)
        .json({ success: false, error: "Unexpected error" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error.message);
    return res.status(500).json({ success: false, error: "Unexpected error" });
  }
}
