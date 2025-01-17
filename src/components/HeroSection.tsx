import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import { KaryaStudents } from '../pages/KaryaStudents';
import { Category } from './Category';
import { FAQ } from './FAQ';

export const HeroSection = () => {
  //   const Section = [
  //     {
  //       id: 1,

  //     },
  //   ];
  return (
    <div className="">
      <main id="one-section" className="min-h-screen">
        <Router>
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <div className="p-4">
            <Routes>
              <Route path="/karya-students" element={<KaryaStudents />} />
            </Routes>
          </div>
        </Router>

        <div className="flex gap-96 justify-center items-center">
          <div className="text-3xl font-bold">Selamat Datang di LMS</div>
          <div>
            <img src="/src/assets/images/alex-knight-j4uuKnN43_M-unsplash.jpg" alt="" className="w-96" />
          </div>
        </div>
      </main>
      <main id="two-section" className="flex justify-center items-center min-h-screen">
        <Category />
      </main>
      <main id="three-section" className="flex justify-center items-center min-h-screen">
        <FAQ />
      </main>
      <footer></footer>
    </div>
  );
};
