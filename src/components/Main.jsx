import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Main = () => {
    let counter = localStorage.getItem("cokolwiek")
    if(!counter){
        localStorage.setItem("cokolwiek", 1)
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ width: '100vw' }}>
            <Link
                to="/Szafa"
                className="btn btn-lg btn-primary"
                style={{ width: '50vw' }}
                onClick= {() =>{
                    counter = localStorage.getItem("cokolwiek")
                    counter = Number(counter)
                    counter +=1
                    localStorage.setItem("cokolwiek", counter)

                    }}
            >
                Robimy przegląd Butów?
            </Link>
            <div className="mt-3">
                {localStorage.getItem("cokolwiek")} osób przejrzało naszą szafę
            </div>
        </div>
    );
};
