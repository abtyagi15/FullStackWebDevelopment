import React , {useState} from 'react';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData)=>({
            
                ...prevData,
                [event.target.name] : event.target.value 
            
        }));
    }
    function submitHandler(event){
        event.preventDefault();
        toast.success("Logged in");
        setIsLoggedIn(true);
        navigate("/dashboard");
    }
    
    return (
    <form onSubmit={submitHandler}
    className="flex flex-col gap-4 mt-6 w-full">
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
            >Email Address<sup className='text-pink-200'>*</sup></p>
            <input
                className='rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800'
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email address" 
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
            <input
                className='rounded-[0.5rem] w-full text-richblack-5 p-[12px] bg-richblack-800'
                type={showPassword ? ("text") : ("password")}
                name="password"
                required
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password" 
            />
            <span 
            className='absolute top-[38px] right-3 cursor-pointer '
            onClick={()=> setShowPassword((prev)=> !prev)}>
            {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2AF" />) : 
                (<AiOutlineEye fontSize={24} fill="#AFB2AF"/>)}</span>
            <Link to="#">
                <p className='text-blue-100 text-xs mt-1 max-w-max ml-auto '>Forget Password</p>
            </Link>
        </label>
        <button className='text-center bg-yellow-50  rounded-[8px] text-richblack-900 py-[8px] px-[12px] mt-7'>Sign In</button>
        
    </form>
  )
}

export default LoginForm