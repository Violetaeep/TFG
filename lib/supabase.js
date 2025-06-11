import { AppState } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const URL = "https://mxmfldvwridcyfgcvqfd.supabase.co";
const API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bWZsZHZ3cmlkY3lmZ2N2cWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNDQ5MDQsImV4cCI6MjAzOTcyMDkwNH0.a24y-dqjy7Y76DZqdxQy4-YBpyBJ8mDpTMwIi3lJxR8";

export const supabase = createClient(URL,API, {
    auth: {
            storage: AsyncStorage,
            autoRefreshToken:true,
            persistSession:true,
            detectSessionInUrl: false,
    },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive onAuthStateChange events with the TOKEN_REFRESHED or
// SIGNED_OUT event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
       }
})
