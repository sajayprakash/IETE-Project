import logo from "../assets/ietec-logo.png";
import { useState } from "react";
import menu from "../assets/menu.png"
export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <nav className="w-full flex bg-cyan-50 drop-shadow-md items-center font-bold">
      <div className="flex w-full flex-col  justify-between md:items-center items-start sm:items-start md:flex-row sm:flex-col">
        <div className="flex w-full justify-between">
          <div className="flex">
            <img
              src={logo}
              alt="ietec-logo"
              className="md:w-20 md:h-20 w-14 h-14 m-2"
            />
            <p className="text-xs mt-2 md:mt-6">
              The Institution Of Electronics and <br />
              Telecommunication Engineers, <br />
              Chennai
            </p>
          </div>

          <div className="md:hidden sm:block">
            <img onClick={handleToggleClick} src={menu} className="md:w-20 md:h-20 w-14 h-14 m-2"></img>
          </div>
        </div>
        <ul className="flex items-start flex-col text-xl md:gap-8 md:flex-row  sm:flex-col sm:items-start" >
          <div className={`${isToggled ? 'block md:block' : 'hidden md:block'}`}>
            <li className="pl-4 list-none  my-2 sm:my-2">
              <a className="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/">Home</a>
            </li>
          </div>
          <div className={`${isToggled ? 'block md:block' : 'hidden md:block'}`}>
            <li className="pl-4 list-none my-2 sm:my-2">
              <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/about">About</a>
            </li>
          </div>
          <div className={`${isToggled ? 'block md:block' : 'hidden md:block'}`}>
            <li className="pl-4 list-none my-2 w-56 sm:my-2">
              <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/executive">Executive Committee</a>
            </li>
          </div>
          <div className={`${isToggled ? 'block md:block' : 'hidden md:block'}`}>
            <li className="pl-4 list-none my-2 sm:my-2">
              <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/events">Events</a>
            </li>
          </div>
          <div className={`${isToggled ? 'block md:block' : 'hidden md:block'}`}>
            <li className="pl-4 list-none my-2 sm:my-2">
              <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/membership">Membership</a>
            </li>
          </div>
          <div className={`${isToggled ? 'block md:block' : 'hidden md:block'}`}>
            <li className="pl-4 list-none my-2 sm:my-2 pr-8">
              <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/contact">Contact</a>
            </li>
          </div>
        </ul>
        {/* <div className="w-10"><button>Chan</button></div> */}
      </div>

    </nav>
  );
}
