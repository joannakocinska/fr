import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = dane => {
        console.log(dane);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ width: '100vw' }}   >
            <div className="text-center">
                <h3 className="text-primary" style={{ color: '#6ea9f7' }}>Zadaj pytanie i otrzymaj odpowiedź na swojego maila!</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="pytanie" className="form-label">Zadaj pytanie:</label>
                        <input
                            id="pytanie"
                            className={`form-control ${errors.pytanie ? 'is-invalid' : ''}`}
                            {...register('pytanie', { required: 'Wpisz swoje pytanie...' })}
                        />
                        {errors.pytanie && <div className="invalid-feedback">{errors.pytanie.message}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail:</label>
                        <input
                            id="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            {...register('email', {
                                required: 'Email jest wymagany',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Sprawdź, czy poprawnie wpisałeś adres :d',
                                }
                            })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary">Czekam na odpowiedź!</button>
                </form>
            </div>
        </div>
    );
};
