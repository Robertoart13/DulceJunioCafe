import { Button, Stack, Typography } from "@mui/material";
import "./styles.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";
import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" style={{textDecoration:"none", display: "flex", alignItems: "center"}}>
        <img
          src="/DulceJunioCafe/images/logoNegro.png"
          alt="logo"
          style={{ width: isMobile ? "40%" : "8%", height: "auto" }}
        />
        <Typography className="navbarText" style={{display: isMobile ? "none" : "block"}}>{translation.menu}</Typography>
        </NavLink>
        
        {/* <NavLink to="/" className="navbarText" style={{display: isMobile ? "none" : "block", textDecoration:"none"}}>{translation.menu}</NavLink> */}
        {/* <Typography className="navbarText" style={{display: isMobile ? "none" : "block"}}>{translation.menu}</Typography> */}
      </Stack>

      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1} style={{ width: "100%"}}>
        <Stack>
        <Button 
          className='btnTranslate' 
          onClick={() => {
            toggleLanguage();
          }}
        >
          {/* <img src={translation.buttonText} style={{width:"69%"}} alt='language'/> */}
          {translation.buttonText}
        </Button>
           </Stack>
    
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>

       
        <img src="/DulceJunioCafe/images/locationpin.svg" alt="mapa" style={{width: isMobile ? "20%" : "10%", height: "auto"}}/>

        {/* <Typography className="navbarText" style={{width:isMobile ? "100%" : "200px"}}>{translation.store}</Typography> */}
        <NavLink to="/ubicacion" className="navbarText" style={{width:isMobile ? "100%" : "200px", textDecoration: "none"}}>{translation.store}</NavLink>

        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
