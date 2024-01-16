import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { username } = req.query;

    try {
        const { data: userProfile, error } = await supabase
            .from('profiles')
            .select('id')
            .eq('username', username);

        if (error) {
            console.error('Error fetching user profile:', error.message);
            return res.status(500).json({ success: false, error: 'Unexpected error' });
        }

        if (userProfile.length !== 0) {
            return res.status(200).json({ success: true, userProfile });
        } else {
            return res.status(404).json({ success: false, message: `${username} does not exist.` });
        }
    } catch (error) {
        console.error('Unexpected error during user profile retrieval:', error.message);
        return res.status(500).json({ success: false, error: 'Unexpected error' });
    }
}
