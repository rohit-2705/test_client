import { Routes, Route } from 'react-router-dom'
import login from './pages/login'
import signup from './pages/signup'
import dashboard from './pages/dashboard'

function App() {
return (
    <Routes>
      <Route Component={login} path="/login" />
      <Route Component={signup} path="/" />
      <Route Component={dashboard} path="/dashboard" />
    </Routes>
 
  );
}

export default App;
