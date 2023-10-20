import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title,image_url,details,_id} =news;
    return (
        <div>
            <div className="mb-7">
            <h2 className="mb-5 text-2xl text-black font-semibold">{title}</h2>
            <img className="mb-5 w-full lg:h-96" src={image_url} alt="" />
            {
                details.length >200
                ? <p className="mb-5 text-black"><span>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-red-600 font-bold">Read more...</Link> </span></p>:
                <p className="mb-5 text-black"><span>{details}</span></p>
            }

            <hr />
            

            </div>
            
        </div>
    );
};

export default NewsCard;