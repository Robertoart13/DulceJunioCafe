import { Stack } from "@mui/material"
import IndividualCard from "./IndividualCard"
import { useMediaQuery } from "@mui/material";

const MainContent = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const cards = [
    {
      title: "MOMENTOS ÚNICOS",
      text: "Celebra los momentos únicos con tus seres queridos. Ordena tus bebidas y alimentos favoritos a través de nuestra",
      image: "/images/img1.jpg",
      backgroundColor: "#d4e9e2",
      direction: isMobile ? "column" : "row",
      className: "black",
    },
    {
      title: "EL OTOÑO A UN CLICK DE DISTANCIA",
      text: "La bebida favorita de la temporada de transportará a un lugar perfecto. Pedí tu Pumpkin Spice YA.",
      image: "/images/img2.jpg",
      backgroundColor: "#006241",
      direction: isMobile ? "column" : "row",
      className: "white"
    },
    {
      title: "MAPLE + PECANAS = PERFECCIÓN",
      text: "Nuestra bebida de temporada se convertirá en tu NUEVA favorita.",
      image: "/images/img3.jpg",
      backgroundColor: "#006241",
      direction: isMobile ? "column" : "row-reverse",
      className: "white"
    },
    {
      title: "Tu Starbucks de siempre con tu leche favorita",
      text: "Elegí entre Avena, Almendras, Coco o Soya y hacelo a tu manera.",
      image: "/images/img4.jpg",
      backgroundColor: "#006241",
      direction: isMobile ? "column" : "row",
      className: "white"
    },
    {
      title: "¿Qué está pasando en Starbucks?",
      text: "Encuentre aquí las últimas noticias e historias sobre nuestros socios (empleados), el café y las comunidades.",
      image: "/images/img5.jpg",
      backgroundColor: "#006241",
      direction: isMobile ? "column" : "row-reverse",
      className: "white"
    }
  ]


  return (
<Stack style={{padding: isMobile ? "5% 8%" : "1% 8%",}} spacing={4}>
{cards.map((card, index) => (
  <IndividualCard key={index} title={card.title} text={card.text} image={card.image} backgroundColor={card.backgroundColor} direction={card.direction} className={card.className} />
))}
</Stack>
  )
}

export default MainContent
