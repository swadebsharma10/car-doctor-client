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
        setBookings(data);
      });
  }, []);

  const handleDelete = (id)=>{
      const proceed = confirm('Are you sure want to Delete ?');
      if(proceed){
          fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
          }) 
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount > 0){
                  alert('Deleted Successfully');
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining)
            }
          })
      }
}

const handleConfirm =(id)=>{
  const proceed = confirm('Are you sure want to Confirm ?');
  if(proceed){
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})

    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.modifiedCount >0){
        alert('Update booking data')
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm';
        const newBookings = [updated, ...remaining];
        setBookings(newBookings)

      }
    })
  }
}

  return (
    <div className="mb-16">
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
                <BookingTab
                 key={booking._id}
                 booking={booking}
                 handleDelete={handleDelete}
                 handleConfirm={handleConfirm}
                 ></BookingTab>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
