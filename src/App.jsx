import './App.css';

// Outlet
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <p className='font-inder'>Navbar</p>
      <Outlet />
    </div>
  );
}

export default App;
