import * as React from "react"
import Card from "@mui/material/Card"
import { useMediaQuery } from "react-responsive"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"

const AboutContent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <Card
      style={{
        background: "#424242",
        margin: isDesktop ? "48px 48px 24px" : "48px 12px 24px",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          iaculis dolor, rhoncus suscipit est. Cras tempor blandit euismod.
          Quisque ut porttitor elit. Nulla nec lacinia dolor, non tincidunt
          quam. Duis elementum rhoncus est, ac molestie nunc dictum vitae.
          Suspendisse lorem nibh, aliquam at odio id, porttitor blandit est. Ut
          mattis consectetur luctus. Cras hendrerit, ante in rhoncus dictum, dui
          mi iaculis purus, ac vestibulum nisi risus non urna. Nulla facilisi.
          Phasellus auctor, ligula vitae eleifend efficitur, metus nisi
          elementum ex, eu placerat massa ligula ac turpis. Vestibulum nec felis
          in tellus vehicula tincidunt at non nisl. Sed molestie eget nisl sit
          amet vestibulum. Vivamus non purus neque.
          <br />
          <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Phasellus ut
          dictum lorem. Phasellus non aliquam urna. Ut at nisl vehicula, ornare
          justo a, commodo turpis. Aliquam erat volutpat. Vestibulum ut leo id
          metus fermentum cursus. Nunc facilisis mi eget interdum ullamcorper.
          Duis libero libero, sodales sit amet volutpat vel, auctor ac enim. Sed
          sit amet faucibus ex. Phasellus quis eros lectus. Sed vehicula, est id
          tempus luctus, felis libero vestibulum ipsum, et interdum lacus elit
          vitae eros. Nunc gravida enim eget ultrices bibendum. Aliquam lacinia
          pretium leo, non pretium ex aliquam at. Vivamus non nibh turpis. Morbi
          nec aliquam ligula. Aliquam et dui sed arcu laoreet auctor at eget
          nibh. Suspendisse varius lorem vehicula sapien lacinia, in bibendum
          turpis iaculis. Vivamus enim ante, ornare at erat vel, lacinia
          molestie ex. Vestibulum lacinia ultrices maximus. Nunc eleifend augue
          mollis tellus volutpat consequat. Morbi vitae lobortis nisl.
          Pellentesque consequat augue arcu, a efficitur velit condimentum non.
          Integer placerat luctus dolor, sit amet sodales est tempus quis. Duis
          diam diam, feugiat at pellentesque sed, porttitor quis nisl. Sed
          tempus euismod justo, a dictum ligula efficitur sed. Nulla sapien
          risus, laoreet eu lectus vel, condimentum aliquam massa. Sed bibendum
          cursus orci at aliquam. Integer in blandit augue, a pulvinar ipsum.
          Donec convallis malesuada diam id congue. <br />
          Fusce mollis tristique ultricies. Proin fringilla eleifend erat, id
          consequat augue. Nullam eget lacus vestibulum urna rutrum hendrerit ut
          vel turpis. Donec a lorem mattis, vulputate turpis vitae, gravida
          orci. Fusce a leo ut ante gravida ultrices vitae nec neque. Duis
          elementum pretium arcu. Praesent quam est, venenatis eget finibus ac,
          volutpat in tellus. Proin euismod odio et ullamcorper blandit. Donec
          at erat et turpis finibus dapibus. Donec viverra lacus ac porttitor
          pulvinar. Cras suscipit accumsan ex quis dapibus. Suspendisse velit
          diam, consectetur ut urna ac, interdum volutpat velit. Pellentesque at
          dolor eget eros ultricies vulputate convallis sed elit. Aliquam congue
          elit id enim consectetur luctus nec sollicitudin magna. Proin
          tincidunt luctus nunc, vitae suscipit orci gravida ac. Ut iaculis eget
          est ac efficitur. Nam porta leo eget hendrerit lobortis. Quisque
          mattis aliquam nunc, quis rhoncus augue. Morbi tincidunt turpis dui, a
          ullamcorper sem sodales sed.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AboutContent
