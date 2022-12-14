import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";
import { toggleShowComponentSlider } from "../../store/navbar/navbarSlice";

export const SideBarItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
    dispatch(toggleShowComponentSlider());
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 60 ? body.substring(0, 60) + "..." : body;
  });

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString().split(" ").slice(0, 4).join(" ");
  }, [date]);

  // TODO: STYLES IN MY NOTES

  return (
    <ListItem
      sx={{
        bgcolor: "grey.200",
        borderRadius: 2,
        margin: 1,
        width: 345,
        "&:hover": {
          outline: "1px solid #4C2B7E",
        },
      }}
      disablePadding
    >
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot sx={{ color: "primary.main" }} />
        </ListItemIcon>
        <Grid container direction="column">
          <Typography
            fontSize="small"
            variant="h6"
            component="p"
            color="primary.main"
            justifyContent="flex-start"
            textAlign="right"
          >
            {dateString}
          </Typography>
          <ListItemText
            sx={{ color: "black", fontWeight: "bold" }}
            primary={newTitle}
          />
          <Divider />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
