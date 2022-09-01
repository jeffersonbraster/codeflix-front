import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryId } from "./categorySlice";
import CategoryForm from "./components/CategoryForm";

const EditCategory = () => {
  const id = useParams<{ id: string }>().id || "";

  const [isDisabled, setIsDisabled] = useState(false);

  const category = useAppSelector((state) => selectCategoryId(state, id));

  const handleToggle = () => {};

  const handleChange = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={category}
          isDisabled={isDisabled}
          isLoading={false}
          onSubmit={() => {}}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
};

export default EditCategory;
