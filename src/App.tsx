import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import KaryaStudents from './pages/KaryaStudents';
import { SyaratKetentuan } from './pages/SyaratKetentuan';
import { Panduan } from './pages/Panduan';
import { FAQ } from './components/FAQ';

const App = () => {
  return (
    <div className="bg-yellow-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karya-students" element={<KaryaStudents />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratKetentuan />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
};

export default App;
