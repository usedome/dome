import { ComponentStyleConfig } from "@chakra-ui/theme";

export const components: { [key: string]: ComponentStyleConfig } = {
  Text: {
    baseStyle: {
      fontFamily: "openSans",
      textAlign: "left",
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: "oswald",
    },
  },
  Button: {
    baseStyle: {
      py: 6,
      borderRadius: 0,
      transition: "all 0.3s ease-in",
      fontFamily: "openSans",
      fontWeight: 400,
      fontSize: "sm",

      _focus: {
        boxShadow: "none",
      },
    },
    variants: {
      primary: {
        background: "charlestonGreen",
        color: "white",
        boxShadow: " 0px 9px 0px -5px navajoWhite",
        opacity: 1,

        _hover: {
          background: "gray.700",
        },

        _focus: {
          boxShadow: " 0px 9px 0px -5px navajoWhite",
        },

        _loading: {
          opacity: 1,
          boxShadow: " 0px 9px 0px -5px navajoWhite",

          _hover: {
            background: "gray.700",
          },
        },
      },
      secondary: {
        background: "navajoWhite",
        color: "charlestonGreen",
        boxShadow: " 0px 9px 0px -5px rgba(0,0,0,0.75)",

        _hover: {
          background: "yellow.500",
        },
      },
      danger: {
        background: "red.500",
        color: "white",
      },
    },
    sizes: {
      sm: {
        px: 4,
        py: 5,
      },
      lg: {
        py: 7,
        // px: 4,
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
};
