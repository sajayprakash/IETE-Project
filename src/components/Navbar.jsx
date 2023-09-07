import logo from "../assets/ietec-logo.png";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center font-bold justify-between">
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
      <ul className="md:flex md:text-2xl hidden mx-3">
        <li className="pl-4">
          <a href="/">Home</a>
        </li>
        <li className="pl-4">
          <a href="/about">About</a>
        </li>
        <li className="pl-4">
          <a href="/executive">Executive</a>
        </li>
        <li className="pl-4">
          <a href="/events">Events</a>
        </li>
        <li className="pl-4">
          <a href="/membership">Membership</a>
        </li>
        <li className="pl-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
