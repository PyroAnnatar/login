import React from "react";

const App = () => {
  return (
    <div className="relative overflow-hidden h-screen w-screen">
      <div className="z-[-1] bg-[#DA211C] absolute -top-44 -right-80 h-[1600px] w-[900px] rotate-[28deg] overflow-hidden">
        {" "}
      </div>
      <img
        src="/image 2.png"
        alt=""
        className="z-[0] absolute right-28  top-1/2 -translate-y-1/2"
      />

      <div className="absolute left-6 bottom-60 p-4 w-1/4">
        <h1 className="text-8xl font-bold text-transparent  mb-6">LOGIN</h1>

        <div className="flex flex-col gap-4 text-xl">
          <input
            type="text"
            className="border-[1px] border-black/25 py-3 px-4"
            placeholder="Username"
          />
          <input
            type="password"
            className="border-[1px] border-black/25 py-3 px-4"
            placeholder="Password"
          />
          <button className="bg-[#DA211C] text-white font-bold uppercase text-center py-3 px-2 text-xl self-start w-1/2">
            Login
          </button>
          <div className="flex justify-between font-semibold w-3/4 text-lg">
            <a href="#">Forgot Password</a>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
