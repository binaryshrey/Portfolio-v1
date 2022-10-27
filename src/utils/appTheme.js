import { createTheme } from "@mui/material/styles"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#303030",
    },

    // mode: "light",
    // background: {
    //   default: "#FFF",
    // },
    // action: {
    //   disabledBackground: "rgba(0, 0, 0, 0.08)",
    //},
  },
})

export default darkTheme
