import { Stack } from "@mui/material"
import Navbar from "./components/componentsNavbar/Navbar"
import MainContent from "./components/componentsContent/MainContent"
import Footer from "./components/componentFooter/Footer"


const Home = () => {
  return (
    <Stack style={{paddingBottom: "5%"}}>
    <Navbar/>
    <MainContent/>
    <Footer/>
  </Stack>
  )
}

export default Home
