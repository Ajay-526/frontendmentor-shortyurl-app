import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../images/icon-brand-recognition.svg";
import image2 from "../images/icon-detailed-records.svg";
import image3 from "../images/icon-fully-customizable.svg";
import Statsticscard from "./Statsticscard";
function StatasticsComponent() {
  return (
    <>
      <Box
        sx={{
          m: "0 auto",
          width: "90%",
          bgcolor: "hsl(180, 65%, 50%)",
          height: 15,
          position: "relative",
          zIndex: 1,
          top: 320,
        }}
      ></Box>
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h3" fontWeight={700} sx={{textAlign:{xs:'center'}}}>
              Advanced Statastics
            </Typography>
            <Typography
              variant="body1"
              sx={{ width: {xs:200, sm: 400}, textAlign: "center" }}
            >
              Tracks how your links are performing across the web with our
              advanced statastics dashboard.
            </Typography>
          </Box>
          <Box sx={{
            maxHeight:500,
            mt: 6,
            display:'flex',
            flexWrap:'wrap',
            gap: 2,
          }}>
            <Statsticscard
              mt = {20}
              image={image1}
              title="Brand Recognition"
              description="Boost your brand recognition with each click, Generic links dont mean a thing. Branded links help instill confidence in your content."
            />
            <Statsticscard
            mt = {50}
              image={image2}
              title="Details Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Statsticscard
            mt = {80}
              image={image3}
              title="Fully Customizable"
              description="Improve bran awareness and content discoverability through customizable links. supercharging audience engagement."
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StatasticsComponent;
