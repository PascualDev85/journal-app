import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

import { startNewNote } from "../../store/journal";
import { HomeLayout } from "../layout/HomeLayout";
import { NoteView, NothingSelectedView } from "../views";

export const HomePage = () => {
  const { isSaving, activeNote: note } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <HomeLayout>
      {!!note ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </HomeLayout>
  );
};
