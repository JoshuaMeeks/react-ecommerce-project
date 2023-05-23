import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core';

function App() {

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-success'>
        <div className='container'>
          <a href='/home' className='navbar-brand'>
            Logo
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className='nav-link' href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className='nav-link' href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className='nav-link' href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
