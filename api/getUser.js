import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res
      .status(401)
      .json({ error: "Unauthorized - Access Token missing" });
  }

  try {
    const { data, error } = await supabase.auth.getUser(accessToken);

    if (error) {
      console.error("Error fetching user information:", error.message);
      return res
        .status(500)
        .json({ success: false, error: "Unexpected error" });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(
      "Unexpected error during user information retrieval:",
      error.message,
    );
    return res.status(500).json({ success: false, error: "Unexpected error" });
  }
}
