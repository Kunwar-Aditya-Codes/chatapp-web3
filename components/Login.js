import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-[url('https://images.unsplash.com/photo-1600998837340-4887228e311f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover bg-no-repeat bg-blend-color  bg-black/60">
      <div className="text-white lg:w-4/5 lg:mx-auto text-center p-5 space-y-6 lg:space-y-10    ">
        <h1 className="text-3xl text-center md:text-4xl lg:text-6xl font-serif ">
          Welcome to Metaverse!
        </h1>
        <button
          onClick={authenticate}
          className="text-lg lg:text-3xl lg:py-4 lg:px-10 hover:bg-fuchsia-500 transition ease-out  font-serif  border-4 border-fuchsia-400  bg-[#960ac1] py-3 px-5 rounded-md"
        >
          Hop In
        </button>
      </div>
    </div>
  );
};

export default Login;
