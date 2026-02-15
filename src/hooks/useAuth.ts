import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    email: string;
    name: string;
    role: 'user' | 'admin';
  } | null;
  login: (email: string, name: string, role?: 'user' | 'admin') => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      login: (email, name, role = 'user') => set({ 
        isAuthenticated: true, 
        user: { email, name, role } 
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
