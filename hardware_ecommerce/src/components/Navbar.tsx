import { Link } from 'react-router-dom';
import { Dropend } from './Dropend';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid bg-primary">
                <Link className="navbar-brand" to="/">Ferreteria</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Herramientas</a></li>
                                <li><a className="dropdown-item" href="#">Maquinarias</a></li>
                                <li><a className="dropdown-item" href="#">Insumos de limpieza</a></li>
                                <li><a className="dropdown-item" href="#">Cerrajeria</a></li>
                                <li><a className="dropdown-item" href="#">Accesorios para Autos</a></li>
                                <li><a className="dropdown-item" href="#">Jardineria</a></li>


                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
