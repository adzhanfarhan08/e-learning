import { Category } from './Category';
import { FAQ } from './FAQ';
import Navbar from './Navbar';

export const HeroSection = () => {
  //   const Section = [
  //     {
  //       id: 1,

  //     },
  //   ];
  return (
    <div className="">
      <Navbar />
      <main id="one-section" className="flex justify-center items-center min-h-screen">
        <div className="flex gap-96 items-center">
          <div className='text-3xl font-bold'>Selamat Datang di LMS</div>
          <div><img src="/src/assets/images/alex-knight-j4uuKnN43_M-unsplash.jpg" alt="" className='w-96'/></div>
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
