import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import saveUser from "../../utils/saveUser";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice/userSlice";
import { socket } from "../../socket/socket";

const Register = () => {
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const userData = await createUser(data.email, data.password);

      await updateUserProfile({
        displayName: data.name,
      });

      saveUser({
        displayName: data.name,
        email: data.email,
        phoneNumber: data.phone,
        photoURL: "",
      });

      dispatch(setUser(userData?.user));
      toast.success("Registration Successful 🎉");

      reset();

      navigate(from, {
        replace: true,
      });
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
      saveUser(result.user);
      dispatch(setUser(result?.user));
      toast.success("Google Login Successful");
      navigate(from, {
        replace: true,
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user?.email) {
      socket.emit("join", user.email);
    }
  }, [user]);
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="card bg-base-100 shadow-2xl border">
          <div className="card-body">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold">Create Account 🚀</h2>

              <p className="text-gray-500 mt-2">Join our shop today</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaUser />

                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                  />
                </label>

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaPhoneAlt />

                  <input
                    type="tel"
                    className="grow"
                    placeholder="01XXXXXXXXX"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^01[3-9]\d{8}$/,
                        message: "Invalid Bangladesh phone number",
                      },
                    })}
                  />
                </label>

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaEnvelope />

                  <input
                    type="email"
                    className="grow"
                    placeholder="example@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid Email Address",
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

              {/* Password */}

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaLock />

                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    placeholder="Create Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message: "Must contain uppercase, lowercase & number",
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

              {/* Confirm Password */}

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaLock />

                  <input
                    type="password"
                    className="grow"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                </label>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms */}

              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  {...register("terms", {
                    required: "Please accept Terms & Conditions",
                  })}
                />

                <span>I agree to the Terms & Conditions</span>
              </label>

              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}

              {/* Register */}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning w-full text-white"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
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

            <p className="text-center mt-5">
              Already have an account?
              <Link
                to="/login"
                className="text-warning font-bold ml-2 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
