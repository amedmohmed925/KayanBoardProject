import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    email: string;
    name: string;
  } | null;
  login: (email: string, name: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      login: (email, name) => set({ 
        isAuthenticated: true, 
        user: { email, name } 
      }),

      logout: () => set({ 
        isAuthenticated: false, 
        user: null 
      }),
    }),
    {
      name: 'kayan-auth-storage',
    }
  )
);
