import { useDispatch } from "react-redux";

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

import {
  toggleShowComponentSlider,
  toggleShowComponentModal,
} from "../../store/navbar/navbarSlice";
import { ModalLogout } from "./ModalLogout";
import { startLogout } from "../../store/auth";

export const NavBar = () => {
  const dispatch = useDispatch();

  const onShowSideBar = () => {
    dispatch(toggleShowComponentSlider());
  };

  const onShowModalLogout = () => {
    dispatch(toggleShowComponentModal());
  };

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={onShowSideBar}
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuOutlined />
          </IconButton>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" noWrap component="div">
              Journal App
            </Typography>
            <IconButton color="error" onClick={onShowModalLogout}>
              <LogoutOutlined />
            </IconButton>
            <ModalLogout
              onLogout={onLogout}
              title="Are you sure you want to logout?"
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
