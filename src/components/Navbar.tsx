const Navbar = () => {
  return (
    <div className="fixed flex justify-center items-center gap-5 m-5">
      <h1>
        Logo
        <img src="" alt="" />
      </h1>
      <ul className="flex justify-center items-center gap-5">
        <li>Icon Keranjang</li>
        <li>Kelas</li>
        <li>Kelas</li>
        <li>Karya Students</li>
        <li>Syarat & Ketentuan</li>
        <li>Panduan</li>
        <li>FAQ</li>
        <li className="bg-black text-white py-3 px-5 rounded-full">Sign Up / Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
