import { create } from 'zustand'

const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
     

     new_product_toggle : false,
     
     
     setProductToggle: (toggle) => set((state) => ({ new_product_toggle: toggle })),


     new_category_toggle : false,
     
     
     setCategoryToggle: (toggle) => set((state) => ({ new_category_toggle: toggle })),


     categories_from_db : [],
     
     
     setCategory: (data) => set((state) => ({ categories_from_db : [...data] })),


   
    
     categories_from_db_popup : [],
     
     
     setCategoryPopup: (data) => set((state) => ({ categories_from_db_popup : [...data] })),






     
}))

export default useStore;