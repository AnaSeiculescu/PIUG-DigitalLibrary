import { BrowserRouter, Route, Routes } from 'react-router'

import { AppLayout } from './components/layout'
import { appRoutes } from './routes/routes.config'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
