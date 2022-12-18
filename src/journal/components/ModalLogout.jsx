import { useDispatch, useSelector } from "react-redux";

import { Box, Typography, Modal, Divider, Grid, Button } from "@mui/material/";

import {
  toggleShowComponentModalDeleteNote,
  toggleShowComponentModalLogout,
} from "../../store/navbar/navbarSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  margin: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export const ModalLogout = ({ title, onLogout, onDelete, setShowModal }) => {
  const dispatch = useDispatch();

  const { showComponentModalLogout, showComponentModalDeleteNote } =
    useSelector((state) => state.navbar);

  const onCloseModal = () => {
    if (showComponentModalLogout) {
      setShowModal(false);
      dispatch(toggleShowComponentModalLogout());
    }
    if (showComponentModalDeleteNote) {
      setShowModal(false);
      dispatch(toggleShowComponentModalDeleteNote());
    }
  };

  return (
    <Modal
      open={showComponentModalLogout || showComponentModalDeleteNote}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Divider />

        <Grid container sx={{ mt: 3 }} direction="row" justifyContent="end">
          <Button variant="contained" sx={{ mr: 2 }} onClick={onCloseModal}>
            No
          </Button>

          {showComponentModalDeleteNote ? (
            <Button variant="contained" color="error" onClick={onDelete}>
              Yes
            </Button>
          ) : (
            <Button variant="contained" color="error" onClick={onLogout}>
              Yes
            </Button>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};
