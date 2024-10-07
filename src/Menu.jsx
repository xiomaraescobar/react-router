import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const Menu = () => {
    const auth = useAuth();
    return (
        <nav>
            <ul>
                {
                    routes.map(route => {
                        if (route.publicOnly && auth.user) return null
                        // if (route.to === "/login" && auth.user) return null 
                        if (route.private && !auth.user) return null
                        return (
                        <li key={route.text}>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })}
                                to={route.to}>
                                {route.text}
                            </NavLink>
                        </li>
                        )
                    })}
            </ul>
        </nav>
    )
}

const routes = [];
routes.push({
    to: "/",
    text: "Home",
    private: false
})
routes.push({
    to: "/blog",
    text: "Blog",
    private: false
})
routes.push({
    to: "/profile",
    text: "Profile",
    private: true
})
routes.push({
    to: "/login",
    text: "Login",
    private: false,
    publicOnly: true
})
routes.push({
    to: "/logout",
    text: "Logout",
    private: true
})
export { Menu }
