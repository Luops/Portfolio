import './App.css';

// Outlet
import { Outlet } from 'react-router-dom';

// Componentes
import Header from './components/Header/Header';

function App() {
  return (
    <div className="w-100 flex flex-col items-center justify-center bg-gradient-to-tr from-sky-600 to-cyan-200">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
