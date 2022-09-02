import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Category, selectCategoryId, updateCategory } from "./categorySlice";
import CategoryForm from "./components/CategoryForm";
import { useSnackbar } from "notistack";

const EditCategory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const id = useParams<{ id: string }>().id || "";

  const [isDisabled, setIsDisabled] = useState(false);

  const category = useAppSelector((state) => selectCategoryId(state, id));

  const [categoryState, setCategoryState] = useState<Category>(category);
  const dispatch = useAppDispatch();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(updateCategory(categoryState));

    enqueueSnackbar("Category updated successfully", { variant: "success" });
  }

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({
      ...categoryState,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={categoryState}
          isDisabled={isDisabled}
          isLoading={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
};

export default EditCategory;
