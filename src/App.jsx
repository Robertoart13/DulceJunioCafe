import { App_Router } from "./router/App_Router";
import "./styles/fonts-import.css"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <App_Router/>
    </BrowserRouter>
  );
}

export default App



