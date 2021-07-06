import "./App.css";
import PrimerComponente from "./componentes/primerComponente/PrimerComponente";
import Producto from "./componentes/producto/Producto";
import AddToCart from "./componentes/addTocart/AddToCart";

function App() {
  return (
    <>
    <div className="App">
      <div className="alert alert-primary" role="alert">
         Hola Mundo!
      </div>
    </div>
    <PrimerComponente name="Holi"></PrimerComponente>
    <Producto price={12} color="red" detail={{title:"evibariiiii", text:"put yar jends on"}} isFruit={true} children={
      <div>la guAaaaaaguaaa!</div>
    }/> 
    <AddToCart/>
    </>
  );
}

export default App;


