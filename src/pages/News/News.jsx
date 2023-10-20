import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";


const News = () => {
    return (
        <div className="bg-white p-10">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-black font-bold text-3xl text-center">Please Wait a minute.....</h1>
                </div>
                <div>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;