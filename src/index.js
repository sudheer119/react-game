import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend  } from 'react-dnd-touch-backend';
import {BrowserView, MobileView} from 'react-device-detect';
import "./App.css";
import Che from "./Che.js";

ReactDOM.render(
  <React.StrictMode>
    <Che/>
  </React.StrictMode>,
  document.getElementById("root")
);
