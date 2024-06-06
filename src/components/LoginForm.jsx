import { useState } from 'react';
import '../App.css'

export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ login: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors({ login: '', password: '' });

        let valid = true;
        if (!login) {
            setErrors((errors) => ({ ...errors, login: 'Pole login nie może być puste' }));
            valid = false;
        }
        if (!password) {
            setErrors((errors) => ({ ...errors, password: 'Pole hasło nie może być puste' }));
            valid = false;
        } else if (password.length < 6) {
            setErrors((errors) => ({ ...errors, password: 'Hasło musi mieć co najmniej 6 znaków' }));
            valid = false;
        }

        if (valid) {

            console.log('Zalogowano :3', { login, password });
        }
    };

    return (
        <div className="container mt-5" style={{ width: '100vw' }}>
            <form onSubmit={handleSubmit} >
                <div className="mb-3" style={{ width: '50vw', margin: "auto"}}>
                    <label htmlFor="login" className="form-label">Login</label>
                    <input
                        type="text"
                        className={`form-control ${errors.login ? 'is-invalid' : ''}`}
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    {errors.login && <div className="invalid-feedback">{errors.login}</div>}
                </div>
                <div className="mb-3" style={{ width: '50vw', margin: "auto"}}>
                    <label htmlFor="password" className="form-label">Hasło</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <button type="submit" className="btn btn-primary">WEJDŹ DO SZAFY!!!</button>
            </form>
        </div>
    );
}





