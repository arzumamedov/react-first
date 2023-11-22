// import Card from "./components/Card";

import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Main3 from "./components/Main3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
      <Header/>
      <Main/>
      <Cards/>
      <Main3/>
      <Footer/>
      
    </div>
  );
}

export default App;
