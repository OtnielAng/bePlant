import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Inicio from './Components/Home/Inicio'
import Tienda from './Components/Tienda/Tienda';

function App() {
  return (
    <div className="App">
        <Header/>
        <body class="px-2 py-1 md:px-16">
          <Tienda/>
        </body>
        <Footer/>      
    </div>
  );
}

export default App;
