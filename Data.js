import { create } from "zustand";
export const useStore = create((set) => ({
  formData: {
    address: "",
    city: "",
    code: "",
    country: "",    
    date: "",
    name: "",
    email: "",
  },
  setFormData: (newFormData) =>
    set((state) => ({
      formData: { ...state.formData, ...newFormData },
    })),
}));


export const useTodos = create((set) => ({
    list: [],
    setList: (newList) =>
        set((state) => ({
            list: newList,
        })),
    }));
  
