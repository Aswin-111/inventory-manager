import { create } from "zustand";

const useStore = create((set) => ({
  new_product_toggle: false,

  setProductToggle: (toggle) =>
    set((state) => ({ new_product_toggle: toggle })),

  inventory_toggle: false,

  setInventoryToggle: function (toggle) {
    return set((state) => ({ inventory_toggle: toggle }));
  },

  new_category_toggle: false,

  setCategoryToggle: (toggle) =>
    set((state) => ({ new_category_toggle: toggle })),

  categories_from_db: [],

  setCategory: (data) => set((state) => ({ categories_from_db: [...data] })),

  categories_from_db_popup: [],

  setCategoryPopup: (data) =>
    set((state) => ({ categories_from_db_popup: [...data] })),

  stocks_from_db: [],

  setStocks: (data) => set((state) => ({ stocks_from_db: [...data] })),
}));

export default useStore;
