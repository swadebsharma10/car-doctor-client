import { MdDeleteForever } from "react-icons/md";

const BookingTab = ({booking, handleDelete, handleConfirm}) => {
      const {img, _id, serviceTitle, customerName, email, price, date, status}= booking;



  return (
    <tr className="hover:bg-gray-100">
      <th>
        <label>
       <button onClick={()=>handleDelete(_id)}> <MdDeleteForever  className="text-2xl text-orange-500"/></button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  h-20 w-20">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">CustomerName: {customerName}</div>
            <div className="text-sm opacity-50">Service: {serviceTitle}</div>
          </div>
        </div>
      </td>
      <td>
        Email: {email}
      </td>
      <td>Date: {date}</td>
      <td>Price: ${price}</td>
      <th>
       { status === 'confirm' ? <button className="btn btn-primary btn-xs">Confirmed</button> : <button onClick={()=> handleConfirm(_id)} className="btn btn-secondary btn-xs">Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingTab;
