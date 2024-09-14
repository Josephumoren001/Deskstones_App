import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import DeskLogo from '../assets/DeskLogo.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const path = useLocation().pathname;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2 px-5 lg:px-20 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white w-[150px] h-[37px] mb-3"
      >
        <img src={DeskLogo} alt="logo" className="w-full" />
      </Link>

      {/* Search Bar (visible only on large screens) */}
      <form onSubmit={handleSubmit} className=" lg:block hidden">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* Search Button for mobile */}
     

      {/* Right-side items: Theme Toggle, User Dropdown, and Navbar Toggle */}
      <div className="flex gap-2 md:order-2">
        {/* Theme Toggle Button */}
        <Button
          className="w-12 h-10 hidden sm:block"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        {/* User Avatar or Sign-in Button */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        {/* Navbar Toggle for mobile */}
        <Navbar.Toggle />
      </div>

      {/* Navbar Collapse Menu */}
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as="div">
          {/* <Link to="/">Home</Link> */}
        </Navbar.Link>
        <Navbar.Link active={path === '/programs'} as="div">
          <Link to="/programs">Programs</Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/about'} as="div">
          <Link to="/about">About</Link>
        </Navbar.Link>
        
        <Navbar.Link active={path === '/consulting'} as="div">
          <Link to="/consulting">Consulting</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/mentors'} as="div">
          <Link to="/mentors">Mentors</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/blogs'} as="div">
          <Link to="/blogs">Blogs</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/media'} as="div">
          <Link to="/media">Media</Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
