import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/global";
import { ContextProvider } from "./contexts";

export function App() {
  return (
    <ContextProvider>
      <div className="App">
        <AppRoutes />
        <GlobalStyle />
      </div>
    </ContextProvider>
  );
}
