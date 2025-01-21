import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
      const {user, loading} = useContext(AuthContext);
      if(loading){
            return <div className="text-center my-10"><span className="loading loading-ring text-primary loading-md"></span></div>
      }

      if(user){
            return children;
      }
      return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;