import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  Box,
  Toolbar,
  Divider,
  List,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { SideBarItem } from "./SideBarItem";
import { CloseSharp } from "@mui/icons-material";
import { toggleShowComponentSlider } from "../../store/navbar/navbarSlice";

export const SideBar = () => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const { showComponentSlider } = useSelector((state) => state.navbar);

  const dispatch = useDispatch();

  const onCloseSideBar = () => {
    dispatch(toggleShowComponentSlider());
  };

  return (
    <Box component="nav">
      <Drawer open={showComponentSlider}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: "grey.200", padding: 2, boxShadow: 6 }}
        >
          <Typography variant="h6" noWrap component="div" fontWeight="bold">
            {displayName}
          </Typography>
          <IconButton onClick={onCloseSideBar} color="inherit">
            <CloseSharp />
          </IconButton>
        </Grid>

        <Typography
          alignItems="center"
          variant="h6"
          noWrap
          component="p"
          sx={{ padding: 3, textAlign: "center" }}
        >
          My Notes 📜
        </Typography>

        <Divider />

        <List sx={{ width: 360 }}>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
