import { Footer, Navbar } from "../components";
import { FaLinkedin } from "react-icons/fa6";

export default function Executive() {

  const data = [
    { "image": "/src/assets/Executive_comitttee/Venkateswaran.jpg", "name": "Dr.N.Venkateswaran", "role": "Chairman", "mail": "venkateswaran.iete@gmail.com", "link": "" },
    { "image": "/src/assets/Executive_comitttee/tata.jpeg", "name": "Dr. Tata Sudhakar", "role": "Immd Post Chairman", "mail": "tatasudhakar@gmail.com", "link": "" },
    { "image": "/src/assets/Executive_comitttee/jeya.jpg", "name": "Mrs T J Jeyaprabha", "role": "Honarary Treasurer", "mail": "jprabha@svce.ac.in", "link": "" },
    { "image": "/src/assets/Executive_comitttee/vj.jpg", "name": "Mr D Vijendrababu", "role": "EC Member", "mail": "dvijendrababu@gmail.com", "link": "" },
    { "image": "/src/assets/Executive_comitttee/arun.jpeg", "name": "Shri S Arun Kumar", "role": "EC Member", "mail": "arunsundar.s@cvrde.drdo.in", "link": "" },
    { "image": "/src/assets/Executive_comitttee/vaishali.jpg", "name": "Dr Vaishali D", "role": "Co-opted Member", "mail": "vaishali.b@vdp.srmuniv.ac.in", "link": "" },
    { "image": "/src/assets/Executive_comitttee/Mrarun.jpeg", "name": "Mr Arun", "role": "Co-opted Member", "mail": "snatarajan1967@gmail.com", "link": "" },
    { "image": "/src/assets/Executive_comitttee/sumathi.jpeg", "name": "Dr. K. Sumathi", "role": "Co-opted Member", "mail": "sumathi.ece@sairam.edu.in", "link": "" },
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
                    <img className="p-4 w-80 h-80" src={value.image}></img>
                    <h2 className="md:text-lg pb-3 font-bold">{value.name}</h2>
                    <h3 className="font-bold pb-2">{value.role}</h3>
                    <h3 className="font-bold pb-2">{value.mail}</h3>
                    <button className="font-medium m-4 text-xl py-3">
                      <a href={value.link}> Linked
                        <FaLinkedin className="inline-block mb-1" />
                      </a>
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
