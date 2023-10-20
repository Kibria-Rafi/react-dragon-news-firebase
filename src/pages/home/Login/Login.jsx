import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Login = () => {
    const handleLogin =e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    return (
        <div className="bg-[#F3F3F3] h-[700px]">
            <Navbar></Navbar>
            <div className="">
         <form onSubmit={handleLogin} className="bg-white p-12 md:w-3/4 lg:w-1/2 mx-auto">
         <h2 className="text-3xl font-bold  text-black text-center mb-6">Login Your Account</h2>
         <hr className="mb-6" />
         <div className="form-control">
          <label className="label ">
            <span className="label-text  font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" className="bg-[#F3F3F3] input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="bg-[#F3F3F3] input input-bordered" required name="password"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] btn-primary">Login</button>
          <p className="text-center mt-3 text-black"> Do not have an account? <Link className="text-red-600 font-bold" to="/register">Register</Link></p>
        </div>
         </form>
            </div>
        </div>
    );
};

export default Login;