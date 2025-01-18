import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
      const {title, img, price}= service;
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
            <button className="btn "><FaArrowRight className="text-3xl text-orange-500"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
