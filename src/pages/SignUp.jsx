import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import { Mail, Lock, Phone } from "lucide-react";
import Footer from "../components/layout/Footer";

const SignUp = () => {
  return (
    <div>
      <AuthLayout>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Your Account
        </h2>

        <InputField label="Email" placeholder="name@gmail.com" icon={Mail} />

        <InputField
          label="Phone number"
          placeholder="8123340690"
          icon={Phone}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="******"
          icon={Lock}
        />

        <InputField
          label="Confirm password"
          type="password"
          placeholder="******"
          icon={Lock}
        />

        <div className="flex items-start gap-2 mb-6 text-sm">
          <input type="checkbox" className="mt-1" />
          <p>
            I agree to the{" "}
            <span className="text-blue-500">Terms & Conditions</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>
          </p>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-md font-medium bg-orange-600 transition">
          Continue
        </button>

        <div className="my-6 text-center text-gray-500 text-sm">
          Or continue with
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-md mb-4 hover:bg-gray-100">
          Continue with Google
        </button>

        <button className="w-full border border-gray-300 py-3 rounded-md hover:bg-gray-100">
          Continue with Apple
        </button>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </AuthLayout>
      <Footer />
    </div>
  );
};

export default SignUp;
