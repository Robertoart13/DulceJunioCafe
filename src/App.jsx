import { Stack } from "@mui/material";
import Navbar from "./components/componentsNavbar/Navbar";
import "./styles/fonts-import.css"
import MainContent from "./components/componentsContent/MainContent";
import Footer from "./components/componentFooter/Footer";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Stack style={{paddingBottom: "5%"}}>
        <Navbar/>
        <MainContent/>
        <Footer/>
      </Stack>
    </Router>
  );
}

export default App



