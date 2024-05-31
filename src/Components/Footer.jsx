
import yticon from '../assets/icons8-youtube-48.png';
import mail from '../assets/icons8-mail-94.png';
import phone from '../assets/icons8-phone-48.png';
import twitter from '../assets/icons8-twitter-48.png';
import location from '../assets/Location.png';
import VisitorCount from '../Components/VisitorCount';
function Footer() {
    return (
        <div className="flex gap-5 px-16 py-14 mt-52 w-full bg-zinc-800 max-md:flex-wrap max-md:px-5 max-md:mt-[0%] ">
            <div className="flex-auto self-start max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col my-auto leading-[150%] mb-[118px] w-[400px] ">
                            <div className="text-2xl font-bold text-yellow-400 mt-[-410px]">
                                Contact Us
                            </div>
                            <div className="flex gap-5 mt-16 text-lg leading-7 text-gray-100 max-md:flex-wrap max-md:mt-10">
                                <div className="flex items-center flex-auto my-auto max-md:max-w-full">
                                    <img src={location} alt="My Image" className='w-10 h-10 mr-3 text-base'/>
                                    <a href='https://www.google.co.in/maps/search/Additional+Surveyor+General,+Survey+of+India,+Uppal,Hyderabad+500039,+Telangana,+INDIA/@23.801418,71.880283,6z?entry=ttu' className='text-base'>
                                    Additional Surveyor General, Survey of India, Uppal,Hyderabad 500039, Telangana, INDIA
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-5 mt-6  font-700 text-gray-100 whitespace-nowrap max-md:flex-wrap">
                                <div className="flex items-center flex-auto my-auto max-md:max-w-full">
                                    <img src={phone} alt="My Image" className='w-10 h-10 mr-4'/><a href="tel: +91-40-27201181" className='text-base'> +91-40-27201181, </a>
                                    <a href="tel:  +91-40-27201185," className='text-base'>+91-40-27201185, </a>
                                    <a href="tel: +91-40-27201186" className='text-base'> +91-40-27201186. </a>
                                </div>
                            </div>

                            <div className="flex gap-5 self-start mt-2.5  font-700 text-gray-100 whitespace-nowrap">
                                <div className="flex items-center flex-auto my-auto">
                                    <img src={mail} alt="My Image" className='w-10 h-10 mr-4'/><a href="mailto: iism.soi@gov.in" className='text-base'> iism.soi@gov.in</a>
                                </div>
                            </div>

                            <div className="flex gap-5 justify-between mt-8 ml-6 max-w-full text-4xl leading-9 whitespace-nowrap w-[125px] max-md:ml-2.5">
                                <div><img src={yticon} alt="My Image"/></div>
                                <div className="text-red-600"><img src={twitter} alt="My Image"/></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col max-md:ml-0 max-md:w-full mr-[220px]">
                        <div className="flex flex-col grow text-sm- leading-8 text-gray-100 max-md:mt-10">
                            <div className="text-2xl font-bold leading-9 text-yellow-400">
                                Quick Links
                            </div>
                            <div className="mt-16 max-md:mt-10">Tenders</div>
                            <div className="mt-6">Sitemap</div>
                            <div className="mt-5">Grievances</div>
                            <div className="mt-7">FAQ</div>
                            
                            <div className="mt-20 text-2xl font-bold leading-9 text-yellow-400 max-md:mt-10">
                                <VisitorCount/>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-xl leading-7 text-white">
                <div className="text-2xl font-bold text-yellow-400">
                    Important Links
                </div>
                <div className="mt-14 leading-[151%] text-base font-700 max-md:mt-10">
                    National Portal of India
                </div>
                <div className="mt-6 text-base font-700">SOI Online Maps Portal</div>
                <div className="mt-5 text-base font-700">NRSC</div>
                <div className="mt-6 text-base font-700">NIC Bharat Maps</div>
                <div className="mt-5 text-base font-700">IIRS</div>
                <div className="mt-6 text-base font-700">UNGGIM Portal</div>
                <div className="mt-6 text-base font-700">UNGGIM-AP Portal</div>
                <div className="mt-6 text-base font-700">DigitalSky-Airspace Map</div>
                <div className="mt-5 text-base font-700">Department of Science and Technology</div>
            </div>
        </div>
    );
}
export default Footer;