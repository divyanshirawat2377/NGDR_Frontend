import { Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="text-6xl mx-40px font-semibold ml-20 mt-20">National <br />Geospatial <br />Data</div>
            <div className="text-base font-sans-normal ml-20 mt-5">It is a long established fact that a reader will be <br />
                distracted by the readable content of a page <br />when looking at its layout.</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20 mt-5">
                <Link to="/login">Get Started</Link>
            </button>

            <div className="flex mt-20">
                <div className="bg-gray-300 rounded w-96 max-h-full ml-20 h-svh">
                    <div className="font-bold mt-20 ml-20">Message From Head</div>
                    <p className="mt-32 mx-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo commodi! Optio, sed
                        nesciunt! Similique rerum maxime ducimus incidunt! Rerum aspernatur quas minima facilis?</p>
                </div>

                <div className="ml-10 px-50 bg-gray-300 rounded w-3/4 h-svh">
                    <div className="font-bold ml-20 mt-20">Welcome To NGD</div>
                    <p className="mt-10 w-50 ml-20 mr-20">Survey of India, the National Mapping organization was established in 1767. In the last two 
                        and a quarter centuries the entire country has been mapped with utmost dedication and
                        hard work by a distinguished line of surveyors.<br /><br />Post-independence India, the developmental activities and need for defence preparedness brought urgent need to impart training to officers and staff in various aspects of surveying
                        and mapping with state-of-the-art technologies. With this objective, the Centre for Survey Training and Map Production was established at Hyderabad in 1967 with a Human Resource
                        Development Institute within Survey of India under technical assistance from United Nations Development Programme (UNDP). The IIS&M, recently renamed as Indian Institute of
                        Surveying & Mapping (IIS&M) thus raised on 6th May, 1967 is now recognized as the prestigious training institute established in the field of Surveying and Cartography to impart
                        training to the Officers and the Staff of Survey of India and other Government Organisations,Private Individuals, and Scholars from other Afro-Asian countries.
                        <br /><br />The Institute also conducts M.Tech (Geomatics) and M.Sc. (Geospatial Science) Academic two-year Post Graduate Programme in collaboration with Jawaharlal Nehru Technical
                        University, Hyderabad. Many students of earlier batches have been absorbed in various scientific organizations.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 ml-20">Click to View Structure of NGD</button>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
