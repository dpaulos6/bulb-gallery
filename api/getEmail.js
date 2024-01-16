import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email } = req.body;

    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('email')
            .eq('email', email)
            .single();

        if (data) {
            return res.status(200).json({ success: true, message: `${email} exists.` });
        } else {
            return res.status(404).json({ success: false, error: `${email} does not exist.` });
        }
    } catch (error) {
    console.error('Unexpected error during username retrieval:', error.message);
    return res.status(500).json({ success: false, error: 'Unexpected error' });
    }
}