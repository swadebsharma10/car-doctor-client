import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const {logInUser} = useContext(AuthContext)

      const handleLogin = e =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            // console.log(email, password)
            logInUser(email, password)
            .then(result =>{
                  const user = result.user;
                  console.log('log', user)
            })
            .catch(error =>{
                  console.log(error.message)
            })
      }

  return (
    <>
      <div className="hero  min-h-[700px] mb-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2 mr-10">
           <img src={img} alt="Logo" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold text-orange-500">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='text-center py-4'>New to carDoctor? <Link className='text-orange-600' to='/signup'>Signup</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
