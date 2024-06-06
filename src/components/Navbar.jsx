import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand" href="/">MOJA SZAFA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>Strona Główna</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/contact"}>Zadaj pytanie!</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/szafa"}>Szafa</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link btn btn-primary" to={"/login"}>Zaloguj się</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
