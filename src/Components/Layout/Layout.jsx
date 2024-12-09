import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
