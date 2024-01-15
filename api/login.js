import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kozwheekpbfmywqnewrj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvendoZWVrcGJmbXl3cW5ld3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNjU3MDYsImV4cCI6MjAyMDg0MTcwNn0.hPDNHWEzsotXZxyIMuClQB2DfDl_7uaNXrhkcRhal_A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        // Fetch user data based on provided email
        const { data: users, error } = await supabase
            .from('users')
            .select('id, email, password')
            .eq('email', email)
            .single();

        if (error) {
            console.error('Error fetching user data:', error.message);
            return res.status(500).json({ success: false, error: 'Unexpected error' });
        }

        if (users) {
            // Check if the password matches
            if (users.password === password) {
                console.log('Login successful:', users);
                return res.status(200).json({ success: true, user: { id: users.id, email: users.email } });
            } else {
                console.log('Incorrect password');
                return res.status(401).json({ success: false, error: 'Incorrect password' });
            }
        } else {
            console.log('User not found');
            return res.status(404).json({ success: false, error: 'User not found' });
        }
    } catch (error) {
        console.error('Unexpected error during login:', error.message);
        return res.status(500).json({ success: false, error: 'Unexpected error' });
    }
}
