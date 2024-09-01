// eslint-disable-next-line react/prop-types
const Login = ({ openSignUp }) => {
  return (
    <div className="mb-4">
      <h2 className="text-3xl font-bold items-center justify-center mb-4">
        Login
      </h2>
      <form action="" className="">
        <div>
          <label htmlFor="" className="mb-4 text-gray-700 ">
            Email
          </label>
          <input
            type="Email"
            name="Email"
            placeholder="Re-enter Your Email"
            className="w-full px-3 py-2 border border-none"
          />
        </div>
        <div>
          <label htmlFor="" className="mb-4 text-gray-">
            Password
          </label>
          <input
            type="Password"
            name="Password"
            placeholder="Re-enter Your Password"
            className="w-full px-3 py-2 border border-none mb-2"
          />
        </div>
        <div className="md-4 flex items-center justify-between mb-4 ">
          <label htmlFor="" className="inline-flex items-center ">
            <input type="checkbox" name="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700 ">Remember Me</span>
          </label>
          <a href="#" className="ml-2 text-gray-700">
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 mb-4"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Donot Have An Account</span>
        <button type="submit" className="text-red-800 ml-2"
        onClick={openSignUp}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
