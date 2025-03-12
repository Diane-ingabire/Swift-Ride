import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Hello from './Components/Hello';
import Book_Now from './Components/Book_Now';
import BusTracker from './Components/BusTracker';
import DashboardLayout from './Dashboard/DashboardLayout';  
import DashboardOverview from './Dashboard/DashboardOverview'; 
import About  from './Components/About';
import Payment from './Components/Payment';
import { useState, useEffect } from 'react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle the theme
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Load theme from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode) {
            setIsDarkMode(savedMode === "dark");
        }
    }, []);

    // Save theme to localStorage
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}>
                    <Route index element={<Hello />} />
                    <Route path="/Book_Now"element={<Book_Now/>} />
                    <Route path="/BusTracker"element={<BusTracker/>} />
                    <Route path="/About"element={<About/>} />
                    <Route path="/Payment"element={<Payment/>} />
                </Route>
                <Route path="dashboard" element={<DashboardLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}>
                    <Route index element={<DashboardOverview isDarkMode={isDarkMode} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
