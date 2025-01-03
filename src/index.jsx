import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

import "./css/index.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
