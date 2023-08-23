import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Asegúrate de importar los componentes necesarios para el enrutamiento

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter> */}

      <div className="App">
        <header className="App-header">
          <h1 className='title'>
            Eco News
          </h1>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cf.ltkcdn.net/kids/images/orig/305517-1600x1066-polar-bear-on-rock.jpg" className="d-block w-100" alt="oso polar"/>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.hswstatic.com/gif/polar-bear-7.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://cf.ltkcdn.net/kids/images/orig/305517-1600x1066-polar-bear-on-rock.jpg" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <h2 className='picos'>Picos máximos registrados (alinear izquierda) </h2>
        </header>
      </div>
    </div>
  );
}

export default App;
