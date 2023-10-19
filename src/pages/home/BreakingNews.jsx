import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#bab3b3] p-2 text-black">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
  I can be a React component, multiple React components, or just some text.
  <Link className="mr-12" to="/">I can be a React component, multiple React components........</Link>
  
  <Link className="mr-12" to="/">I can be a React component, multiple React components........</Link>
  
  <Link className="mr-12" to="/">I can be a React component, multiple React components........</Link>
  
  <Link className="mr-12" to="/">I can be a React component, multiple React components........</Link>
  
</Marquee>
        </div>
    );
};

export default BreakingNews;