import { Box, Container } from "@mui/material";
import React from "react";
import SearchComponent from "./SearchComponent";
import StatasticsComponent from "./StatasticsComponent";

function CardContent() {
  return (
    <Box sx={{ minHeight: {xs: '200vh', sm:'125vh'}, bgcolor: "hsl(230, 25%, 95%)" }}>
      <Container maxWidth="lg">
        <Box sx={{ position: "relative", bottom: 50 }}>
          <SearchComponent />
        </Box>
        <Box sx={{ position: "relative", top: 10 }}>
          <StatasticsComponent />
        </Box>
      </Container>
    </Box>
  );
}

export default CardContent;
