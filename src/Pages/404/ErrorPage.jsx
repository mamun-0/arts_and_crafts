import { FcLinux } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export function ErrorPage() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="h-screen flex sm:flex-col flex-row justify-center items-center"
    >
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <p className="text-7xl">
        <FcLinux />
      </p>
      <p className="text-6xl text-red-700">404 Error</p>
      <Link to="/" className="my-3 btn btn-accent">
        Back to home
      </Link>
    </div>
  );
}
