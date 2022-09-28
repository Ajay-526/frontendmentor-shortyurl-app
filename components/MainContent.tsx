import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import image from "../images/illustration-working.svg";
import SearchComponent from "../components/SearchComponent";
function MainContent() {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          mb: { xs: 15, sm: 0 },
          position: "relative",
          height: { xs: "100vh", sm: "90vh" },
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          flexWrap: { xs: "wrap-reverse", sm: "nowrap" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
            gap: 3,
            mt: { xs: 2 },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            More than just shorter links
          </Typography>
          <Typography>
            Build your brans recognition and get detailed insights on how your
            links are performing.
          </Typography>
          <Button
            variant="contained"
            sx={{ borderRadius: 10, width: 200, bgcolor: "hsl(180, 66%, 49%)" }}
          >
            Get Started
          </Button>
        </Box>
        <Box sx={{ sm: { ml: 20 } }}>
          <Image src={image} alt={"Something"} />
        </Box>
      </Container>
    </Box>
  );
}

export default MainContent;
