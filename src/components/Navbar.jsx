import { NavLink } from "react-router-dom";
import { navItems } from "../constants/index";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 fixed z-10 top-0 right-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map(({ path, title }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    (isActive ? "text-blue-700" : "text-gray-900") +
                    " block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0"
                  }
                  aria-current="page"
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
