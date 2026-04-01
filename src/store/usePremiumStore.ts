import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

type PersistStorage = {
  setItem: (name: string, value: string) => void;
  getItem: (name: string) => string | null;
  removeItem: (name: string) => void;
};

const createStorage = (): PersistStorage => {
  try {
    const storage = new MMKV();
    return {
      setItem: (name: string, value: string) => storage.set(name, value),
      getItem: (name: string) => storage.getString(name) ?? null,
      removeItem: (name: string) => storage.delete(name),
    };
  } catch {
    const memoryStorage = new Map<string, string>();
    return {
      setItem: (name: string, value: string) => {
        memoryStorage.set(name, value);
      },
      getItem: (name: string) => memoryStorage.get(name) ?? null,
      removeItem: (name: string) => {
        memoryStorage.delete(name);
      },
    };
  }
};

const persistStorage = createStorage();

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
      storage: createJSONStorage(() => persistStorage),
    }
  )
);
