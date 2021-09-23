import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./component/Navbar";
import "./App.css";
import Header from "./pages/Header";
import About from "./pages/About"
import Cards from "./pages/Cards";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./component/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Errorpage from "./pages/Errorpage";


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area:600,
              },
            },
            shape:{
              type:'square',
              stroke:{
                width:6,
                color: "#f9ab00"
              }
            }
          },
        }}
      />
      
      <Header />
      </Route>
<Route exact path="/about">
      <About />
      </Route>
      <Route exact path="/projects">
      <Cards />
      </Route>
      <Route exact path="/skills">
      <Skills/>
      </Route>
      
        
      <Route exact path="/contact">  
      
      <Contact/>
      </Route>
      <Route>
        <Errorpage/>
      </Route>
      <Route exact path="/ErrorPage"></Route>
      </Switch>
      <Footer />
      </Router>
  );
}

export default App;
