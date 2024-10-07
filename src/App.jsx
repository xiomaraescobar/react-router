import { HashRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './Menu'
import { HomePage } from './HomePage'
import { BlogPage } from './BlogPage'
import { ProfilePage } from './ProfilePage'
import { BlogPost } from './BlogPost'

function App() {

  return (
    <>
      <HashRouter>
        <Menu />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not Found</p>} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
