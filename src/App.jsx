import './App.css';

// Outlet
import { Outlet } from 'react-router-dom';

// Componentes
import Header from './components/Header/Header';

function App() {
  return (
    <div className="w-100 flex flex-col items-center justify-center">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
