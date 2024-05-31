import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ngd-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          rememberMe,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Navigate to the desired page after successful login
        navigate('/DMS');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const generateCaptcha = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#*';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    setCaptchaText(captcha);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === captchaText) {
      alert('CAPTCHA verified. You can proceed.');
      setIsCaptchaVerified(true);
    } else {
      alert('CAPTCHA verification failed. Please try again.');
      setIsCaptchaVerified(false);
      generateCaptcha();
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password"); // Navigate to the Forgot Password page
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <div className="self-center mt-20 w-[100%] max-md:mt-10 ml-[31%] mb-[-10%]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col ml-10 w-[30%] mb-0 ">
            <form onSubmit={handleLogin} className="flex flex-col grow p-10 mx-auto w-full text-sm rounded-2xl border border-solid shadow-sm bg-neutral-100 border-stone-300 text-zinc-500 max-md:px-5 ml-6">
              <div className="mt-9 ml-[35%] font-bold text-2xl text-black">LOGIN</div>
              <div className="mt-8 font-medium text-black">
                E-mail or Username*
              </div>
              <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter email or username "
                className="justify-center items-start px-5 py-5 mt-2.5 rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300 max-md:pr-5 h-5"
              />
              <div className="mt-5 font-medium text-black">Password*</div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"
                className="flex gap-5 px-5 py-3.5 mt-2 h-10 w-full whitespace-nowrap rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300"
              />
              <div className="flex mt-5 text-neutral-700">
                <div className="flex flex-1 gap-0.5">
                  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="cursor-pointer" />
                  <div className="my-auto">Remember me</div>
                </div>
                <div className="cursor-pointer" onClick={handleForgotPasswordClick}><a href="Forget">Forgot Password?</a></div> 
              </div>
              <div className="mt-6 ml-[8%] rounded-lg border-0 border-white border-solid shadow-sm bg-gray-400 w-[80%] h-10">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="captcha" className="text-xl ml-[35%]">{captchaText}</label>
                </form>
              </div>
              <input type="captcha"
                placeholder="Enter Captcha"
                className="flex gap-5 px-5 py-3.5 mt-2 h-10 w-full whitespace-nowrap rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300"
                onChange={handleInputChange}
                value={userInput}
              />
              <a href="./DMS"><button type="submit" className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold text-white rounded-lg border-0 border-white border-solid shadow-sm bg-violet-950 max-md:px-5 ml-[25%]">
                Log in
              </button></a>
              <div className="self-center mt-14 text-base text-violet-950 max-md:mt-10">
                <span className="">Don’t have an account?</span>
                <span className="font-bold text-violet-950"><a href="./Signup">Sign up</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
