import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import OrderMenuPage from './Component/OrderMenuPage/OrderMenuPage';
import MixTeaPage from './Component/MixTeaPage/MixTeaPage';
import MixCoffeePage from './Component/MixCoffeePage/MixCoffeePage';
import StaffOrderMenuPage from './Staff/OrderMenuPage/StaffOrderMenuPage'
import StaffHome from './Staff/Home/StaffHome';

function App() {
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
