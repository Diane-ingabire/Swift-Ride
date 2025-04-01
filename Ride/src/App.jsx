import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Hello from './Components/Hello';
import Book_Now from './Components/Book_Now';
import BusTracker from './Components/BusTracker';
import DashboardLayout from './Dashboard/DashboardLayout';  
import DashboardOverview from './Dashboard/DashboardOverview'; 
import About  from './Components/About';
import Payment from './Components/Payment';

import SignUpForm from './Components/SignUpForm';

function App() {

 
  

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout  />}>
                    <Route index element={<Hello />} />
                    <Route path="/Book_Now"element={<Book_Now/>} />
                    <Route path="/BusTracker"element={<BusTracker/>} />
                    <Route path="/About"element={<About/>} />
                    <Route path="/Payment"element={<Payment/>} />
                    <Route path="/SignUpForm"element={<SignUpForm/>} />
                </Route>
                <Route path="dashboard" element={<DashboardLayout  />}>
                    <Route index element={<DashboardOverview />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
