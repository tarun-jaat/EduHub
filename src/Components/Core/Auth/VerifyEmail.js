import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../../../Services/Operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {

  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {                // Only allow access of this route when user has filled the signup form
     if(!signupData) navigate("/signup");
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { accountType,  firstName, lastName, email, password, confirmPassword, } = signupData;

    dispatch(
      signUp( accountType,  firstName, lastName, email, password, confirmPassword,  otp, navigate )
      )
  };


  return (

    <div className="h-[100vh] bg-primary grid place-items-center">
      { loading ? ( <div className="spinner"></div> ) : (
       
            <div className="max-w-[500px] p-4 lg:p-8  bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-hite ">

              <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"> Verify Email </h1>
              <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100"> A verification code has been sent to you. Enter the code below </p>
                
              <form onSubmit={handleVerifyAndSignup}>

                <OtpInput value={otp} onChange={setOtp} numInputs={6}                      // this otp box conatiner is copied from internet  
                  renderInput = {(props) => (
                    <input {...props}  placeholder="-"  style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}  className="w-[48px] lg:w-[60px] border-0 bg-richblue-5 rounded-[0.5rem] text-primary aspect-square text-center focus:border-0 focus:outline-2 focus:outline-secondary"  />
                        )}
                  containerStyle = {{ justifyContent: "space-between", gap: "0 6px", }} 
                />
                <button type="submit" className="w-full bg-secondary py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-white"> Verify Email </button>
                
              </form>

              <div className="mt-6 flex items-center justify-between">
                <Link to="/signup">
                  <p className="text-richblack-5 flex items-center gap-x-2"> <BiArrowBack /> Back To Signup </p>
                </Link>
                <button className="flex items-center text-blue-100 gap-x-2" onClick={() => dispatch(sendOtp(signupData.email , navigate))}> <RxCountdownTimer /> Resend it </button>          
              </div>
              <p className=" m-5 text-white bg-secondary rounded-xl bg-opacity-10 p-2"><span className="bg-yellow-100 font-bold   text-black p-1 rounded-lg m-1">Note :</span>If you haven't received the verification email, please check your spam folder or click the button above to resend it.
</p>

            </div>
           )
       }
    </div>
  
)}


export default VerifyEmail;