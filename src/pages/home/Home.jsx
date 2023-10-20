import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftSideNav/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div className="bg-white p-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="lg:col-span-2">
                    {
                        news.map(anews=><NewsCard key={anews._id} news ={anews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;