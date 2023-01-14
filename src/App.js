import './App.css';
import freeCodeCampLogo from '../src/imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {

  const manejarClick = () => {
    console.log('Click');
  }

  const reniciarContador = () => {
    console.log('Reiniciar')
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
      </div>
      <Contador numCLicks = '5' />
        <Boton 
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reniciarContador} />
    </div>
  );
}

export default App;
