import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import EdgeBall from './components/EdgeBall';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BreatheIn from './pages/BreatheIn';
import Switch from '@mui/material/Switch';
import Products from './pages/Products';
import PitPark from './pages/products/PitPark';
import StackPark from './pages/products/StackPark';
import PuzzlePark from './pages/products/PuzzlePark';
import VertiPark from './pages/products/VertiPark';
import HidePark from './pages/products/HidePark';
import AssistPark from './pages/products/AssistPark';

// PitPark subproducts
import TwoIP from './pages/products/subproducts/2IP';
import TwoDP from './pages/products/subproducts/2DP';
import ThreeDP from './pages/products/subproducts/3DP';
import FourDP from './pages/products/subproducts/4DP';
import ThreeIP from './pages/products/subproducts/3IP';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {isLoading ? (
        <BreatheIn onFinish={handleFinishLoading} />
      ) : (
        <div className="min-h-screen flex flex-col bg-background-default">
          <div className="fixed top-4 right-4 z-50">
            <Switch checked={darkMode} onChange={handleThemeChange} color="primary" />
          </div>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main className="flex-grow z-50">
            <EdgeBall sx={{ zIndex : '1000' }}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/pitpark" element={<PitPark />} />
              <Route path="/stackpark" element={<StackPark />} />
              <Route path="/puzzlepark" element={<PuzzlePark />} />
              <Route path="/vertipark" element={<VertiPark />} />
              <Route path="/hidepark" element={<HidePark />} />
              <Route path="/assistpark" element={<AssistPark />} />
              
              {/* PitPark subproducts */}
              <Route path="/pitpark/2ip" element={<TwoIP />} />
              <Route path="/pitpark/2dp" element={<TwoDP />} />
              <Route path="/pitpark/3dp" element={<ThreeDP />} />
              <Route path="/pitpark/4dp" element={<FourDP />} />
              <Route path="/pitpark/3ip" element={<ThreeIP />} />
            </Routes>
            
          </main>
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
