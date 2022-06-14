import { extendTheme } from "@chakra-ui/react";
import "@fontsource/quicksand"; // Defaults to weight 400.

// Gradient defined and used throughout
const chakra_gradient = `linear(to-b, #34569A, #1D3D63)`;
const css_gradient = 'linear-gradient(0deg, #34569A 0%, #1D3D63 100%);'

// Define our font
const fonts = {
  heading: "Quicksand, sans-serif",
  body: "Quicksand, sans-serif",
};

// Breakpoints fo different sizes
const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({
  /* color definitions, taken from figma */
  colors: {
    blackish: "#181818",
    turquoise: "#00CCEE",
    yellow: "#FDE30F",
    orange: "#FAC20D",
    red: "#FE5957",
  },
  /* some styling can be re-used all over */
  components: {
    Text: {
      variants: {
        link: {
          color: "white",
          textShadow: "0px 0px 20px #FDE30F",
        },
      },
    },
    Button: {
      variants: {
        default: {
          backgroundColor: "red",
          color: "white",
          borderRadius: "100px",
        },
        adminPrimary: {
          backgroundColor: "turquoise",
          color: "white",
        },
      },
    },
  },
  // ...
  breakpoints,
  fonts,
});

export { theme, chakra_gradient, css_gradient };
