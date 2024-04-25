import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
export function Navbar() {
  const { user, loading, logOut } = useContext(AuthContext);

  const userDisplayName = loading ? (
    <span className="loading loading-spinner loading-md"></span>
  ) : (
    user?.displayName ||
    user?.user?.displayName ||
    user?.email ||
    user?.user?.email ||
    "Not Found😥"
  );
  const userProfile =
    user?.photoURL ||
    "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {!user && !loading ? (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink to="/all-art-craft">All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/add-craft-item">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/my-art-craft-list">My Art & Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Art & craft</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="flex justify-center items-center gap-2">
          <ul>
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <li>
                {user ? (
                  <button
                    onClick={() => {
                      logOut()
                        .then(() => {
                          toast.success("Logged Out successfully!");
                        })
                        .catch(() => {
                          toast.error("Failed to Logged you out!");
                        });
                    }}
                    className="btn btn-sm btn-error text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="btn btn-sm btn-outline">
                    Login
                  </Link>
                )}
              </li>
            )}
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <div>
                    <a id="my-anchor-element-id">
                      <img alt="profile img" src={userProfile} />
                      <Tooltip
                        // Don't forget the `#`!
                        anchorSelect="#my-anchor-element-id"
                        content={userDisplayName}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
