import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import saveUser from "../../utils/saveUser";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice/userSlice";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await loginUser(data.email, data.password);
      dispatch(setUser(res?.user));
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await googleLogin();
      dispatch(setUser(result.user));
      saveUser(result.user);
      toast.success("Google Login Successful");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-2xl border">
          <div className="card-body">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold">Welcome Back 👋</h2>

              <p className="text-gray-500 mt-2">Login to your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaEnvelope />

                  <input
                    type="email"
                    className="grow"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                </label>

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaLock />

                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </label>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning checkbox-sm"
                  />

                  <span className="label-text">Remember Me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-warning hover:underline text-sm font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning w-full text-white"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logging In...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="btn btn-outline w-full"
            >
              <FaGoogle className="text-red-500 text-xl" />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-sm">
              Don't have an account?
              <Link
                to="/register"
                className="text-warning font-bold ml-2 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
