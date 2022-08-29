import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}
const category: Category = {
  id: "1",
  name: "jeje",
  description: "inital state",
  is_active: true,
  deleted_at: null,
  created_at: "2021-01-01T00:00:00.000Z",
  updated_at: "2021-01-01T00:00:00.000Z",
};

export const initalState = [
  category,
  { ...category, id: "2", name: "jeje2" },
  { ...category, id: "3", name: "jeje3" },
  { ...category, id: "4", name: "jeje4" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initalState,
  reducers: {
    addCategory: (state, action) => {},
    removeCategory: (state, action) => {},
    updateCategory: (state, action) => {},
  },
});

//Selectors
export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
