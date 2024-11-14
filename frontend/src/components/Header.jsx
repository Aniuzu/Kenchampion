import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar fluid={true} rounded={true}>
    <Navbar.Brand href="/">
    <img
          src="/lp.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DeadMan</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Link to="/" className="text-gray-700">Home</Link>
      <Link to="/about" className="text-gray-700">About Us</Link>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
