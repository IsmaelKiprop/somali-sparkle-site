import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

const initialLoader = document.getElementById("initial-loader");
if (initialLoader) initialLoader.remove();
