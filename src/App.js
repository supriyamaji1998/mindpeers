import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavbarComp />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
