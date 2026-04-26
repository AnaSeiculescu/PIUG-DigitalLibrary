import { BrowserRouter, Link, Route, Routes } from 'react-router'

import { appRoutes, paths } from './routes/routes.config'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="app-nav" aria-label="Main">
          <Link to={paths.home}>Home</Link>
          <Link to={paths.signIn}>Sign in</Link>
        </nav>
        <main className="app-main">
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
