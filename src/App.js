import { Routes, Route } from 'react-router-dom'
import { Header, Home, Login } from './containers/public';
import { path } from './ultils/constant';
function App() {
  return (
    <div className='bg-primary'>
      <Routes>
        {/* Đường dẫn chính / */}
        <Route path={path.HOME} element={<Home />} >

          {/* Đường dẫn đến /login */}
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
