import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
      const {_id,title, img, price}= service;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={title}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
         
          <div className="card-actions flex justify-between items-center">
          <p className="text-xl text-orange-600">Price: ${price}</p>
           <Link to={`/checkout/${_id}`}>
           <button className="btn "><FaArrowRight className="text-3xl text-orange-500"/></button>
           </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
