import { Button } from "@/components/button";
import { Link } from "react-router-dom";

import { BgWelcome } from "../asset";

import { LogoBrand } from "@/assets/logo";

const Welcome = () => {
  return (
    <div
      className="min-h-screen lg:pl-8 items-center flex justify-center lg:justify-start"
      style={{
        backgroundImage: `url(${BgWelcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md text-center font-mono p-10 bg-white/70 rounded-lg lg:p-0 lg:bg-white/0">
        {/* Logo & Brand */}
        <div className="mb-6">
          <img className="w-56 mx-auto" src={LogoBrand} alt="rzv Cafe" />
          <p className="text-sm  text-gray-600 mt-1">
            Fresh Brew, Warm Moments
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full justify-center gap-4 mb-8">
          <Link to="/home">
            <Button
              size={"lg"}
              className="w-full rounded-xl bg-aqua-deep-900 text-white font-semibold text-lg hover:bg-aqua-deep-950 hover:scale-110 active:scale-120 transition"
            >
              Customer
            </Button>
          </Link>

          <Link to="/login">
            <Button
              size={"lg"}
              className="w-full rounded-xl bg-gray-700 text-white font-semibold text-lg hover:bg-gray-900  hover:scale-110 active:scale-120 transition"
            >
              Employee
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-800">🕒 Open today 8 AM – 10 PM</p>
      </div>
    </div>
  );
};

export default Welcome;
