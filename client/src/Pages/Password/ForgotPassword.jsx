import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { forgetPassword } from "../../Redux/Slices/AuthSlice";
import InputBox from "../../Components/InputBox/InputBox";

export default function ForgotPassword() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function onForgotPassword(event) {
    event.preventDefault();
    if (!email) {
      toast.error("email is required to reset password!");
      return;
    }

    setIsLoading(true);

    // dispatch create account action
    const response = await dispatch(forgetPassword(email));
    if (response?.payload?.success) {
      setEmail("");
    }
    setIsLoading(false);
  }

  return (
    <Layout>
      <section className="flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh]">
        <form
          onSubmit={onForgotPassword}
          autoComplete="off"
          noValidate
          className="flex flex-col dark:bg-base-100 gap-4 rounded-lg md:py-5 py-7 md:px-7 px-3 md:w-[500px] w-full shadow-custom dark:shadow-xl  "
        >
          <h1 className="text-center dark:text-primary-500 text-4xl font-bold font-inter">
            Forgot Password Page
          </h1>

          {/* email */}
          <InputBox
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {/* submit btn */}
          <button
            type="submit"
            className="mt-2 bg-primary-600 hover:bg-primary-700 text-white dark:text-white transition-all ease-in-out duration-300 rounded-md py-2 font-nunito-sans font-[500] text-lg cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "sending email..." : "Send Email"}
          </button>

          {/* link */}
          <p className="text-center font-inter text-gray-500 dark:text-slate-300">
            Remember your password?{" "}
            <Link
              to="/login"
              className="link text-secondary-600 hover:text-secondary-700 font-lato cursor-pointer"
            >
              {" "}
              Login
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
