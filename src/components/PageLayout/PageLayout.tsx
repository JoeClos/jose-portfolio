import { ReactNode } from 'react';
import Navbar from '../../pages/Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';
import './pagelayout.css';

interface PageLayoutProps {
  children: ReactNode;
}

const Pagelayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Pagelayout;
