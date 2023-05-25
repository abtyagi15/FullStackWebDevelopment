import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType,setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState({
    showCreatedPassword: false,
    showConfirmPassword: false,
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    toast.success("Account is created");
    setIsLoggedIn(true);
    navigate("/dashboard");
  }
  const accountData = {
    ...formData,
  }
  const finalData = {
    ...accountData,
    accountType
  }
  console.log("Printing all the data");
  useEffect(() => {
    console.log(finalData);
  })
  return (
    <div>
      <div className="flex gap-x-1 bg-richblack-800 rounded-full max-w-max">
        <button onClick={()=> setAccountType("student")} className={`${accountType ==="student" ? 
        "bg-richblack-900 text-richblack-5" :
        "bg-transparent text-richblack-200"} py-2 my-1 px-5 rounded-full transition-all duration-200 `}>Student</button>
        <button
            className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : 
            "bg-transparent text-richblack-200" } py-2 my-1 px-5 rounded-full transition-all duration-200 `}
            onClick={()=> setAccountType("instructor")}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between gap-5 mt-3">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800"
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              placeholder="Enter first name"
              onChange={changeHandler}
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800"
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              placeholder="Enter last name"
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className="mt-3">
          <label className="w-full mt-[2rem]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800"
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="Enter email id"
              onChange={changeHandler}
            />
          </label>
        </div>

        {/*create and confirm password*/}
        <div className="flex justify-between gap-5 mt-3">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800"
              type={showPassword.showCreatedPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              placeholder="Enter Password"
              onChange={changeHandler}
            />
            <span
              className="absolute top-[38px] right-3 cursor-pointer"
              onClick={() =>
                setShowPassword(() => ({
                  showCreatedPassword: !showPassword.showCreatedPassword,
                }))
              }
            >
              {showPassword.showCreatedPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2AF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2AF" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800"
              type={showPassword.showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={changeHandler}
            />
            <span
              className="absolute top-[38px] right-3 cursor-pointer"
              onClick={() =>
                setShowPassword(() => ({
                  showConfirmPassword: !showPassword.showConfirmPassword,
                }))
              }
            >
              {showPassword.showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2AF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2AF" />
              )}
            </span>
          </label>
        </div>
        <button className="text-center bg-yellow-50  rounded-[8px] text-richblack-900 py-[8px] px-[12px] mt-10 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
