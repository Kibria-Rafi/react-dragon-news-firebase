import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftSideNav/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="lg:col-span-2">
                    <h2>News comming soon</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;