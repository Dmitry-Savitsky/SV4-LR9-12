// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header /> 
        </header>

        <main>
          <AppRoutes />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
