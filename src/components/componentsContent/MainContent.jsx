import { Stack } from "@mui/material"
import IndividualCard from "./IndividualCard"
import { useMediaQuery } from "@mui/material";

const MainContent = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  // tomar la url base en

  const cards = [
    {
      title: "MOMENTOS ÚNICOS",
      text: "Celebra los momentos únicos con tus seres queridos. Ordena tus bebidas y alimentos favoritos a través de nuestra",
      image: "/DulceJunioCafe/images/img1.jpg",
      backgroundColor: "#971545b5",
      direction: isMobile ? "column" : "row",
      className: "white",
    },
    {
      title: "EL OTOÑO A UN CLICK DE DISTANCIA",
      text: "La bebida favorita de la temporada de transportará a un lugar perfecto. Pedí tu Pumpkin Spice YA.",
      image: "/DulceJunioCafe/images/img2.jpg",
      backgroundColor: "#f841858a",
      direction: isMobile ? "column" : "row",
      className: "white"
    },
    {
      title: "MAPLE + PECANAS = PERFECCIÓN",
      text: "Nuestra bebida de temporada se convertirá en tu NUEVA favorita.",
      image: "/DulceJunioCafe/images/img3.jpg",
      backgroundColor: "#971545",
      direction: isMobile ? "column" : "row-reverse",
      className: "white"
    },
    {
      title: "Tu Starbucks de siempre con tu leche favorita",
      text: "Elegí entre Avena, Almendras, Coco o Soya y hacelo a tu manera.",
      image: "/DulceJunioCafe/images/img4.jpg",
      backgroundColor: "#e70558a8",
      direction: isMobile ? "column" : "row",
      className: "white"
    },
    {
      title: "¿Qué está pasando en Starbucks?",
      text: "Encuentre aquí las últimas noticias e historias sobre nuestros socios (empleados), el café y las comunidades.",
      image: "/DulceJunioCafe/images/img5.jpg",
      backgroundColor: "#91093c63",
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
