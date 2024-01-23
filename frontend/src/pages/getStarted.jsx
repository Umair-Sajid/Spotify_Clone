import React from "react";
import { Link } from "react-router-dom";

const GetStartedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-black text-white animate-fade-in">
      <div className="text-center">
        <h1 className="text-5xl  mb-6 font-bold">Welcome to Spotify!</h1>
        <p className="text-lg mb-8">
          Get ready to experience something amazing. Sign up now!
        </p>
        <Link to="/signup">
          <button className="bg-white text-green-600 hover:text-white  hover:bg-green-600 font-semibold py-2 px-6 rounded-full transition-all">
            Sign up
          </button>
        </Link>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className=" from-green-600 font-semibold text-green-300 hover:text-white"
          >
            Log in here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GetStartedPage;
