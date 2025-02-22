import { Stack, Typography } from "@mui/material"
import "./card.css"
import { useMediaQuery } from "@mui/material";

const IndividualCard = ({title, text, image, backgroundColor, direction, className }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
<Stack direction={direction} justifyContent="flex-start" alignItems="center" spacing={0} style={{height: "50vh", width: "100%"}}>
    <Stack style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", width: isMobile ? "100%" : "50%", height: "100%"}}>

    </Stack>

    <Stack style={{backgroundColor: backgroundColor, width: isMobile ? "100%" : "50%", height: "100%"}} justifyContent="center" alignItems="center" spacing={4}>
        <Typography className={`individualCardTitle ${className}`}>
        {title}
        </Typography>
        <Typography className={`individualCardText ${className}`}>
        {text}
        </Typography>
    </Stack>

</Stack>
  )
}

export default IndividualCard
