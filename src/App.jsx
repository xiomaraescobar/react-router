import { HashRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './Menu'
import { HomePage } from './HomePage'
import { BlogPage } from './BlogPage'
import { ProfilePage } from './ProfilePage'
import { BlogPost } from './BlogPost'
import { AuthPrivateRoute, AuthProvider } from './auth'
import { LoginPage } from './LoginPage'
import { LogoutPage } from './LogoutPage'

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>

          <Menu />
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={
              <AuthPrivateRoute>
                <LogoutPage />
              </AuthPrivateRoute>
            } />
            <Route path="/profile" element={
              <AuthPrivateRoute>
                <ProfilePage />
              </AuthPrivateRoute>} />
            <Route path="*" element={<p>Not Found</p>} />

          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
