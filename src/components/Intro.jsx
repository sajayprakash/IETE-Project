export default function Intro() {
  return (
    <>
      <div className="bg-gray-200 py-52 md:flex md:p-32">
        <h1 className="md:text-6xl md:p-32 text-3xl text-center font-bold ">
          Learning Today, <br />
          Leading Tomorrow
        </h1>
        <div className="md:pt-32 pt-16">
          <h2 className="md:text-3xl md:pb-9 text-xl pb-4 font-bold">
            Upcoming Events &amp; Updates
          </h2>
          <div className="bg-blue-700 rounded-md md:max-w-md md:flex md:p-6 max-w-sm text-white">
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
    </>
  );
}
