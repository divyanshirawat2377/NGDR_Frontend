import * as React from "react";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function MyComponent() {
    const [name, setname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !email || !phone || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('https://ngd-backend.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Sign-up successful:', data);
                alert('Sign-up successful!');
                // Clear form fields after successful sign up
                setUsername('');
                setEmail('');
                setPhoneNumber('');
                setPassword('');
                setConfirmPassword('');
            } else {
                if(response.status===409){ 
                    alert("User Already Exist")
                    return
                }
                const errorData = await response.json();
                console.error('Sign-up failed:', errorData);
                alert('Sign-up failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />

            <div className="flex flex-col rounded-2xl  bg-neutral-100 mb-[-10%]">
                <div className="flex flex-col self-center px-10 pt-6 pb-11 mt-14  text-sm rounded-2xl border border-solid shadow-sm bg-neutral-100 border-stone-300 text-zinc-500 w-[403px] max-md:px-5 max-md:mt-10">
                    <div className="mt-9 ml-[35%] font-bold text-2xl text-black">SIGN UP</div>
                    <form onSubmit={handleSignUp}>
                        <div className="mt-9 font-medium text-black">Username*</div>
                        <input type="text" className="justify-center items-start px-5 py-5 h-10 mt-2.5 rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300 max-md:pr-5" value={name} onChange={(e) => setname(e.target.value)} />
                        <div className="mt-5 font-medium text-black">Email* </div>
                        <input type="email" className="flex gap-3 px-4 py-3.5 mt-2 rounded-lg h-10 border border-solid bg-neutral-200 bg-opacity-0 border-stone-300" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="mt-5 font-medium text-black">Phone number* </div>
                        <input type="tel" className="justify-center items-start px-12 py-5 mt-2 h-10 rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300 max-md:px-5" placeholder="0987654321" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <div className="mt-4 font-medium text-black">Password*</div>
                        <input type="password" className="flex gap-5 justify-between px-5 py-3.5 h-10 mt-2 w-full whitespace-nowrap rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="mt-4 font-medium text-black">Confirm Password*</div>
                        <input type="password" className="flex gap-5 justify-between px-5 py-3.5 h-10 mt-2 w-full whitespace-nowrap rounded-lg border border-solid bg-neutral-200 bg-opacity-0 border-stone-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit" className="justify-center items-center px-16 py-5 mt-8 text-sm font-semibold text-white rounded-lg border-0 border-white border-solid shadow-sm bg-violet-950 max-md:px-5">Sign up</button>
                    </form>
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
