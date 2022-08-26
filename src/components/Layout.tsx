import React from "react";
import { Box, Container } from "@mui/system";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bg: "white" }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
