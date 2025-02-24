import { Stack, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../componentsNavbar/Navbar";
import Footer from "../componentFooter/Footer";
import "./location.css";
import { LanguageContext } from "../LanguageProvider";
import { useContext } from "react";
const Location = () => {
    const { translation } = useContext(LanguageContext);
    const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Stack>
      <Navbar />
      <Stack
        spacing={4}
        alignItems="center"
      >
        <Typography className="titleLocation">
          {translation.location}
        </Typography>

        <Stack sx={{ width: isMobile ? "90%" : "100%", maxWidth: 1000 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9705730955457!2d-84.06676842496967!3d9.936406390165782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e382265344dd%3A0xb585cc4405eafb20!2sDulce%20Junio%20Caf%C3%A9!5e0!3m2!1ses!2scr!4v1740436544397!5m2!1ses!2scr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Location;
