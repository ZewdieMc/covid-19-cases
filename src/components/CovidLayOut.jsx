import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';

const CovidLayOut = () => (
  <div className="covid-layout">
    <NavBar />
    <Header />
    <Outlet />
  </div>
);

export default CovidLayOut;
