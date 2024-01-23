import { Icon } from "@iconify/react";
import { PasswordInput } from "../../components/shared/PasswordInput.jsx";
import { InputText } from "../../components/shared/TextInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axios.jsx";
import { object, string } from "yup";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  // Yup validation schema
  const signUpSchema = object({
    email: string().email("Invalid email format").required("Email is required"),
    confirmEmail: string()
      .email("Invalid email format")
      .required("Confirm email is required")
      .test("emails-match", "Emails must match", function (value) {
        return this.parent.email === value;
      }),
    userName: string().required("Username is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
  });

  const signUp = async () => {
    try {
      // Validate form data against the Yup schema
      await signUpSchema.validate(
        { email, confirmEmail, userName, password, firstName, lastName },
        { abortEarly: false }
      );

      // If validation passes, proceed with sign-up
      const data = { email, password, userName, firstName, lastName };
      const response = await axiosInstance.post("/register", data);

      if (response && !response.err) {
        console.log(response);
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });
        alert("Success");
        navigate("/home");
      } else {
        alert("Failure");
      }
    } catch (error) {
      // Yup validation error handling
      console.error("Validation Error: ", error.errors);
      alert("Please enter valid data.");
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="logo p-2 border-b border-solid w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-8 flex flex-col">
        <div className="font-bold mb-6 text-lg ">Sign Up for listening!</div>
        <div>
          <InputText
            label="Email address"
            placeholder="Enter your email"
            className="my-6"
            value={email}
            setValue={setEmail}
          />
          <InputText
            label="Confirm Email address"
            placeholder="Enter your email again"
            value={confirmEmail}
            setValue={setConfirmEmail}
          />
          <InputText
            label="Username"
            placeholder="Enter your username"
            value={userName}
            setValue={setUserName}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter 8 character strong Password"
            value={password}
            setValue={setPassword}
          />
          <div className="w-full flex justify-between items-center space-x-6">
            <InputText
              label="First Name"
              placeholder="Enter your first name"
              className="my-6"
              value={firstName}
              setValue={setFirstName}
            />
            <InputText
              label="Last name"
              placeholder="Enter your last name"
              className="my-6"
              value={lastName}
              setValue={setLastName}
            />
          </div>
          <div className="justify-end mt-5 flex items-center">
            <button
              className="bg-app-green font-semibold rounded-full p-2 px-4"
              onClick={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              SIGN UP
            </button>
          </div>
          <div className="w-full border border-solid border-gray-300 mt-4"></div>
          <div className="my-4 font-semibold text-lg ">
            already have an account?
          </div>
          <div className="text-gray-500 border border-gray-400 w-full flex justify-center py-2 rounded-3xl font-semibold">
            <Link to="/login">LOG IN NOW!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
