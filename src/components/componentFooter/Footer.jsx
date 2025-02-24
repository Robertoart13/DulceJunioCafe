import { Stack, Typography, useMediaQuery } from "@mui/material"
import "./footer.css"
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";
const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const { translation } = useContext(LanguageContext);
  return (
    <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={2} style={{padding: "1% 8% 1% 8%", height: "100px"}}>
        <Stack direction={isMobile ? "column" : "row"} justifyContent={isMobile ? "center" : "space-between"} alignItems="center" spacing={2}>

        <Stack style={{width: "50%"}} justifyContent={isMobile ? "center" : "flex-start"} alignItems={isMobile ? "center" : "flex-start"}>
        <img src="/DulceJunioCafe/images/logoNegro.png" alt="logo" style={{width: isMobile ? "60%" : "20%", height: "auto"}}/>
      </Stack>

      <Stack direction="row" justifyContent={isMobile ? "center" : "flex-end" } alignItems="center" spacing={isMobile ? 3 : 2} style={{height: "100%", width: "50%"}}>
            <a href="https://www.facebook.com/share/12GPRNUV9Gy/" target="_blank" rel="noopener noreferrer" style={{width: isMobile ? "30px" : "45px"}}>
            <img src="/DulceJunioCafe/images/facebook.png" alt="facebook" style={{width: "100%", height: "auto"}}/>
            </a>
            <a href="https://www.instagram.com/dulcejuniocafe?igsh=eHR2c2pld2I4Y2sw" target="_blank" rel="noopener noreferrer"style={{width: isMobile ? "35px" : "50px"}}>
            <img src="/DulceJunioCafe/images/instagram.png" alt="instagram" style={{width: "100%", height: "auto"}}/>
            </a>
      </Stack>

        </Stack>

        <Stack>
        <Typography className="footerText">
        {translation.footer}
        </Typography>
        </Stack>
      
    </Stack>
  )
}

export default Footer
