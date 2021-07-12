import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import {blue, blueGrey, green, lightGreen} from "@material-ui/core/colors";

const defaultTheme = {
  palette: {
    primary: green,
    secondary: lightGreen, //ss,
    //type: "dark",
  },
  typography: {
    fontFamily: "'Oxanium', cursive;",
  },
  status: {
    danger: "orange",
  },
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      primary: green,
      secondary: lightGreen,
    },
  });
  const muiTheme = createMuiTheme({
    ...defaultTheme,
    ...currentTheme,
  });
  return [muiTheme, setCurrentTheme];
}
