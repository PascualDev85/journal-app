import { useState } from "react";
import { useDispatch } from "react-redux";

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

import {
  toggleShowComponentSlider,
  toggleShowComponentModalLogout,
} from "../../store/navbar/navbarSlice";
import { ModalLogout } from "./ModalLogout";
import { startLogout } from "../../store/auth";

export const NavBar = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const onShowSideBar = () => {
    dispatch(toggleShowComponentSlider());
  };

  const onShowModalLogout = (e) => {
    setShowModal(true);
    dispatch(toggleShowComponentModalLogout());
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
            {showModal && (
              <ModalLogout
                title="Are you sure you want to logout?"
                onLogout={onLogout}
                setShowModal={setShowModal}
              />
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
