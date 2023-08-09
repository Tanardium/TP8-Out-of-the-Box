import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dale fraaaaaaan
        </p>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cf.ltkcdn.net/kids/images/orig/305517-1600x1066-polar-bear-on-rock.jpg" class="d-block w-100" alt="oso polar"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.hswstatic.com/gif/polar-bear-7.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cf.ltkcdn.net/kids/images/orig/305517-1600x1066-polar-bear-on-rock.jpg" class="d-block w-100" alt="..."/>
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
        
      </header>
    </div>
  );
}

export default App;
