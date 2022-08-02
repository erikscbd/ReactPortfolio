import { useState } from "react";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from '../components/Contact';


export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
        <Header handlePageChange={handlePageChange} />
      <div className="flex-row justify-center container">
       {renderPage()}
      </div>
      <Footer />
    </main>
  );
}
