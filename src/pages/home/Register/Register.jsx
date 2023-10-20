import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Register = () => {

    const {createUser} =useContext(AuthContext )


    const handregister = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password =e.target.password.value;
        console.log(name,photo,email,password);

        //create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })  
        .catch(error=>{console.error(error)})

    }
    return (
        <div className="bg-[#F3F3F3] h-[700px]">
            <Navbar></Navbar>
            <div className="">
         <form onSubmit={handregister} className="bg-white p-12 md:w-3/4 lg:w-1/2 mx-auto">
         <h2 className="text-3xl font-bold  text-black text-center mb-6">Register your account</h2>
         <hr className="mb-6" />
         <div className="form-control">
          <label className="label ">
            <span className="label-text  font-bold">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="bg-[#F3F3F3] input input-bordered" name="name" required />

        </div>
         <div className="form-control">
          <label className="label ">
            <span className="label-text  font-bold">Photo URL</span>
          </label>
          <input type="text" placeholder="Your Photo URL" className="bg-[#F3F3F3] input input-bordered" name="photo" required />

        </div>
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
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] btn-primary">Login</button>
          <p><input type="checkbox" name="checkbox" id="" />Accept Term & Conditions</p>
          <p className="text-center mt-3 text-black"> Already have an account? <Link className="text-red-600 font-bold" to="/login">Login</Link></p>
        </div>
         </form>
            </div>
        </div>
    );
};

export default Register;