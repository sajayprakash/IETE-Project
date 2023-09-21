import { Footer, Navbar } from "../components";
import Map from "../assets/map.png";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-lightcolor ">
      <div className="md:flex md:mx-10 mx-4 py-14 justify-between">
        <div className="pb-4">
          <h1 className="font-bold text-5xl text-center">Contact us for more</h1>
          <p className="font-normal pt-10 text-xl pl-2 text-center">
            Fill out this form and we will get back to you shortly!
          </p>
          <form action="" className="flex flex-col pt-8 md:mx-0 git mx-12 max-w-md ">
            <input
              type="text"
              placeholder="Contact Name"
              className="m-4 border-b-2 border-black "
            />
            <input
              type="number"
              placeholder="Contact Phone"
              className="m-4 border-b-2 border-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="m-4 border-b-2 border-black"
            />
            <input
              type="text"
              placeholder="Let's talk about your idea"
              className="m-4 mb-8 border-b-2 border-black "
            />
            <input
              type="submit"
              value="Submit"
              className="bg-purple-gradient p-4 text-white rounded-lg md:mx-36 mx-20"
            />
          </form>
        </div>
        <div className=" flex flex-col text-sm text-center">
          <img src={Map} alt="Map Image" className="border border-gray-600" />
          <p className="pt-4">
            IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters
            Road,Gopalapuram,Chennai, Tamil Nadu 600086
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
