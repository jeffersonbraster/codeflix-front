import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";

const ListCategory = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
  ];

  return (
    <Box mx="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/category/create"
          style={{ marginBottom: "1rem" }}
        >
          New category
        </Button>
      </Box>

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[10, 20, 50, 100]}
        />
      </div>
    </Box>
  );
};

export default ListCategory;
