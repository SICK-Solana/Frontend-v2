import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
 
} from "react-router-dom";
import Landing from "./pages/landing";
import WhitepaperSICK from "./pages/whitepaper";
import Home from "./pages/home";
import CrateCreator from "./pages/createcrate";
import CrateDetailPage from "./pages/crates";
import ExploreCrate from "./pages/explorecrate/ExploreCrate";
import Graphtest from "./pages/graphtest";
import SickAi from "./pages/sickai";
import SwapFunction from "./pages/swap";
import HeaderPhone from './components/ui/headerPhone';

const AppContent: React.FC<{ wallets: any[] }> = ({ wallets }) => {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <HeaderPhone wallets={wallets} />}
      
      
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explorecrate" element={<ExploreCrate />} />
        <Route path="/whitepaper" element={<WhitepaperSICK />} />
        <Route path="/cratecreator" element={<CrateCreator />} />
        <Route path="/crates/:id" element={<CrateDetailPage />} />
        <Route path="/graphtest/:id" element={<Graphtest />} />
        <Route path="/sai" element={<SickAi />} />
        <Route path="/swap" element={<SwapFunction />} />
      </Routes>
     
    </>
  );
};

const App: React.FC<{ wallets: any[] }> = ({ wallets }) => {
  return (
    <Router>
      <AppContent wallets={wallets} />
    </Router>
  );
};

export default App;