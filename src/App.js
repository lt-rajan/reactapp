import './App.css';
import {BrowserRouter,Route,Router,Routes,} from "react-router-dom";
import About from './components/About';
import TextForm from './components/TextForm';
import Home from './components/Home';
import NewsScroll from './news components/NewsScroll';
import Navbar from './components/Navbar';


function App() {  
  return ( 
    <>
      
<BrowserRouter>
<Navbar title={"HOME"}/>
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/textform/*" element={<TextForm />} />
  <Route exact path="/about/*" element={<About />} />
  <Route exact path="/newsapp" element={<NewsScroll key="general" pageSize={15} country={"in"} cetegory={"general"} />} />
  <Route exact path="/business" element={<NewsScroll key="business"  pageSize={15} country={"in"} cetegory={"business"} />} />
  <Route exact path="/entertainment" element={<NewsScroll key="entertainment"  pageSize={15} country={"in"} cetegory={"entertainment"} />}/>
  <Route exact path="/health" element={<NewsScroll key="health"  pageSize={15} country={"in"} cetegory={"health"} />} />
  <Route exact path="/science" element={<NewsScroll key="science"  pageSize={15} country={"in"} cetegory={"science"} />} />
  <Route exact path="/technology" element={<NewsScroll key="technology" pageSize={15} country={"in"} cetegory={"technology"} />}/>
</Routes>

</BrowserRouter>

</>
  );
}

export default App;