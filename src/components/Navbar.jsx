import logo from "../assets/ietec-logo.png";
export default function Navbar() {
  return (
    <nav className="w-full flex items-center font-bold justify-between">
      <div className="flex">
        <img src={logo} alt="ietec-logo" className="w-20 pr-2" />
        <p className="text-xs py-2">
          The Institution Of Electronics and <br />
          Telecommunication Engineers, <br />
          Chennai
        </p>
      </div>
      <ul className="flex text-2xl ">
        <li className="pl-4">Home</li>
        <li className="pl-4">About</li>
        <li className="pl-4">Executive</li>
        <li className="pl-4">Events</li>
        <li className="pl-4">Membership</li>
        <li className="pl-4">Contact</li>
      </ul>
    </nav>
  );
}
