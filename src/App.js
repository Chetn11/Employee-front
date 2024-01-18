import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './Router/Navbar';
import AllRouts from './Router/AllRouts';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRouts/>
    <img src='https://kredily.com/wp-content/uploads/2023/01/emp-mng-sys-1024x585.png' alt='logo'/>
    </div>
  );
}

export default App;
