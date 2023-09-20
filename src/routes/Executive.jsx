import { Footer, Navbar } from "../components";
import { FaLinkedin } from "react-icons/fa6";

export default function Executive() {

  const data = [
    { "name": "Dr.N.Venkateswaran", "role": "Chairman", "mail": "venkateswaran.iete@gmail.com" },
    { "name": "Dr. Tata Sudhakar", "role": "Immd Post Chairman", "mail": "" },
    { "name": "Mrs T J Jeyaprabha", "role": "Honarary Treasurer", "mail": "" },
    { "name": "Mr D Vijendrababu", "role": "EC Member", "mail": "" },
    { "name": "Dr Vaishali D", "role": "Co-opted Member", "mail": "" },
    { "name": "Mr Arun", "role": "Co-opted Member", "mail": "" },
    { "name": "Dr. K. Sumathi", "role": "Co-opted Member", "mail": "" },
  ]

  return (
    <>
      <Navbar />
      <div className="bg-lightcolor">
        <h1 className="text-5xl font-bold text-center py-16">
          COMMITEE MEMBERS
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar text-white">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">

            {data.map((value) => {
              return (<>
                <div className="inline-block px-3">
                  <div className="w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                    <h2 className="bg-black rounded-lg md:pt-24 pt-16 m-7 pb-28">
                      MEMBER IMAGE
                    </h2>
                    <h2 className="md:text-lg pb-3 font-bold">{value.name}</h2>
                    <h3 className="font-bold pb-2">{value.role}</h3>
                    <button className="font-medium m-4 text-xl py-6">
                      Linked
                      <FaLinkedin className="inline-block mb-1" />
                    </button>
                  </div>
                </div>
              </>)

            })}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
