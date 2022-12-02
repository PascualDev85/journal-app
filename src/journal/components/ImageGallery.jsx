import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList
      sx={{ width: "100", height: 500 }}
      xs={12}
      cols={3}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt="Image of the note"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
