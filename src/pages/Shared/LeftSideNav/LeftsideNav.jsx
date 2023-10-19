import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftsideNav = () => {
    const [catagries,setcatagories]= useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setcatagories(data))
    },[])
    return (
        <div className="space-y-6 text-black">
            <h2 className="text-2xl">All Categories</h2>
            {
                catagries.map(categries=><Link to={`categories/${categries.id}`} className="block ml-4 font-semibold" key={categries.id}>{categries.name}</Link>)
            }
        </div>
    );
};

export default LeftsideNav;