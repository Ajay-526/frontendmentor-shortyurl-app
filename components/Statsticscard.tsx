import React from "react";
import { Box , Typography} from "@mui/material";
import Image from "next/image";
interface IPorps {
    image : string,
    title : string,
    description: string
    mt: number
}
function Statsticscard({image, title, description, mt}: IPorps) {
  return (
    <Box
      maxWidth={350}
      sx={{
        position:'relative',
        top: mt,
        bgcolor: "hsl(0, 0%, 100%)",
        p: 3,
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          position: "relative",
          bottom: 45,
          bgcolor: "hsl(258, 26%, 25%)",
          width: 70,
          p: 2,
          borderRadius: "50%",
        }}
      >
        <Image src={image} alt={"icon-brand-recognition"}></Image>
      </Box>
      <Box
        maxWidth={300}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 1,
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default Statsticscard;
