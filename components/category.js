import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, ButtonBase, Typography } from "@mui/material";
import Link from "next/link";

const images = [
  {
    url: "https://source.unsplash.com/random?wallpapers",
    title: "สายปราบปราม",
    width: "30%",
  },
  {
    url: "https://source.unsplash.com/random?wallpapers",
    title: "สายอำนวยการ",
    width: "30%",
  },
  {
    url: "https://source.unsplash.com/random?wallpapers",
    title: "สายพิสูจน์หลักฐาน",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
      borderRadius: "20px",
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: "20px",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  borderRadius: "20px",
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: "20px",
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: "calc(100%)",
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(2%)",
  transition: theme.transitions.create("opacity"),
}));

export default function Category() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%", minHeight: "100vh" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              margin: "20px",
              borderRadius: "20px",
            }}
          >
            <Link href="/dashboard/cardExamGroup">
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  color="inherit"
                  sx={{
                    fontSize: {
                      lg: 30,
                      md: 20,
                    },
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </Link>
          </ImageButton>
        ))}
      </Box>
    </>
  );
}
