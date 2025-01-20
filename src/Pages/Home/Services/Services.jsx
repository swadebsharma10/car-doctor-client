import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
      const [services, setServices] = useState([]);

      useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data =>{
                  setServices(data);
                  // console.log(data)
            })
      },[])

      return (
            <div className="mb-12">
                 <div className="max-w-4xl mx-auto text-center space-y-5 pb-6">
                  <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                  <h2 className="text-5xl font-bold">Our Services Area</h2>
                  <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div> 

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                              services.map(service => <ServiceCard
                              key={service._id}
                              service={service}
                              ></ServiceCard>)
                        }
                  </div>
            </div>
      );
};

export default Services;