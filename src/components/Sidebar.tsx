import { FC } from "react";
import { Link } from "react-router-dom";
import { HomeRounded, LinkOff } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface SidebarProps {
  drawerWidth: number;
}

const Sidebar: FC<SidebarProps> = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: "none", sm: "block" },
      }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Menu
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          <Link className="link" to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeRounded sx={{ color: "#fff", marginBottom: 1 }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link className="link" to="/fake">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkOff sx={{ color: "#fff", marginBottom: 1 }} />
                </ListItemIcon>
                <ListItemText primary="fake page" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
