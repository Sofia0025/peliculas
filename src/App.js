import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
