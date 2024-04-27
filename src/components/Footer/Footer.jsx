import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <div className="bg-black my-auto">
      <div className="p-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-4 sm:gap-3 gap-2">
        <div className="space-y-2">
          <img
            className="md:h-52 md:w-52 sm:h-40 sm:w-40 object-cover rounded-full h-24 w-24"
            src="https://cdn0.iconfinder.com/data/icons/tools-165/24/paint-roller-1024.png"
            alt=""
          />
          <p className="text-slate-500">&copy;2024 All right reserved.</p>
          <p className="text-slate-500">Art And Craft</p>
          <p className="text-slate-500">Level-4, 34, Awal Centre, Banani, Dhaka</p>
        </div>
        <div className="text-white space-y-2">
          <p className="font-medium text-lg">Social Links </p>
          <ul className="sm:space-y-2">
            <li className="flex items-center">
              <FaFacebook />{" "}
              <Link to="https://www.facebook.com" className="ml-1">
                Facebook
              </Link>
            </li>
            <li className="flex items-center">
              <FaLinkedin />{" "}
              <Link to="https://www.LinkedIn.com" className="ml-1">
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center">
              <FaTwitter />{" "}
              <Link to="https://www.twitter.com" className="ml-1">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <p className="font-medium text-lg">Pages </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-art-craft">All Arts Crafts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
