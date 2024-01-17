import { useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./footer";
import bgImage from "../assets/image/background2.jpg";
import binod from "../assets/image/binodphoto.jpg";
import portfolio from "../assets/image/portfolioimage.jpg";
import mobileapp from "../assets/image/mobileappimage.jpg";
import cardgame from "../assets/image/flipcardgameimage.jpg";
import ecommerce from "../assets/image/ecommerceshoppingsite.jpg";
import htmlimage from "../assets/image/htmlimage.png";
import javascriptimage from "../assets/image/javascriptimage.png";
import reactjsimage from "../assets/image/reactjsimage.jpg";
import sqlimage from "../assets/image/sqlimage.png";
import mongodbimage from "../assets/image/mongodbimage.png";
import nodejsimage from "../assets/image/nodejsimage.jpg";
import skillbackgroundimage from '../assets/image/skillsectionbackgroundimage.jpg'
import { useEffect, useState } from "react";
import { observer } from './utility/animateintersection.js';
import Cookies from 'js-cookie';
import { url } from '../constant.js';

function Home() {
  const coordinateFunc = () => {
    const totalPoints = 8;
    let array1 = [];
    for (var i = 1; i <= totalPoints; i++) {
      drawPoint(100, i, totalPoints);
    }

    function drawPoint(r, currentPoint, totalPoints) {
      var theta = (Math.PI * 2) / totalPoints;
      var angle = theta * currentPoint;

      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);

      let coordinate = {
        a: x,
        b: y,
      };
      array1.push(coordinate);
    }
     console.log(array1);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    const elementsToObserve = document.querySelectorAll('.test');
    elementsToObserve.forEach((element) => {
    observer.observe(element);
  });   
    // coordinateFunc();
    window.scrollTo(0, 0);
 
  }, [pathname]);

  const circle1 = {
    display: "block",
    position: "absolute",
    top: "0%",
    left: "51%",
    width: "100px",
    height: "100px",
    margin: "-51px",
    background: "red",
    borderRadius: "51%",
    textAlign: "center",
    lineHeight: "100px",

  };
  const circle2 = {
    display: "block",
    position: "absolute",
    top: "28.33%",
    left: "93%",
    width: "100px",
    height: "100px",
    margin: "-51px",
    borderRadius: "51%",
    textAlign: "center",
    lineHeight: "100px",

  };
  const circle3 = {
    display: "block",
    position: "absolute",
    top: "73.66%",
    left: "93%",
    width: "100px",
    height: "100px",
    margin: "-51px",
    borderRadius: "51%",
    textAlign: "center",
    lineHeight: "100px",

  };
  const circle4 = {
    display: "block",
    position: "absolute",
    top: "100%",
    left: "51%",
    width: "100px",
    height: "100px",
    margin: "-51px",
    borderRadius: "51%",
    textAlign: "center",
    lineHeight: "100px",

  };
  const circle5 = {
    display: "block",
    position: "absolute",
    top: "73.66%",
    left: "9%",
    width: "100px",
    height: "100px",
    margin: "-51px",
    borderRadius: "51%",
    textAlign: "center",
    lineHeight: "100px",

  };
  const circle6 = {
    display: "block",
    position: "absolute",
    top: "28%",
    left: "8%",
    width: "100px",
    height: "100px",
    margin: "-51px",
    borderRadius: "51%",
    textAlign: "center",
    lineHeight: "100px",
  };

  return (
    <div className="bg-zinc-600" id="outercontainer">
      <Header />
      <div className=" flex w-3/4 m-auto border  " id="intro-section">
        <div
          className="w-2/4  bg-cover bg-center bg-zinc-500 flex justify-center items-center rounded-r-lg test"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="w-2/4 h-2/4 test">
            <img className=" rounded-full shadow-2xl" src={`${binod}`} />
          </div>
        </div>

        {/* */}
        <div className=" flex justify-center items-center w-2/4 bg-zinc-600">
          <div>
            <br />
            <br />
            <div className=" mt-16 test">
              <h1 className=" text-3xl text-fuchsia-50 text-center">
                <b>I'm Binod Lamichhane</b>
              </h1>
              <h1 className="text-3xl text-center text-fuchsia-50">
                <b>A FullStack Developer</b>
              </h1>
              <p className="text-2xl text-center text-zinc-400">
                <strong>based on India</strong>
              </p>
            </div>
            <br />
            <br />
            <div>
              <p className=" text-center test">
                I am probably the most passoniate developer you will ever get to
                work with.If you have a greate project that need some amazing
                skill,I'm your guy
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className=" w-3/4 m-auto test" id="porjects-section">
        <p className=" text-3xl text-center m-4">Projects</p>
        <div className="flex  justify-between">
          <div className="w-1/4 h-1/4 border rounded-md hover:opacity-30">
            <img src={`${mobileapp}`} />
            <p className=" text-center">Amazon Clone</p>
          </div>
          <div className="w-1/4 h-1/4 border rounded-md">
            <img src={`${portfolio}`} />
            <p className=" text-center">Portfolio</p>
          </div>
          <div className="w-1/4 h-1/4 border rounded-md">
            <img src={`${cardgame}`} />
            <p className=" text-center">flipcard game</p>
          </div>
          <div className="w-1/4 h-1/4 border rounded-md">
            <img src={`${ecommerce}`} />
            <p className=" text-center">Ecommercesite</p>
          </div>
        </div>
      </div>
      <div className=" w-3/4 m-auto test" id="skill-section"  >
        <p className=" text-center text-3xl mt-4">Skills</p>
        <div className=" relative w-[501px] h-[501px] mx-auto my-[75px]  rounded-full animate-spin test z-0" style={{backgroundImage:`url(${skillbackgroundimage})`}}>
          <div style={circle1}>
            <img
              src={`${htmlimage}`}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div style={circle2}>
            <img
              src={`${javascriptimage}`}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div style={circle3}>
            <img
              src={`${nodejsimage}`}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div style={circle4}>
            <img
              src={`${mongodbimage}`}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div style={circle5}>
            <img
              src={`${sqlimage}`}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>
          <div style={circle6}>
            <img
              src={`${reactjsimage}`}
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          </div>

          {/* <img
            className=" origin-center absolute translate-x-20  rounded-full"
            src={`${sqlimage}`}
            style={{ width: 100, height: 100 }}
          />  */}
        </div>
      </div>
     <div className='test'>
     <Footer/>
     </div>
      
    </div>
  );
}

export default Home;

// className=" absolute w-16 h-16 bg-green-500 rounded-full"
