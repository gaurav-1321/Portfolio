export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-white font-semibold text-lg">
            Hello.<span className="text-blue-500">tech</span>
          </a>

          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
            aria-label="Toggle menu"
          >
            &#9776;
          </button>

          <div className="hidden md:flex items-center space-x-8 ">
            <a
              href="#home"
              className="text-gray-300 font-semibold hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white font-semibold transition-colors"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-gray-300 font-semibold hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 font-semibold hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
