import { Icon } from "@iconify/react";
import { PasswordInput } from "../../components/shared/PasswordInput.jsx";
import { InputText } from "../../components/shared/TextInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axios.jsx";
import { object, string } from "yup";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // Yup validation schema
  const loginSchema = object({
    email: string().email("Invalid email format").required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const login = async () => {
    try {
      // Validate form data against the Yup schema
      await loginSchema.validate({ email, password }, { abortEarly: false });

      // If validation passes, proceed with login
      const data = { email, password };
      const response = await axiosInstance.post("/login", data);

      if (response && !response.err) {
        console.log(response);
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });
        alert("Success");
        navigate("/homeIn");
      } else {
        alert("Failure");
      }
    } catch (error) {
      // Yup validation error handling
      console.error("Validation Error: ", error.errors);
      alert(" Please Enter Valid data.");
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="logo p-2 border-b  border-solid  w-full flex justify-center ">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-8 flex flex-col  ">
        <div className="font-bold mb-6 "> To Continue, login to Spotify!</div>
        <div>
          <InputText
            label="Email id or username"
            placeholder="Email id or username"
            value={email}
            setValue={setEmail}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <div className="justify-end mt-5 flex items-center ">
            <button
              className="bg-app-green font-semibold rounded-full p-2 px-4"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              LOG IN
            </button>
          </div>
          <div className="w-full border border-solid border-gray-300 mt-4"></div>
          <div className="my-4 font-semibold text-lg ">
            Don't have an account?
          </div>
          <div className="text-gray-500 border border-gray-400 w-full flex justify-center py-2 rounded-3xl font-semibold">
            <Link to="/signup">SIGN UP TO SPOTIFY!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
