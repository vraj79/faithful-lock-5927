import "./App.css";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";
import AllRoutes from "./router/AllRoutes";

function App() {
  return (
    <div className="App">
      <HomeNavbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
