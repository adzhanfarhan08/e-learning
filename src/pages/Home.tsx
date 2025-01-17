import { Category } from '../components/Category';
import { FAQ } from '../components/FAQ';

const Home = () => {
  return (
    <div className="bg-yellow-200">
      <main id="one-section" className="min-h-screen">
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

export default Home;
