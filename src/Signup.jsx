import * as React from "react";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function MyComponent() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSignUp = () => {
        // Validate form fields
        if (!username || !email || !phoneNumber || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Perform sign-up logic here
        // For demonstration purposes, let's just log the form data
        console.log({
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        });

        // Clear form fields after successful sign up
        setUsername('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <Navbar />

            <div className="flex flex-col rounded-2xl  bg-neutral-100 mb-[-10%]">
                <div className="flex flex-col self-center px-10 pt-6 pb-11 mt-14  text-sm rounded-2xl border border-solid shadow-sm bg-neutral-100 border-stone-300 text-zinc-500 w-[403px] max-md:px-5 max-md:mt-10">
                    <div className="mt-9 ml-[35%] font-bold text-2xl text-black">SIGN UP</div>
                    <div className="mt-9 font-medium text-black">Username*</div>
                    <input type="text" className="justify-center items-start px-5 py-5 h-10 mt-2.5 rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300 max-md:pr-5" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className="mt-5 font-medium text-black">Email* </div>
                    <input type="email" className="flex gap-3 px-4 py-3.5 mt-2 rounded-lg h-10 border border-solid bg-neutral-200 bg-opacity-0 border-stone-300" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="mt-5 font-medium text-black">Phone number* </div>
                    <input type="tel" className="justify-center items-start px-12 py-5 mt-2 h-10 rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300 max-md:px-5" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <div className="mt-4 font-medium text-black">Password*</div>
                    <input type="password" className="flex gap-5 justify-between px-5 py-3.5 h-10 mt-2 w-full whitespace-nowrap rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="mt-4 font-medium text-black">Confirm Password*</div>
                    <input type="password" className="flex gap-5 justify-between px-5 py-3.5 h-10 mt-2 w-full whitespace-nowrap rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit" className="justify-center items-center px-16 py-5 mt-8 text-sm font-semibold text-white rounded-lg border-0 border-white border-solid shadow-sm bg-violet-950 max-md:px-5">Sign up
                    </button>
                    <div className="flex justify-center mt-3.5 text-base text-violet-950">
                        Already have an account? <span className="font-bold cursor-pointer"><a href="./Login">Login</a></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyComponent;
