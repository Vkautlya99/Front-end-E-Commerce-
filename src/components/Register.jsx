// eslint-disable-next-line react/prop-types
const Register = ({ openLogin }) => {
  return (
    <div className="mb-4">
      <h2 className="text-3xl font-bold items-center justify-center mb-4">
        SignUp
      </h2>
      <form action="" className="">
        <div>
          <label htmlFor="" className="mb-4 text-gray-700 ">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type Your Name.."
            className="w-full px-3 py-2 border border-none mb-3"
          />
        </div>
        <div>
          <label htmlFor="" className="mb-4 text-gray-700 ">
            Email
          </label>
          <input
            type="Email"
            name="Email"
            placeholder="Re-enter Your Email"
            className="w-full px-3 py-2 border border-none mb-3"
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
            className="w-full px-3 py-2 border border-none mb-4"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            SignUp
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Allready Have An Account</span>
        <button type="submit" className="text-red-800 ml-2"
        onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
