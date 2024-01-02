import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './COMPONENT/NAVBAR/Navbar';
import Homee from './COMPONENT/Homee';
import Watchlist from './COMPONENT/WATCHLIST/Watchlist';
import Add from './COMPONENT/ADD/Add';
import ContextProvider from './COMPONENT/CONTEXT/Globalcontext';
import Watched from './COMPONENT/WATCHED/Watched';
import { Container } from 'react-bootstrap';


function App() {
  return (

    <ContextProvider>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/add" element={<Add />} />
        <Route path="/watched" element={<Watched />} />



      </Routes>

    </ContextProvider>

  );
}

export default App;
