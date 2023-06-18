import { FC } from "react";
import { MenuOpenRounded } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

interface NavbarProps {
  drawerWith: number;
}

const Navbar: FC<NavbarProps> = ({ drawerWith }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWith}px)` },
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar>
        <IconButton>
          <MenuOpenRounded sx={{ display: { sm: "none" } }} />
        </IconButton>

        <Grid container direction="row" justifyContent="space-around">
          <Typography variant="h5" component="div" className="title-navbar">
            Infinite Scroll With React
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
