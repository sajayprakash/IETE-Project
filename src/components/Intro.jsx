import modi from "/assets/modi.png";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Intro() {
  return (
    <>
      <div className="bg-lightcolor md:flex">
        <h1 className="md:text-6xl md:m-36 pb-3 pt-12 text-3xl text-center font-bold hover:bg-gradient-to-bl hover:from-sky-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:transition-colors hover:duration-500">
          Learning Today, <br />
          Leading Tomorrow
        </h1>
        <div className="md:pt-32 md:pl-20 md:mt-10 pt-16">
          <h2 className="md:text-3xl sm:pb-9 md:pb-9 text-xl text-center pb-4 font-bold">
            Upcoming Events &amp; Updates
          </h2>
          <button
            className="bg-purple-gradient hover:scale-105 transition-all rounded-md p-4 sm:p-8 sm:flex sm:flex-row sm:m-auto md:max-w-md md:flex md:p-6 max-w-sm m-4 text-white"
            onClick={() => {
              location.href = "/events";
            }}
          >
            <p className="md:text-2xl font-bold text-center">30 MAY</p>
            <div className="md:pl-6 md:text-xl text-center">
              <p className="font-bold ">WEBINAR ON IOT SECURITY</p>
              <p className="text-sm">
                (WISE-2022) ORGANIZED BY SETS CHENNAI &amp; C-DAC HYDERABAD IN
                COLLABORATION WITH ISEA
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="bg-lightcolor">
        <h2 className="sm:text-m sm:m-auto pt-10 text-xl pb-8 p-14 bg-lightcolor">
          {" "}
          {/*md:max-w-7xl */}
          Chennai Centre of IETE is committed to attain commanding heights and
          achieve the status of “Centre of Excellence” in Technical, Engineering
          & Management education by harnessing the best practices in educational
          innovation and through its concerted endeavors like quality teaching,
          industrial consultancy and training to the aspirants including
          corporate training.
        </h2>
        <button
          className="sm:mt-0 sm:p-3 rounded-sm mb-5 text-white text-xl ml-14  md:px-8 p-4 bg-black hover:scale-105 transition-all"
          onClick={() => {
            location.href = "/about";
          }}
          
        >
          Read More <IoArrowForwardOutline className="ml-2 inline-block mb-1" />
        </button>
      </div>
      <div className="bg-purple-gradient text-white font-bold  flex justify-between">
        <div>
          <h1 className="md:text-4xl p-8 md:p-16  md:max-w-5xl">
            "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR
            NEW INDIA"
            <p className="md:text-sm text-gray-400">
              - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
            </p>
          </h1>
        </div>
        <img
          className="md:w-60 hidden md:h-60 w-14 h-14 md:block"
          src={modi}
        ></img>
      </div>
    </>
  );
}
