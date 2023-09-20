import news1 from "../assets/news1.png"
import news2 from "../assets/news2.png"
import news3 from "../assets/news3.png"
import { useState } from 'react'

export default function Activities() {

  const [search, setSearch] = useState("")
  const data = [
    { "image": "", "title": "PROFESSIONAL RESUME WRITING", "date": "27th October, 2020 (Saturday)", "desc": "  Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer)gave a guidance session on RESUME building in a Professional manner" },
    { "image": "", "title": "PROFESSIONAL RESUME WRITING", "date": "27th October, 2020 (Saturday)", "desc": "  Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer)gave a guidance session on RESUME building in a Professional manner" },
    { "image": "", "title": "PROFESSIONAL RESUME WRITING", "date": "27th October, 2020 (Saturday)", "desc": "  Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer)gave a guidance session on RESUME building in a Professional manner" },
    { "image": "", "title": "PROFESSIONAL RESUME WRITING", "date": "27th October, 2020 (Saturday)", "desc": "  Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer)gave a guidance session on RESUME building in a Professional manner" },
    { "image": "", "title": "PROFESSIONAL RESUME WRITING", "date": "27th October, 2020 (Saturday)", "desc": "  Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer)gave a guidance session on RESUME building in a Professional manner" }
  ]
  // "/src/assets/Executive_comitttee/arun.jpeg"
  return (
    <>
      <>
        <div class=" pt-12 bg-lightcolor relative flex flex-row md:pr-16 pr-4  justify-end overflow-hidden">
          <div class="relative rounded-3xl bg-white  ring-1 ring-gray-900/5 ">
            <div>
              <form action="" class="relative">
                <input type="search" onChange={(e) => setSearch(e.target.value)}
                  class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
            </div>
          </div>
        </div>

      </>



      <div id='activities' className="md:p-16 md:pt-4 md:pb-4 bg-lightcolor">
        <h1 className="sm:ml-8 md:text-5xl text-3xl pb-8 pt-2 text-gray-700 font-bold md:pb-10">
          <center>Recent Activities</center>
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">

            {data.filter((item) => {
              return search.toLowerCase() == ''
                ? item
                : ((item.title.toLowerCase().includes(search)) | (item.desc.toLowerCase().includes(search)) | ((item.date.toLowerCase().includes(search))));
            })
              .map((item) => {

                return <>
                  <div className="inline-block px-3">
                    <div className="w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                      <img className="w-80 h-70 py-8" src={item.image} />
                      <h2 className="md:text-lg pb-8 font-bold">
                        {item.title}
                      </h2>
                      <h3 className="font-bold pb-2">
                        {item.date}
                      </h3>
                      <p className="text-gray-600 font-medium pb-16 m-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </>
              })}

          </div>
        </div>
      </div>

      <div className="md:p-16 bg-lightcolor">
        <h1 className="sm:ml-8 md:text-5xl text-3xl pb-8 text-gray-700 font-bold md:pb-10">
          <center>News Letters</center>
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div className="inline-block px-3">
              <div className="w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl hover:border-black hover:border-4 transition-shadow duration-300 ease-in-out text-center">
                <a target="_blank" href="http://ietechennai.in/assets/pdf/chenlink1_1.pdf"><img src={news1}></img></a>
              </div>
            </div>

            <div className="inline-block px-3">
              <div className="w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl hover:border-black hover:border-4 transition-shadow duration-300 ease-in-out text-center">
                <a target="_blank" href="http://ietechennai.in/assets/pdf/chenlink1_2.pdf"><img src={news2}></img></a>
              </div>
            </div>

            <div className="inline-block px-3">
              <div className="w-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl hover:border-black hover:border-4 transition-shadow duration-300 ease-in-out text-center">
                <a target="_blank" href="http://ietechennai.in/assets/pdf/chenlink1_3.pdf"><img src={news3}></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
