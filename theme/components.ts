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
      fontFamily: "openSans",
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
        background: "ivory",
        border: "1px solid #1E2D2F",
        color: "#1E2D2F",
        fontWeight: "bold",
      },
      danger: {
        background: "red.500",
        color: "white",
      },
    },
    sizes: {
      sm: {
        px: 4,
        py: "20px",
        fontSize: "0.9rem",
      },
      lg: {
        py: "26px",
        // px: 4,
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
  Container: {
    baseStyle: {
      px: 0,
    },
  },
  Accordion: {
    baseStyle: {
      container: {
        border: "none",
        mb: 2,
        borderStyle: "inset",
        borderColor: "charlestonGreen",
      },
      item: {
        bg: "yellow",
        _focus: {
          bg: "none",
        },
      },
      button: {
        _focus: {
          boxShadow: "none",
        },

        _hover: {
          bg: "none",
        },
      },
      panel: {
        pt: 0,
      },
    },
  },
};
