import { Link } from 'react-router-dom';
// Icons
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white flex justify-between items-center px-10 py-5">
        <div>
          <Link to="/">
            Logo
            <img src="" alt="" />
          </Link>
        </div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link to="/karya-students">Karya Students</Link>
          </li>
          <li>
            <Link to="/syarat-dan-ketentuan">Syarat & Ketentuan</Link>
          </li>
          <li>
            <Link to="/panduan">Panduan</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <FiShoppingCart size={25} />
          </li>
          <li className="bg-black text-white py-3 px-10 rounded-full">Sign Up / Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
