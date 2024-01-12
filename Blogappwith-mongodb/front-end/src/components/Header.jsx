import { Link } from 'react-router-dom';
import auth from '../services/auth';

const Header = () => {
  const handleLogout = () => {
    auth.logout();
    window.location.reload();
  };

  return (
    <header>
      <nav>
        <ul>
          {auth.isAuthenticated() ? (
            <>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/blogs/create">Create Blog</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;