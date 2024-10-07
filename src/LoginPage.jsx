import React from 'react'
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {

    const auth = useAuth();
    const [username, setUsername] = React.useState("");

    const login = (event) => {
        event.preventDefault();
        auth.login({ username })
    }

    if (auth.user) {
        return <Navigate to="/profile" />
    }
    return (
        <div>
            <h1>
                LoginPage
            </h1>
            <form onSubmit={login}>
                <label htmlFor="">Escribe tu nombre de usuario</label>
                <input type="text"
                    value={username} onChange={event => setUsername(event.target.value)} required />
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export { LoginPage }
