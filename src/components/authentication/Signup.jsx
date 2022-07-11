import React, {useState} from "react";
import {toast} from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        const mail = e.target.value;
        setEmail(mail);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email){
            toast.error('Email is required!')
        }
    }

    const verificationForm = () => <form onSubmit={handleSubmit}>
        <input className="border-0 border-b-[1.5px] border-[#77dd77] pb-[4px] text-base w-[300px] outline-none" type="email" name="email" placeholder="Enter your email..." value={email} onChange={handleChange} autoFocus/> <br />
        <button className="text-[#77dd77] mt-6 border-[1.5px] border-[#77dd77] py-[4px] px-[13px] bg-white rounded-full text-[16px] hover:bg-[#77dd77] hover:text-white" type="submit">
            Verify
        </button>
    </form>

    return (
        <div className="flex w-4/5 m-auto">
            <div className="flex-1">
                <img src="images/signup.png" alt="Sign Up" />
            </div>
            <div className="flex-1 m-auto ml-10">
                <h1 className="text-3xl font-semibold mb-6 text-[#77dd77]">Welcome! Verify Your Mail First</h1>
                {verificationForm()}
            </div>
        </div>
    )
}

export default Signup;