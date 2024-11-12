import { create } from "zustand";

export const useStore = create((set) => ({
  formData: {
    id: 0,
    address: "",
    city: "",
    code: "",
    country: "",
    date: "",
    name: "",
    email: "",
    type: "",
  },
  setFormData: (newFormData) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...newFormData,
        id: Math.floor(Math.random() * 10000000000),

      },
    })),
    
}));


