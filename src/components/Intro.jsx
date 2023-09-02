export default function Intro() {
  return (
    <>
      <div className="bg-gray-200 md:py-52 py-32 md:flex md:p-32">
        <h1 className="md:text-6xl md:m-36 pb-3 text-3xl text-center font-bold hover:bg-gradient-to-bl hover:from-sky-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:transition-colors hover:duration-500">
          Learning Today, <br />
          Leading Tomorrow
        </h1>
        <div className="md:pt-32 md:pl-20 pt-16">
          <h2 className="md:text-3xl md:pb-9 text-xl text-center pb-4 font-bold">
            Upcoming Events &amp; Updates
          </h2>
          <div className="bg-purple-gradient rounded-md md:max-w-md md:flex md:p-6 max-w-sm m-4 text-white">
            <p className="md:text-2xl font-bold text-center">30 MAY</p>
            <div className="md:pl-6 md:text-xl text-center">
              <p className="font-bold ">WEBINAR ON IOT SECURITY</p>
              <p className="text-sm">
                (WISE-2022) ORGANIZED BY SETS CHENNAI &amp; C-DAC HYDERABAD IN
                COLLABORATION WITH ISEA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-gradient text-white font-bold md:p-16 p-8">
        <h1 className="md:text-4xl md:max-w-5xl">
          "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR
          NEW INDIA"
          <p className="md:text-sm text-gray-400">
            - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
          </p>
        </h1>
        <p className="pt-16 md:max-w-5xl">
          Chennai Centre of IETE is committed to attain commanding heights and
          achieve the status of “Centre of Excellence” in Technical, Engineering
          & Management education by harnessing the best practices in educational
          innovation and through its concerted endeavors like quality teaching,
          industrial consultancy and training to the aspirants including
          corporate training.
        </p>
        <button className="rounded-sm bg-white text-black mt-4 p-1">
          Read More
        </button>
      </div>
    </>
  );
}
