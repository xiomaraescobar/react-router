import { useAuth } from './auth'

const LogoutPage = () => {
    const auth = useAuth();

    const logout = (event) => {
        event.preventDefault()
        auth.logout();
    }
    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={logout}>
                <label htmlFor="">¿Seguro que quieres salir ?</label>
                <br />
                <button type='submit'>Cerrar</button>
            </form>
        </div>
    )
}

export { LogoutPage }
