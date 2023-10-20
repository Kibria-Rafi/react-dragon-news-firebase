import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";


const About = () => {
    return (
        <div className="bg-white p-10 h-[700px]">
            <Header></Header>
            <Navbar></Navbar>
            <div className="text-center">
            <h2 className="text-black font-semibold text-2xl">This News website Developed by <span className="text-red-700">G.M kibria Rafi</span></h2>
            <h2 className="text-black font-semibold text-xl">Contact us: 
                <button className="btn btn-success"><a href="https://github.com/kibria-Rafi">Github </a> </button>
            </h2>
            </div>
            
        </div>
    );
};

export default About;