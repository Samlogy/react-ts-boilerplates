import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Suspense fallback={<p> Loading... </p>}>
        <ColorModeScript />
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>
);
