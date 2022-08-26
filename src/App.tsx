import { Box, ThemeProvider } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { appTheme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
