import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";

const ListCategory = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleDateString("pt-BR"),
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "isActive",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    { field: "createdAt", headerName: "Created", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  function renderIsActiveCell(params: GridRenderCellParams) {
    return (
      <Typography color={params.value ? "primary" : "secondary"}>
        {params.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => console.log("clicou")}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

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
