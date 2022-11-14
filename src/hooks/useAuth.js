import { useState, useEffect } from "react";
import { supabase } from "@/supabase";

export const useAuth = () => {
  const [session, setSession] = useState(supabase.auth.session());
  const [user, setUser] = useState(supabase.auth.user());
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(supabase.auth.user())
      console.log("Estado del auth cambio")
    })
  }, []);

  return { session, user };
};
