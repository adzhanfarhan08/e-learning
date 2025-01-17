import { Card } from '../components/Card';

const Home = () => {
  return (
    <div className="bg-yellow-200">
      <main>
        <section className="py-40">
          <div className="flex gap-96 justify-center items-center">
            <div className="text-3xl font-bold">Selamat Datang di LMS</div>
            <div>
              <img src="/src/assets/images/alex-knight-j4uuKnN43_M-unsplash.jpg" alt="" className="w-96" />
            </div>
          </div>
        </section>

        <section className="py-40">
          <div>
            <h1 className="text-center font-bold text-3xl my-5">DAFTAR KELAS</h1>
            <Card />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
