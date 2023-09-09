import { Footer, Navbar } from "../components";

export default function Events() {
  return (
    <>
      <Navbar />
      <div>
        <div className="border-4 rounded-lg border-violet-500  m-16 text-center">
          <h2 className="font-bold text-2xl">
            Webinar on IoT Security(WISE-2022)
          </h2>
          <h2 className="font-semibold py-4">on 30th May, 2022</h2>
          <h3 className="py-4">
            SETS Chennai & C-DAC Hyderabad in collaboration with ISEA
          </h3>
          <p className="py-4">
            All interested members are requested to register at the following
            link to participate in the webinar
          </p>
          <button className="bg-purple-gradient text-white p-2 px-4 rounded-lg">
            Weblink
          </button>
          <p className="py-4 font-semibold">
            Participation certificate will be issued to all the registered
            participants after attending all the sessions.
          </p>
        </div>
        <div className="border-4 rounded-lg border-violet-500  m-16 text-center">
          <h2 className="font-bold text-2xl">
            IETE CHENCON 2022 - Call for Papers{" "}
          </h2>
          <h2 className="font-semibold py-4">on 30th May, 2022</h2>
          <h3 className="py-4">Hybrid Mode- MAY 20 & 21, 2022 </h3>
          <p className="py-4">
            "International Conference on Power of Artificial Intelligence and
            Machine Learning for Human Empowerment"
          </p>

          <div className="flex justify-center gap-4 text-white py-8">
            <button className="bg-purple-gradient p-2 rounded-lg">
              PDF Brochure
            </button>
            <button className="bg-purple-gradient p-2 rounded-lg">
              Inagural Session
            </button>
            <button className="bg-purple-gradient p-2 rounded-lg">
              ChenCon 2022
            </button>
          </div>
          <div className="bg-black mx-64 py-44 rounded-lg ">
            <h1 className="text-white text-4xl">IMAGE</h1>
          </div>
          <div className="py-4 mx-4 text-left">
            <h1 className="font-bold">Scope of the Conference</h1>
            <p className="py-8 font-semibold">
              Recently, the use of AI/ML technology has been exponentially
              increasing in our daily lives. AI/ML applications represent an
              important evolution in computer science and data processing that
              is quickly transforming a vast array of domains. IETE CHENCON 2022
              provides vibrant opportunities for the delegates to exchange new
              ideas, applications, practical challenges encountered and to
              leverage AI and ML technologies. The technical program of the
              conference will consist of invited key note talks and paper
              presentations. IETE CHENCON 2022 accepts technical paper
              presentation from research scholars, faculty, students and
              industry professionals in emerging areas of AI and ML applications
              but not limited to:
            </p>
          </div>
          <p className="py-4 font-semibold">
            Participation certificate will be issued to all the registered
            participants after attending all the sessions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
