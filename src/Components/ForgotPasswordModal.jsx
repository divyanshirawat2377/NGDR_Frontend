import { useState } from "react";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function Forget() {
    const [phone, setPhone] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOTP] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Phone:', phone);
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone }),
            });
            if (response.ok) {
                setShowOTP(true);
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Failed to submit form. Please try again later.");
        }
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        console.log('OTP:', otp);
        // Add your OTP verification logic here
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phone, otp }),
            });
            if (response.ok) {
                window.alert("OTP verified successfully!");
                // Redirect or perform any other action after successful OTP verification
            } else {
                throw new Error("Failed to verify OTP");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Failed to verify OTP. Please try again later.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center mt-[5%] ">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>
                    </div>
                    {!showOTP ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <h1 className="text-lg">Please enter your Phone no.</h1>
                                <input type="tel" id="phone" name="phone" value={phone} maxLength="10" placeholder="7685647326" pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} required className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex justify-between">
                                <button className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"><a href="/Login">Back to Login</a></button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleOTPSubmit}>
                            <div className="mb-4">
                                <h1 className="text-lg">Please enter the OTP sent to your phone</h1>
                                <input type="text" id="otp" name="otp" value={otp} maxLength="6" placeholder="123456" pattern="[0-9]{6}" onChange={(e) => setOTP(e.target.value)} required className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex justify-between">
                                <button className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2" onClick={() => setShowOTP(false)}>Back</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Verify OTP</button>
                            </div>
                        </form>
                    )}
                    <div className="mt-4 text-center">
                        <h1>Dont have an account? <a href="/Signup" className="text-blue-600">Sign up</a></h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Forget;
