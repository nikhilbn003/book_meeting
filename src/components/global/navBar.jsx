import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-green-600 p-4">
      <div className="text-white text-lg font-semibold">
        <Link legacyBehavior href="/">book</Link>
      </div>
      <div>
        <Link legacyBehavior href="/login">
          <a className="text-white text-sm font-medium">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
