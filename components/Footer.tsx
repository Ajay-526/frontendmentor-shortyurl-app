import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import FooterCard from "./FooterCard";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import printrest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
function Footer() {
  return (
    <Box sx={{ bgcolor: "hsl(266, 10%, 14%)", minHeight: {xs:680, sm: 230} }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            top: 30,
            display: "flex",
            justifyContent: {xs:'center', sm:"space-between"},
            flexWrap: { xs: "wrap" },
            gap: 2,
            color: "white",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              p: 2,
              height: 50,
              width: 121,
              borderRadius: 10,
            }}
          >
            <Image src={logo} alt={"logo"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap" },
              gap: {xs:3, sm:15},
            }}
          >
            <FooterCard
              text={[
                "Features",
                "Link Shortening",
                "Branded Links",
                "Analytics",
              ]}
            />
            <FooterCard text={["Resources", "Blog", "Developers", "Support"]} />
            <FooterCard text={["Company", "Our Team", "Careers", "Contact"]} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Image src={facebook} alt={"facebook"} />
            <Image src={printrest} alt={"printrest"} />
            <Image src={twitter} alt={"twitter"} />
            <Image src={instagram} alt={"instagram"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
