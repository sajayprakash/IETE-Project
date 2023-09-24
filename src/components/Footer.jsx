import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoShareSocialOutline,
} from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
export default function Footer() {
  return (
    <footer className="bg-purple-gradient text-white font-bold md:p-16 p-4">
      <div className="md:flex md:justify-between">
        <div className="md:max-w-md">
          <h1 className="md:text-6xl text-4xl pb-8 md:text-left text-center">
            IETE CHENNAI
          </h1>
          <p className="">
            IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters
            Road,Gopalapuram, Chennai, Tamil Nadu 600086
          </p>
          <form
            className="bg-white flex justify-between mt-8 p-2 pr-0 rounded-md max-w-sm"
            onSubmit={() => {
              window.alert("You will soon receive mails from us!");
            }}
          >
            <input
              type="email"
              placeholder="Enter email"
              className="rounded-sm text-black focus:outline-none p-2"
              required
            />
            <input
              type="submit"
              className="rounded-lg bg-black mr-3 md:p-3 p-2 md:ml-10 hover:cursor-pointer"
              value={"Subscribe"}
            />
          </form>
        </div>
        <div className="flex font-light md:text-2xl md:mr-44 pt-6 justify-between">
          <div className="md:pr-32">
            <h2 className="font-bold mb-2">Useful links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/executive">Executive</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Socials</h2>
            <ul>
              <li>
                <a href="">
                  <div className="flex gap-2 items-center">
                    <BsLinkedin></BsLinkedin>
                    LinkedIn
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex gap-2 items-center">
                    <IoShareSocialOutline></IoShareSocialOutline>
                    Social
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex gap-2 items-center">
                    <IoLogoYoutube></IoLogoYoutube>
                    YouTube
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex gap-2 items-end">
                    <IoLogoInstagram />
                    Instagram
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className="flex gap-2 items-center">
                    <BiSolidContact></BiSolidContact>
                    Contact
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
