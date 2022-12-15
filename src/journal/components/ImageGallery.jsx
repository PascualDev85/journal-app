import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList objectFit="cover" cols={3} gap={4} maxRowHeight={600}>
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
