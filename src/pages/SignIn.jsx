import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import { Mail, Lock } from "lucide-react";
import Footer from "../components/layout/Footer";

const SignIn = () => {
  return (
    <div>
      <AuthLayout>
        <h1
          className="font-logo text-3xl text-orange-600 text-center"
          style={{ fontFamily: "Island Moments" }}
        >
          Chuks Kitchen
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login your Account
        </h2>

        <InputField
          label="Email or phone number"
          placeholder="name@gmail.com"
          icon={Mail}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="******"
          icon={Lock}
        />

        <div className="text-right mb-6">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-md font-medium bg-orange-600 transition">
          Continue
        </button>

        <div className="my-6 text-center text-gray-500 text-sm">
          Or continue with
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-md mb-4 flex items-center justify-center gap-2 hover:bg-gray-100">
          Continue with Google
        </button>

        <button className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
          Continue with Apple
        </button>

        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </p>
      </AuthLayout>
      <Footer />
    </div>
  );
};

export default SignIn;
