import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const mmkvStorage = {
  setItem: (name: string, value: string) => storage.set(name, value),
  getItem: (name: string) => storage.getString(name) ?? null,
  removeItem: (name: string) => storage.delete(name),
};

interface PremiumState {
  isPremium: boolean;
  setPremium: (isPremium: boolean) => void;
}

export const usePremiumStore = create<PremiumState>()(
  persist(
    (set) => ({
      isPremium: false,
      setPremium: (isPremium) => set({ isPremium }),
    }),
    {
      name: 'premium-storage',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
