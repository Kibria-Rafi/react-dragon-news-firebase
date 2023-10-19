import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div className="text-black">
      <div className="p-4">
      <h2 className="text-3xl mb-4">Login With</h2>
        <button className="p-4 flex text-lg border rounded-t-lg items-center" href="">
            <FcGoogle className="mr-2"></FcGoogle>
            Login with google</button>
        <button className="p-4 flex text-lg border-x items-center" href="">
            <FaGithub className="mr-3"></FaGithub>
            Login with github</button>
        
      </div>
      <div className=" p-4 mb-6  ">
        <h2 className="text-3xl mb-4">Find us on</h2>
        <a className="p-4 flex text-lg border rounded-t-lg items-center" href="">
            <FaFacebookSquare className="mr-3"></FaFacebookSquare>
            Facebook</a>
        <a className="p-4 flex text-lg border-x items-center" href="">
            <FaTwitter className="mr-3"></FaTwitter>
            Twitter</a>
        <a className="p-4 flex text-lg border rounded-b-lg items-center" href="">
            <FaInstagram className="mr-3"></FaInstagram>
            Instagram</a>
         
      </div>
      {/* q zone */}
      <div className=" p-4 mb-6  ">
        <h2 className="text-3xl mb-4">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
         
      </div>
    </div>
  );
};

export default RightSideNav;
