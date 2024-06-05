import yticon from '../assets/icons8-youtube-48.png';
import mail from '../assets/icons8-mail-94.png';
import phone from '../assets/icons8-phone-48.png';
import twitter from '../assets/icons8-twitter-48.png';
import location from '../assets/Location.png';
import VisitorCount from '../Components/VisitorCount';

function Footer() {
    return (
        <div className="flex flex-wrap gap-16 px-16 py-14 mt-52 w-full bg-zinc-800 max-md:px-5 max-md:mt-0">
            <div className="flex-auto flex flex-col items-start max-md:w-full">
                <div className="text-2xl font-bold text-yellow-400 mb-10">
                    Contact Us
                </div>
                <div className="flex flex-col gap-5 text-lg text-gray-100">
                    <div className="flex items-center">
                        <img src={location} alt="Location Icon" className="w-10 h-10 mr-3" />
                        <a href='https://www.google.co.in/maps/search/Additional+Surveyor+General,+Survey+of+India,+Uppal,Hyderabad+500039,+Telangana,+INDIA/@23.801418,71.880283,6z?entry=ttu' className='text-base'>
                            Additional Surveyor General, Survey of India, <br/>Uppal, Hyderabad 500039, Telangana, INDIA
                        </a>
                    </div>
                    <div className="flex items-center">
                        <img src={phone} alt="Phone Icon" className="w-10 h-10 mr-4" />
                        <a href="tel:+91-40-27201181" className='text-base'>+91-40-27201181, </a>
                        <a href="tel:+91-40-27201185" className='text-base'>+91-40-27201185, </a>
                        <a href="tel:+91-40-27201186" className='text-base'>+91-40-27201186</a>
                    </div>
                    <div className="flex items-center">
                        <img src={mail} alt="Mail Icon" className="w-10 h-10 mr-4" />
                        <a href="mailto:iism.soi@gov.in" className='text-base'>iism.soi@gov.in</a>
                    </div>
                    <div className="flex gap-5 mt-8 text-4xl text-white">
                        <img src={yticon} alt="YouTube Icon" />
                        <img src={twitter} alt="Twitter Icon" className="text-red-600" />
                    </div>
                </div>
            </div>

            <div className="flex-auto flex flex-col items-start max-md:w-full">
                <div className="text-2xl font-bold text-yellow-400 mb-10">
                    Quick Links
                </div>
                <div className="flex flex-col gap-6 text-lg text-gray-100">
                    <div>Tenders</div>
                    <div>Sitemap</div>
                    <div>Grievances</div>
                    <div>FAQ</div>
                </div>
                <div className="mt-20 text-2xl font-bold text-yellow-400 max-md:mt-10">
                    <VisitorCount />
                </div>
            </div>

            <div className="flex-auto flex flex-col items-start max-md:w-full">
                <div className="text-2xl font-bold text-yellow-400 mb-10">
                    Important Links
                </div>
                <div className="flex flex-col gap-6 text-lg text-white mr-[-100px]">
                    <div>National Portal of India</div>
                    <div>SOI Online Maps Portal</div>
                    <div>NRSC</div>
                    <div>NIC Bharat Maps</div>
                    <div>IIRS</div>
                    <div>UNGGIM Portal</div>
                    <div>UNGGIM-AP Portal</div>
                    <div>DigitalSky-Airspace Map</div>
                    <div>Department of Science and Technology</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
