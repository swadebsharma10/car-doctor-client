import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './../../Provider/AuthProvider';

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const {_id, title, price} = service;

  const handleBookService =e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    
    const order ={
      customerName:name,
      customerEmail: email,
       date,
       price: price,
       serviceTitle: title,
       service_id: _id,
      };
    console.log(order)
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl text-center font-bold my-6">
        Booked Service :{" "}
        <span className="text-secondary ">{title}</span>
      </h2>

      <div className="card bg-base-100 w-full  shadow-2xl">
        <form onSubmit={handleBookService} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Due Amount"
              className="input input-bordered"
              required
            />
          </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-secondary">Order Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
