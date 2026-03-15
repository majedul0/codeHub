import { BrowserRouter } from "react-router-dom";
import ProjectRoutes from "./Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ProjectRoutes />
    </BrowserRouter>
  );
}

export default App;
