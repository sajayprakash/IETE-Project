import { Navbar, Footer } from "../components";
import play from '../assets/play.png'
import vision from '../assets/vision.webp'
import motive from '../assets/motive.png'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-lightcolor">
        <div className="bg-lightcolor text-center font-bold md:mx-14 mx-4 pb-10">
          <h1 className="md:text-5xl text-3xl py-6">IETE</h1>
          <p className=" font-normal  md:text-base">
            Founded in 1953, the Institution of Electronics and Telecommunication
            Engineers (IETE) is a leading professional society. Its vision is to
            reach the unreached and empower the youth through Technical Education
            and Skill development with a Mission for Advancement of Electronics,
            Telecommunication, Information Technology & other related disciplines;
            to contribute in Nation's Human Resource & Infrastructure Development
            through our Engineers & Scientists. The Government of India, Ministry
            of Science and Technology, Department of Scientific & Industrial
            Research has recognized IETE as a Scientific and Industrial Research
            Organization (SIRO). The Institution has also been notified as an
            Educational Institution of National Eminence by the Government of
            India. IETE is governed by its elected Governing Council headed by an
            elected President. It has on its roll the Secretary General – the head
            of IETE Secretariat as Chief Executive. The Institution is managed
            through various Committees and Boards nominated by the Governing
            Council. The 63 Centers are spread all over India 02 abroad and are
            managed by respective Executive Committees. To keep pace with
            technological development and achieve the mission, it organizes
            conferences, conventions, symposia, seminars, workshops, publications
            and brain storming sessions for continued knowledge upgradation of its
            members.
          </p>
          <h1 className="md:text-5xl text-3xl py-6">CHENNAI CENTER</h1>
          <p className=" font-normal md:text-base">
            Chennai Centre of IETE is committed to attain commanding heights and
            achieve the status of “Centre of Excellence” in Technical, Engineering
            & Management education by harnessing the best practices in educational
            innovation and through its concerted endeavors like quality teaching,
            industrial consultancy and training to the aspirants including
            corporate training.The Centre assigns top priority to the basic need
            for 'education transformation' in keeping pace with time, and aims at
            to develop the highest quality of manpower to cater to the needs &
            expectations of industry, R&D and educational institutions, with
            higher degree of employability for today and tomorrow
          </p>
          <h1 className="md:text-5xl text-3xl py-6">GOALS</h1>
          {/* <ul className="text-left">
            <li className="py-2">
              Vision:{" "}
              <br></br>
              <p className="font-normal inline-block">
                Reaching the un-reached and empowering the youth through Technical
                Education and Skill Development.
              </p>
            </li>
            <li className="py-2">
              Mission:{" "}
              <p className="font-normal inline-block">
                Advancement of Electronics, Telecommunication, Information
                Technology & other related disciplines to contribute in Nation’s
                Human Resource & Infrastructure Development through our Engineers
              </p>
            </li>
            <li className="py-2">
              Motives:{" "}
              <p className="font-normal inline-block">
                IETE is helping it's students to learn and grow in the emerging
                field of Electronics and Telecommunication. One of the missions of
                IETE is to provide the best mode of studying a Btech degree
                programme.
              </p>
            </li>
          </ul> */}

          <div className="flex md:flex-row flex-col items-center md:justify-center gap-8">
            <div className="rounded-3xl bg-white w-96 flex flex-col items-start p-4" style={{backgroundImage:'url(/src/assets/vision.webp)',backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
              <div className="h-40"></div>
              <div className="bg-white rounded-3xl ml-2 shadow-lg h-12 p-4 gap-2 mb-8 flex items-center">
                <button className="">Vision</button>
                <img className="w-6 h-6" src={play}></img>
              </div>
              <p className="text-white uppercase text-xs w-80 h-20 pb-4 text-left">Reaching the un-reached and empowering the youth through Technical
                Education and Skill Development.</p>
            </div>
            <div className="rounded-3xl bg-white w-96 flex flex-col items-start p-4" style={{backgroundImage:'url(/src/assets/vision.webp)',backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
              <div className="h-40"></div>
              <div className="bg-white rounded-3xl ml-2 shadow-lg h-12 p-4 gap-2 mb-8 flex items-center">
                <button className="">Mission</button>
                <img className="w-6 h-6" src={play}></img>
              </div>
              <p className="text-white uppercase text-xs h-20 w-80 pb-4 text-left">Advancement of Electronics, Telecommunication, Information
                Technology & other related disciplines to contribute in Nation’s
                Human Resource & Infrastructure Development through our Engineers</p>
            </div>
            <div className="rounded-3xl bg-white w-96 flex flex-col items-start p-4" style={{backgroundImage:'url(/src/assets/motive.png)',backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
              <div className="h-40"></div>
              <div className="bg-white rounded-3xl ml-2 shadow-lg h-12 p-4 gap-2 mb-8 flex items-center">
                <button className="">Motives</button>
                <img className="w-6 h-6" src={play}></img>
              </div>
              <p className="text-white uppercase h-20 text-xs w-80 pb-4 text-left">IETE is helping it's students to learn and grow in the emerging
                field of Electronics and Telecommunication. One of the missions of
                IETE is to provide the best mode of studying a Btech degree
                programme.</p>
            </div>
          </div>


        </div>
        <div className="sm:flex sm:text-3xl sm:gap-4  flex justify-center text-center md:text-5xl text-xl md:gap-4 gap-2 mx-1 md:mx-36  ">
          <div className="bg-purple-gradient text-white rounded-3xl md:p-8 p-3 w-80">
            <h3 className="font-bold">
              12060 <br />
              <h2 className=" text-xl"> STUDENTS</h2>

            </h3>
          </div>
          <div className="bg-purple-gradient text-white rounded-3xl md:p-8 p-2 w-80">
            <h3 className="font-bold">
              13592<br />
              <h2 className=" text-xl"> STAFFS</h2>
            </h3>
          </div>
          <div className="bg-purple-gradient text-white rounded-3xl md:p-8 p-2 w-80">
            <h3 className="font-bold">
              42 <br />
              <h2 className=" text-xl"> EVENTS</h2>
            </h3>
          </div>
          <div className="bg-purple-gradient text-white rounded-3xl md:p-8 p-2 w-80">
            <h3 className="font-bold">
              15 <br />
              <h2 className=" text-xl"> COLLEGES</h2>
            </h3>
          </div>


        </div>
        <div className="md:text-3xl pt-10">
          <h1 className="pb-8 text-3xl  md:mx-14 mx-4">List of Colleges</h1>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-purple-gradient hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h2 className="bg-black rounded-lg text-white md:pt-24 pt-16 m-3 pb-28">
                    COLLEGE LOGO
                  </h2>
                  <h2 className="md:text-lg pb-8 font-semibold text-white">
                    COLLEGE NAME
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
