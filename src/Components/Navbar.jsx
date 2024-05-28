import { Link } from 'react-router-dom';
import Search from '../Components/Search';

function Navbar() {
    return (
        <div>
            <div className="flex gap-5 justify-between px-5 pt-2 pb-6 w-full bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between self-start mt-3"></div>
                <div className="flex flex-col">
                    <div className="flex flex-row ">
                        <Link to="/login" className="flex gap-2 self-end px-4 py-2.5 text-base font-medium text-white whitespace-nowrap rounded-lg bg-violet-900 hover:bg-violet-950 mr-5 ml-[30%]">
                            Login
                        </Link>
                        <Link to="/signup" className="flex gap-2 self-end px-4 py-2.5 text-base font-medium text-white whitespace-nowrap rounded-lg bg-violet-900 hover:bg-violet-950">
                            Sign up
                        </Link>
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-4 h-12 w-full text-xl font-medium text-white bg-neutral-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-10 w-full">
                    <Link to="/" className="text-lg leading-8 hover:cursor-pointer ml-[25%]">Home</Link>
                    <Link to="/about" className="leading-[167%] text-lg hover:cursor-pointer ml-20">About NGD</Link>
                    <Link to="/projects" className="leading-[164%] text-lg hover:cursor-pointer ml-20">Projects</Link>
                    <Link to="/contact" className="text-lg leading-8 hover:cursor-pointer ml-20">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
