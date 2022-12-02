import { useDispatch } from "react-redux";

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

import {
  toggleShowComponentSlider,
  toggleShowComponentModal,
} from "../../store/navbar/navbarSlice";
import { ModalLogout } from "./ModalLogout";

export const NavBar = () => {
  const dispatch = useDispatch();

  const onShowSideBar = () => {
    dispatch(toggleShowComponentSlider());
  };

  const onShowModalLogout = () => {
    dispatch(toggleShowComponentModal());
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

            <ModalLogout />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
