import { create } from "zustand";

export const useTodos = create((set) => ({
  list: [],
  value: "",
  setList: (newList) => set(() => ({ list: newList })),

  setListUpdate: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),

  setvalue: (newValue) => set((state) => ({ value: newValue })),

  filterlist: (newValue) =>
    set((state) => ({
      list: state.list.filter((item) => item.type === newValue),
    })),
  setListUpdates: (
    id,
    newStatus // getting 2 values (123123,'draft')
  ) =>
    set((state) => ({
      list: state.list.map((item) =>
        item.id === id ? { ...item, type: newStatus } : item
      ),
    })),
  //   setEidtUpdate: (id, obj) =>
  //     set((state) => ({
  //       list: state.list.map((v) =>
  //         Number(v.id) === Number(id) ? { ...v, ...obj } : v
  //       ),
  //     })),
  //   // (123123,{name:'',email:''})
  // }));
  setEidtUpdate: (id, obj) =>
    set((state) => {
      console.log("console.log", {
        id: id,
        obj: obj,
        list: state.list.map((v) => {
          console.log("Item before update:", v);
          return Number(v.id) == Number(id) ? { ...v, ...obj } : v;
        }),
      });
      return {
        list: state.list.map((v) => {
          console.log("Item before update:", v);
          return Number(v.id) == Number(id) ? { ...v, ...obj } : v;
        }),
      };
    }),
}));
