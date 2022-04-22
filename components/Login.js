import Image from "next/image";

const Login = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen min-w-full bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027]">
      <div className="hidden lg:relative lg:inline flex-[0.4] border-r-4 border-gray-400 h-[100vh]">
        <Image
          src="https://images.unsplash.com/photo-1625314876522-a908c4c01167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="lg:flex-[0.6]  ">
        <div className="text-white lg:w-4/5 lg:mx-auto text-center p-5 space-y-6 shadow-lg rounded-lg shadow-gray-700 ">
          <Image
            src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-3xl font-medium">Welcome to Metaverse!</h1>
          <button className="text-lg font-bold  bg-amber-600 py-3 px-5 rounded-md">
            Hop In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
