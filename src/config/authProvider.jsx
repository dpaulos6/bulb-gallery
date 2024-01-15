// AuthProvider.js

import { createClient } from '@supabase/supabase-js';
import { createContext, useContext, useState, useEffect } from 'react';

const supabaseUrl = 'https://kozwheekpbfmywqnewrj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvendoZWVrcGJmbXl3cW5ld3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNjU3MDYsImV4cCI6MjAyMDg0MTcwNn0.hPDNHWEzsotXZxyIMuClQB2DfDl_7uaNXrhkcRhal_A';
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUp = async (email, password) => {
        const { user, error } = await supabase.auth.signUp({
        email,
        password,
        });

        if (error) {
        console.error('Sign-up error:', error.message);
        } else {
        console.log('User signed up successfully:', user);
        setUser(user);
        }
    };

    const signIn = async (email, password) => {
        const { user, error } = await supabase.auth.signIn({
        email,
        password,
        });

        if (error) {
        console.error('Sign-in error:', error.message);
        } else {
        console.log('User signed in successfully:', user);
        setUser(user);
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user ?? null);
    }, []);

    const value = {
        user,
        signUp,
        signIn,
        signOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
