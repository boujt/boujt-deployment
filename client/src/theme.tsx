import { extendTheme } from "@chakra-ui/react";
import "@fontsource/quicksand"; // Defaults to weight 400.

// Gradient defined and used throughout
const chakra_gradient = `linear(to-b, #34569A, #1D3D63)`;
const css_gradient = "linear-gradient(0deg, #34569A 0%, #1D3D63 100%);";
const box_shadow_light = "0 0 15px #d3d3d3";
const box_shadow_dark = "0px 0px 10px rgba(0, 0, 0, 0.1)";

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
					backgroundColor: "yellow",
					color: "black",
					borderRadius: "100px",
					_hover: {
						backgroundColor: "#fff07a",
					},
				},
				adminPrimary: {
					backgroundColor: "turquoise",
					color: "white",
				},
				information: {
					backgroundColor: "white",
					color: "black",
					borderRadius: "100px",
					_hover: {
						backgroundColor: "#FFE",
					},
				},
			},
		},
	},
	// ...
	breakpoints,
	fonts,
});

const under_construction_config = {
	title: "Denna sida är under konstruktion!",
	status: "info",
	duration: 2000,
	isClosable: true,
	position: "top",
};

export {
	theme,
	chakra_gradient,
	css_gradient,
	box_shadow_light,
	box_shadow_dark,
	under_construction_config,
};
