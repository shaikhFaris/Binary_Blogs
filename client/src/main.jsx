import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { BlogsProvider } from "./context/blogsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BlogsProvider>
          <App />
        </BlogsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
