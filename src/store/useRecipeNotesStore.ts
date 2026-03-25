import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';
import { UserRecipeNote } from '../types';

const storage = new MMKV();

const mmkvStorage = {
  setItem: (name: string, value: string) => storage.set(name, value),
  getItem: (name: string) => storage.getString(name) ?? null,
  removeItem: (name: string) => storage.delete(name),
};

interface RecipeNotesState {
  notes: Record<string, UserRecipeNote>;
  setNote: (recipeId: string, content: string) => void;
  getNote: (recipeId: string) => UserRecipeNote | null;
}

export const useRecipeNotesStore = create<RecipeNotesState>()(
  persist(
    (set, get) => ({
      notes: {},
      setNote: (recipeId, content) => {
        const newNote: UserRecipeNote = {
          recipeId,
          content,
          updatedAt: Date.now(),
        };
        set((state) => ({
          notes: {
            ...state.notes,
            [recipeId]: newNote,
          },
        }));
      },
      getNote: (recipeId) => {
        return get().notes[recipeId] || null;
      },
    }),
    {
      name: 'recipe-notes-storage',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
