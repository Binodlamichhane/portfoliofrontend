
import React,{useEffect} from "react";

import { Link, useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import profile from "../assets/image/binodphoto.jpg";
import skillimage from "../assets/image/skillsimage.png";
import languageimage from "../assets/image/languagesiconimage.png";
import interesticon from "../assets/image/interesticon.png";
import codingicon from "../assets/image/codingicon.png";
import sporticon from "../assets/image/sportsicon.png";
import readingicon from "../assets/image/readingicon.png";
import musicicon from "../assets/image/musicicon.png";
import mobileicon from "../assets/image/mobileicon.png";
import emailicon from "../assets/image/emailicon.png";
import locationicon from "../assets/image/locationicon.png";
import linkedicon from "../assets/image/linkedicon.png";
import githubicon from "../assets/image/githubicon.png";
import experienceicon from '../assets/image/experienceicon.png';
import educationicon from '../assets/image/educationicon.png';
import projecticon from '../assets/image/projecticon.png';
import introductionicon from '../assets/image/introductionicon.png';
import { resumeboserver } from "./utility/animateintersection.js";
import { observer } from "./utility/animateintersection.js";
function Resume() {
  const color = {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    border: "2px solid transparent" /* Set the initial border */,
    borderColor: "red" /* Add transition for a smooth effect */,
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const elementsToObserve = document.querySelectorAll('.blackanimi');
    elementsToObserve.forEach((element) => {
    resumeboserver.observe(element);
  });  
  const elementsToObserve2 = document.querySelectorAll('.test');
  elementsToObserve2.forEach((element) => {
    observer.observe(element);
});  
  }, [pathname]);
  return (
    <>
      <Header />
      <div className="  md:w-3/4 md:flex  m-auto">
        <div id="first-section" className=" mx-7 md:mx-0 md:w-1/4 bg-[#41827f]  border-r-[10px]  rounded-tr-lg  border-orange-300 border-t-4" >
          <div className=" m-6 ">
            <img
              src={profile}
              className="h-20 w-20 rounded-md outline-orange-300 outline m-auto my-6 blackanimi"
            />
            <div className="flex blackanimi">
              <img
                src={skillimage}
                className="h-7 w-7 md:mr-[10%]"
                style={{ filter: "invert(100%)" }}
              />
              <p className=" font-bold text-xl text-white font-binod ">
                Skills
              </p>
            </div>
            <div className="flex flex-wrap blackanimi">
              <p className="border rounded-md w-min m-1 p-1 ">CSS</p>
              <p className="border rounded-md w-min m-1 p-1">HTML</p>
              <p className="border rounded-md w-min m-1 p-1">REACTJS</p>
              <p className="border rounded-md w-min m-1 p-1">NODEJS</p>
              <p className="border rounded-md w-min m-1 p-1">JAVASCIRPT</p>
              <p className="border rounded-md w-min m-1 p-1">MONGODB</p>
              <p className="border rounded-md w-min m-1 p-1">EXPRESS</p>
              <p className="border rounded-md w-min m-1 p-1">SQL</p>
              <p className="border rounded-md w-min m-1 p-1">ReactNative</p>
              
            </div>
            <div className=" mt-4 flex blackanimi ">
              <img
                src={languageimage}
                className=" h-7 w-7 sm:mr-[10%] "
                style={{ filter: "invert(100%)" }}
              />
              <p className=" font-bold text-xl text-white font-binod  ">
                Language
              </p>
            </div>
            <div>
              <p>English</p>
              <div className="flex blackanimi">
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3  bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3  bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3  bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3  bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <p>Hindi</p>
              <div className="flex blackanimi">
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm "></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <p>Nepali</p>
              <div className="flex blackanimi">
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <p>German</p>
              <div className="flex blackanimi">
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm "></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-white rounded-sm"></div>
                <div className="border w-4 h-4 mr-3  bg-[#e9f2ee] opacity-40 rounded-sm"></div>
                <div className="border w-4 h-4 mr-3 bg-[#e9f2ee] opacity-40 rounded-sm"></div>
              </div>
            </div>
            <div className=" mt-4 flex ">
              <img
                src={interesticon}
                className=" h-7 w-7 md:mr-[10%]"
                style={{ filter: "invert(100%)" }}
              />
              <p className=" font-bold text-xl text-white font-binod ">
                Interest
              </p>
            </div>
            <div className="pb-2">
              <div className=" mt-4 flex border rounded-md blackanimi">
                <img src={codingicon} className=" h-5 w-5 mr-4" />
                <p className="    font-binod ">coding</p>
              </div>
              <div className=" mt-2 flex border rounded-md blackanimi ">
                <img src={readingicon} className=" h-5 w-5 mr-4" />
                <p className="    font-binod ">reading</p>
              </div>
              <div className=" mt-2 flex border rounded-md blackanimi">
                <img src={musicicon} className=" h-5 w-5 mr-4" />
                <p className="    font-binod ">music</p>
              </div>
              <div className=" mt-2 flex border rounded-md blackanimi">
                <img src={sporticon} className=" h-5 w-5 mr-4" />
                <p className="    font-binod ">sport</p>
              </div>
            </div>
          </div>
        </div>




        <div id="second-section" className=" mx-7 md:mx-0 md:border-r-2 md:w-3/4  md:p-10">
          <p className=" w-max text-2xl md:text-3xl text-[#41827f] blackanimi">
            Binod Lamichhane
          </p>
          <div className="flex  mt-3 blackanimi">
              <img src={introductionicon} className=" h-7 w-7 mr-1 mt-1" />
              <p className="text-xl text-[#41827f]">Introduction</p>
            </div>
          <div className=" text-justify indent-7 blackanimi">
            Highly skilled and results-driven Full-stack Developer with 1yrs of
            experience designing and implementing innovative software solutions.
            Adept at collaborating with cross-functional teams to drive project
            success and consistently deliver high-quality code. Expertise in
            both front-end and back-end technologies, with a passion for
            creating scalable and efficient applications
          </div>
          <div id="second-part-contact-details" className=" w-full border bg-slate-400 flex flex-wrap p-5 rounded-md mt-2 blackanimi">
            <div className=" flex md:mr-7 py-1 ">
              <img src={emailicon} className=" h-5 w-5  mr-[2px]  " />
              <Link to='mailto:binodlamichhane9866@gmail.com'><p className=" break-all">binodlamichhane9866@gmail.com</p></Link>
            </div>
            <div className=" flex mr-7 py-1">
              <img src={mobileicon} className=" h-5 w-5 mr-[2px]  " />
              <Link to='tel:9050423437'><p>9050423437</p></Link>
            </div>
            <div className=" flex mr-7 py-1">
              <img src={locationicon} className=" h-5 w-5 mr-[2px]  " />
              <p>noida,sector 15</p>
            </div>
            <div className=" flex md:mr-7 py-1">
              <img src={linkedicon} className=" h-5 w-5 mr-[2px] " />
              <Link to="https://www.linkedin.com/in/binod-lamichhane-060b31228/"><p className=" break-all">linked.com/in/binodlamichhane</p></Link>
            </div>
            <div className=" flex mr-7 py-1">
              <img src={githubicon} className=" h-6 w-6 mr-[2px]" />
              <Link to='https://github.com/Binodlamichhane/ecommercebackend'><p className=" break-all">github.com/in/binodlamichhane</p></Link>
            </div>
          </div>
          <div id="third-part-experience ">
          <div className="flex  mt-3 blackanimi ">
              <img src={experienceicon} className=" h-7 w-7 mr-1" />
              <p className="text-xl text-[#41827f]">Experience</p>
            </div>
            <p className="text-justify indent-7 blackanimi">I am currently working in inficare technology as react native mobile application developer.Its been 8 months working here. I have learnt a lot about mobile application development in this journey.I have learnt how to write clean and organized code,dynamic pages,api calls,ui design,animation, react navigation,gesture handler,debugging,problem solving etc. </p>
          </div>
          <div id="forth-part-project ">
          <div className="flex  mt-3">
              <img src={projecticon} className=" h-7 w-7 mr-1" />
              <p className="text-xl text-[#41827f]">Projects</p>
            </div>
            <ol className=" list-disc list-inside ">
              <li className="blackanimi"><span className=" text-lg relative -left-2"> Emembership app</span>
              <p className=" text-justify indent-4">This is project i work in my company.This project is developed to provide the membership to the users of different museum. there are a lots of museum and this museums user are required to use app to get access to their membership,coupon or ticket by which they can do cardless entry on museum.feature include addtoios wallet and googlewallet, offline access, coupons,ticket etc.</p>
              </li>
              <li className="blackanimi">
              <span className=" text-lg relative -left-2">Amazon clone</span>
              <p className=" text-justify indent-4">This is my personal project.I have implemented feature like signup, login, forgetpassword, otp-verification, product category, product details, addtocart, removefromcart, add primary and secondary address,razorpay payment method. I have also worked on backend of this app and design the api and database module using express js and mongodb.i have created api for user verification, login, signup, jwt token, fetching all data from api and storing user data form api. </p>
              </li>
              <li className="blackanimi">
              <span className=" text-lg relative -left-2">Portfolio Website</span>
              <p className="text-justify indent-4">This is the project I have create to give details information about myself easily online.I have created this using reactjs, tailwind css, html,</p>
              </li>
            </ol>
          
          </div>
          <div id="fifth-part-education ">
            <div className="flex  mt-3 blackanimi">
            {/* <FontAwesomeIcon icon={faReadme} /> */}
              <img src={educationicon} className=" h-7 w-7 mr-1" />
              <p className="text-xl text-[#41827f]">Education</p>
            </div>

            <p className="blackanimi">B-tech in Computer Science (2019-2023) from Kurukshetra University,India,Kurukshetra</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Resume;
