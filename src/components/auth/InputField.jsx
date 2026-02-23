import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const InputField = ({ label, type = "text", placeholder, icon: Icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}

        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-primary focus:outline-none bg-white"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
