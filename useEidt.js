import { create } from "zustand";


export const useEidt = create((set) => ({
    isEdit: false,
    handleEidt: ()=> set( (state) =>({  isEdit:!state.isEdit}))

}))
 
export const useUpdate = create((set) => ({
    formUpdateData: {
      address: "",
      city: "",
      code: "",
      country: "",
      date: "",
      name: "",
      email: "",
      type: "",
    },
    setFormUpdateData: (newFormUpdateData) =>
      set((state) => ({
        formUpdateData: {
          ...state.formUpdateData,
          ...newFormUpdateData,
        },
      })),
      
  }));