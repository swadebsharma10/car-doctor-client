const BookingTab = ({booking}) => {
      const {img, _id, serviceTitle
            , customerName, email, price, date}= booking;
  return (
    <tr className="hover:bg-gray-300">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingTab;
