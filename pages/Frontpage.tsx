import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import logo from "../images/logo.svg";
import { useTheme } from "@mui/material/styles";
import DrawerComp from "../lib/drawer";
function Frontpage(): JSX.Element {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      {!isMatch ? (
        <>
          <Container
            maxWidth="lg"
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Image src={logo} alt={"Logo"} />
              <Typography>Features</Typography>
              <Typography>Pricing</Typography>
              <Typography>Resources</Typography>
            </Box>
            <Box>
              <Button sx={{ color: "hsl(180, 66%, 49%)" }}>Login</Button>
              <Button
                variant="contained"
                sx={{ ml: 3, bgcolor: "hsl(180, 66%, 49%)" }}
              >
                SignUp
              </Button>
            </Box>
          </Container>
        </>
      ) : (
        <>
        <Container
            maxWidth="md"
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Image src={logo} alt={"Logo"} />
            <DrawerComp/>
          </Container>
        </>
      )}
    </Box>
  );
}

export default Frontpage;
