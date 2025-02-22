import { Button, Stack, Typography } from "@mui/material";
import "./styles.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const { translation, toggleLanguage } = useContext(LanguageContext);
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{padding: "1% 8%", borderBottom: "solid #e5e5e5 3px" }}
    >
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <img
          src="/images/logoNegro.png"
          alt="logo"
          style={{ width: isMobile ? "40%" : "8%", height: "auto" }}
        />
        <Typography className="navbarText" style={{display: isMobile ? "none" : "block"}}>{translation.menu}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ width: "100%"}}>
        <Stack>
        <Button 
          className='btnTranslate' 
          onClick={() => {
            toggleLanguage();
          }}
        >
          <img src={translation.buttonText} style={{width:"69%"}} alt='language'/>
        </Button>
           </Stack>
    
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>

       
        <img src="/images/locationpin.svg" alt="mapa" style={{width: isMobile ? "20%" : "10%", height: "auto"}}/>

        <Typography className="navbarText" style={{width:isMobile ? "100%" : "200px"}}>{translation.store}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
