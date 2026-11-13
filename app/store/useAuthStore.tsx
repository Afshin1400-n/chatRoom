import { create } from "zustand";
import { persist } from "zustand/middleware";

type user = {
  id: number;
  name: string;
  password: string;
};

type AuthState = {
  user: Driver | null;
  person: Driver[];
  register: (driver: Driver) => void;
  login: (user: Driver) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      person: [],
      register: (driver) =>
        set((state) => ({ person: [...state.person, driver] })),
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: "auth-storage" }
  )
);