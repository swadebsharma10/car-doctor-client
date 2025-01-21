import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTab from "./BookingTab";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-2xl text-orange-500 font-bold text-center my-6">
        Bookings Service here !!
      </h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                    SL
                  </label>
                </th>
                <th>Name/Service</th>
                <th>Email Address</th>
                <th>Date</th>
                <th>Price</th>
                <th>Remarks/Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingTab key={booking._id}
                 booking={booking}></BookingTab>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
