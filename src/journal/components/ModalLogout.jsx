import { useDispatch, useSelector } from "react-redux";

import { Box, Typography, Modal, Divider, Grid, Button } from "@mui/material/";

import { startLogout } from "../../store/auth";
import { toggleShowComponentModal } from "../../store/navbar/navbarSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export const ModalLogout = () => {
  const dispatch = useDispatch();

  const { showComponentModalLogout } = useSelector((state) => state.navbar);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const onShowModalLogout = () => {
    dispatch(toggleShowComponentModal());
  };

  return (
    <Modal
      open={showComponentModalLogout}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to logout?
        </Typography>
        <Divider />

        <Grid container sx={{ mt: 3 }} direction="row" justifyContent="end">
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={onShowModalLogout}
          >
            No
          </Button>
          <Button variant="contained" color="error" onClick={onLogout}>
            Yes
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};
