import logo from "../assets/ietec-logo.png";
export default function Navbar() {
  return (
    <nav className="w-full flex  items-center font-bold">
      <div className="flex w-full justify-between items-center">
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

        <li className="pl-4 list-none">
          <a className="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/">Home</a>
        </li>
        <li className="pl-4 list-none">
          <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/about">About</a>
        </li>
        <li className="pl-4 list-none">
          <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/executive">Executive</a>
        </li>
        <li className="pl-4 list-none">
          <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/events">Events</a>
        </li>
        <li className="pl-4 list-none">
          <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/membership">Membership</a>
        </li>
        <li className="pl-4 list-none">
          <a class="hover:text-blue-700 hover:transition-colors hover:duration-200" href="/contact">Contact</a>
        </li>

        <div className="w-10"></div>
      </div>

    </nav>
  );
}
