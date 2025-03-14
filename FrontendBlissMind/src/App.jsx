// import Input from './common/Input';
// import  BrowserRouter  from "react-router-dom";
// import  Router  from './router'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home'
import 'antd/dist/antd.min.css';


function App() {
  return (
    <div>
      <Header/> 
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;