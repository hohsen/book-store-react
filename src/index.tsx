import ReactDOM from "react-dom/client";

import "./_zeroing.css";
import "./index.css";

import { AppLayout } from "./components/AppLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<AppLayout />);
