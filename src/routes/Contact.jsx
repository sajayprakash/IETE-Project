import { Footer, Navbar } from "../components";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-lightcolor ">
        <div className="md:flex md:mx-10 mx-4 py-14 justify-between">
          <div className="pb-4">
            <h1 className="font-bold text-5xl text-center">
              Contact us for more
            </h1>
            <p className="font-normal pt-10 text-xl pl-2 text-center">
              Fill out this form and we will get back to you shortly!
            </p>
            <form
              action=""
              className="flex flex-col pt-8 md:mx-0 git mx-12 max-w-md "
            >
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
            <iframe
              className="b-0 w-full h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7079564886867!2d80.25558021413603!3d13.054252116592973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663edc820433%3A0x9d3202883a213b07!2sInstitute%20of%20Electronics%20and%20Telecommunication%20Engineers!5e0!3m2!1sen!2sin!4v1609237251098!5m2!1sen!2sin"
              frameborder="0"
              allowfullscreen
            ></iframe>
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
