import React, { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import App from "./pages/App";
import { AuthProvider } from "./context/AuthContext";



const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>
);