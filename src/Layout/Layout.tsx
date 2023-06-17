import { FC } from "react";
import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const drawerWidth = 240;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box display={"flex"}>
      <Navbar drawerWith={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
