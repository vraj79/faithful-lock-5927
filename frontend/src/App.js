import "./App.css";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";
import Homepage from "./components/Homepage/Homepage";
// import AllRoutes from "./router/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <HomeNavbar/>
      <Homepage/>
    </div>
  );
}

export default App;
