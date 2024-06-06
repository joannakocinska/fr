import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export const Err = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ width: '100vw' }}>
            <div className="alert alert-danger text-center" role="alert">
                Ups, nie ta półka!
            </div>
            <Link to="/" className="btn btn-primary mt-3">
                Wróć na stronę główną
            </Link>
        </div>
    );
};


