import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addCategory, Category } from "./categorySlice";
import CategoryForm from "./components/CategoryForm";

const CreateCategory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isDisabled, setIsDisabled] = useState(false);

  const [categoryState, setCategoryState] = useState<Category>({
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  });

  const dispatch = useAppDispatch();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(addCategory(categoryState));

    enqueueSnackbar("Category created successfully", { variant: "success" });
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
            <Typography variant="h4">Create category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={categoryState}
          isDisabled={isDisabled}
          isLoading={false}
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};

export default CreateCategory;
