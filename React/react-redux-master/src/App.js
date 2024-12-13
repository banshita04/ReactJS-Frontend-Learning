import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Login from './components/Login'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        {/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
