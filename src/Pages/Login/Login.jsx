import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { useToggle } from "../../../hooks/useToggle";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FormGroup } from "../../components/FormGroup/FormGroup";

export function Login() {
  const location = useLocation().state || "/";
  const navigate = useNavigate();
  const [toggle, setToggle] = useToggle(true);
  const {
    loginWithEmailAndPassword,
    setUser,
    loginWithGoogle,
    loginWithGithub,
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const { email, password } = data;
    loginWithEmailAndPassword(email, password)
      .then((result) => {
        setUser(result);
        toast.success("Welcome back!");
        reset();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        navigate(location);
      })
      .catch(() => {
        toast.error("Invalid username or password!");
      });
  }
  function socialLogin(callback) {
    callback()
      .then((result) => {
        setUser(result);
        toast.success("Welcome back!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        navigate(location);
      })
      .catch(() => {
        toast.error("Failed to login!");
      });
  }
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="md:w-1/3">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <FormGroup errorMessage={errors?.email?.message}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", {
                  required: { value: true, message: "Required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </label>
          </FormGroup>

          <FormGroup
            errorMessage={errors?.password?.message}
            position="relative"
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={toggle ? "password" : "text"}
                placeholder="password"
                className="grow"
                {...register("password", {
                  required: { value: true, message: "Required" },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character long ",
                  },
                  validate: {
                    hasLowerCase: (value) => {
                      if (!value.match(/[a-z]/)) {
                        return "Must include at least 1 lowercase letter";
                      }
                    },
                    hasUpperCase: (value) => {
                      if (!value.match(/[A-Z]/)) {
                        return "Must include at least 1 uppercase letter";
                      }
                    },
                  },
                })}
              />
            </label>
            {toggle ? (
              <FaRegEye
                onClick={() => {
                  setToggle();
                }}
                className="absolute top-4 right-4 z-10 cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => {
                  setToggle();
                }}
                className="absolute top-4 right-4 z-10 cursor-pointer"
              />
            )}
          </FormGroup>
          <button className="btn btn-outline w-full sm:w-auto">Login</button>
        </form>
        <div className="mt-3">
          <div className="flex justify-between">
            <h2 className="text-violet-800 font-medium">
              Doesn't have an account?
            </h2>
            <Link to="/register" className="font-medium">
              👉Register
            </Link>
          </div>
          <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <button
              onClick={() => {
                socialLogin(loginWithGoogle);
              }}
              className="btn text-gray-200 btn-error"
            >
              <FaGoogle />
              Google
            </button>
            <button
              onClick={() => {
                socialLogin(loginWithGithub);
              }}
              className="btn btn-neutral"
            >
              <FaGithub />
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
