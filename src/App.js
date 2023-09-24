import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js';
import Section from './components/Section.js';
import { useState } from 'react';


function App() {
  const isMobile = window.matchMedia("(max-width: 1060px)");
  const [sidebarOpen, setSidebarOpen] = useState(isMobile.matches ? false : true);

  const handleSidebarClick = () => {
    const sidebar = document.querySelector('.sidebar');
    const main_section = document.querySelector('.main-section');
    if (sidebarOpen) {
      sidebar.style.zIndex = '0';
      if (!isMobile.matches) {
        main_section.style.zIndex = '2';
        main_section.style.position = 'absolute';
      }
      sidebar.style.transform = 'translateX(-1000px)';
      setSidebarOpen(false);
    } else {
      sidebar.style.zIndex = '2';
      sidebar.style.transform = 'translateX(0)';
      main_section.style.position = 'relative';
      main_section.style.zIndex = '0';
      setSidebarOpen(true);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <i onClick={handleSidebarClick} className="fa-solid fa-bars" id='sidebar-icon'></i>
      <Sidebar />
      {!isMobile.matches ? <Section /> : !sidebarOpen && <Section />}
    </div>
  );
}

export default App;
