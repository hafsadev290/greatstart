import Link from "next/link"
import React from "react"
// import referral from '../public/images/portrait.png'

const TimelineCustom = () => {
  return (



    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-8 text-center">
        <h2 id='exp' className="text-4xl font-bold text-red-600">Professional Experiences</h2>
      </li>

      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-red-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
          <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fillRule="evenodd" d="M320 344c0 74.98-61.02 136-136 136H103.6c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25c5.922 17.77 22.48 29.7 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41C45.39 239.3 48.66 225.3 58.38 216.4l131.4-120.4H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19l-131.4 120.4H184C258.1 208 320 269 320 344z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Python Developer at <a
          href="https://www.numericway.net/"
          className="font-bold transition-colors hover:text-orange-500" target="_blank"
          rel="noopener">&nbsp;NumericWay</a><span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3">Latest</span><span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3">Internship &amp; Freelance</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From April 20th, 2021 To September 30th, 2021</time>
        <p className="mb-4 text-base font-normal text-justify text-gray-500 dark:text-gray-400">In this mission, I was in charge of developing, testing and deploying a list of complicated scrapers. </p>
        <p className="mb-4 text-base font-normal text-justify text-gray-500 dark:text-gray-400">Their main purpose was to collect data from a given list of website, and then store that data into a remote server, including some media, which were downloaded to the same server. </p>
        <p className="mb-4"><span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Python</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Selenium</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Scrapy</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Requests</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">CronJob</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Ubuntu</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">VS Code</span></p>
        {/* <a href='#' target={"_blank"} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-red-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" clipRule="evenodd"></path></svg> Referral</a> */}
      </li>




      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-red-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
          <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fillRule="evenodd" d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Junior Data Scientist at <a
          href="https://ma.linkedin.com/in/soft-centre-a5159540"
          className="font-bold transition-colors hover:text-orange-500" target="_blank"
          rel="noopener">&nbsp;SoftCentre</a>
          <span className="bg-red-100 ml-2 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800">Internship</span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From February 2020 To August 2020</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          
            <span className="block">Determination of the functionalities necessary for the project. </span>
            <span className="block">Web Scraping comments from a website using a Python script.</span>
            <span className="block">Implementation of different clustering models: K-Means, GMM, Spectral Clustering, Affinity Propagation and many
              others.</span>
          
        </p>

        <p className="my-4"><span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Python</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Requests</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Pandas</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Numpy</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Scikit-learn</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">FastAPI</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Jupyter Notebook</span></p>


      </li>




      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-red-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
          <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fillRule="evenodd" d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">.Net Developer at Registration Centre
          <span className="bg-red-100 ml-2 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800">Freelance</span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From December 2017 To February 2018</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">My main missions in this internship:
          
            <span className="block">1. Project analysis and design, using UML and MERISE methods. </span>
            <span className="block">2. Application development through ASP.NET.</span>
            <span className="block">3. Deployment on client machines, centralizing data on a single machine (using MS Access as DBMS).</span>
          
        </p>
        <p className="my-4"><span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">C#</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">.NET Framework</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">SQL Server</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">UML</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">MERISE</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-1 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-1">Visual Studio</span>
        </p>
      </li>

    </ol>



  );
}

export default TimelineCustom;