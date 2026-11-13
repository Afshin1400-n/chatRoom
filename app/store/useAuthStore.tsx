import { create } from "zustand";
import { persist } from "zustand/middleware";

type user = {
  id: number;
  name: string;
  password: string;
  status:boolean
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

      login: (user) =>
  set((state) => ({
    user: { ...user, status: true },
    person: state.person.map((p) =>
      p.id === user.id ? { ...p, status: true } : p
    ),
  })),

     logout: () =>
      set((state) => ({
    user: null,
    person: state.person.map((p) =>
      p.id === state.user?.id ? { ...p, status: false } : p
    ),
  })),

    }),
    { name: "auth-storage" }
  )
);