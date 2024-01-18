import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faRocket } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";

function Services() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Header />
      <div id="outerdiv" className="w-3/4 m-auto">
       
        <div>
          <div className="flex justify-center">
            <b className="border text-xl">Mobility</b>
          </div>

          <div className="border ">
            <div className="flex justify-center">
              <b className=" text-lg">
                <FontAwesomeIcon icon={faMobileAlt} color="red" /> Elevate Your
                Business with Innovative Mobile Solutions
                <FontAwesomeIcon icon={faRocket} color="blue" />
              </b>
            </div>
            <div className="flex justify-center text-center">
              <p className=" clear-end w-3/4 border">
                Are you ready to redefine your brand's digital presence? Meet
                Me, your gateway to cutting-edge mobile
                application development.
              </p>
            </div>
            <div className="flex justify-center"><p>Functionality</p></div>
            <ol className="border list-disc">
              <li className=" w-3/4 border m-auto">
                    <b>Sleek & intitive Disign</b>
                    <p>
                      Our app boasts a user-friendly interface that captivates
                      users from the first glance. Modern design principles
                      ensure a seamless and engaging experience.
                    </p>
              </li>
              <li className=" w-3/4 border m-auto">
                <b>Poserful Functionality</b>
                <p>
                  From essential functionalities to advanced features, Our team is engineered to meet the unique needs of your business.
                  Enhance productivity, streamline processes, and exceed
                  customer expectations.
                </p>
              </li>
              <li className=" w-3/4 border m-auto">
                <b>Cross Platform Compability</b>
                <p>
                  {" "}
                  Reach your audience wherever they are. Our app ensures a
                  consistent experience across iOS and Android platforms,
                  maximizing your market reach.
                </p>
              </li>
              <li className=" w-3/4 border m-auto">
                <b>Scalability & Future Proofing</b>
                <p>
                  Designed for growth and scales with your
                  business. We incorporate the latest technologies to
                  future-proof your investment
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <p>Portfolio Website</p>
        </div>
        <div>
          <p>Dynamic Website</p>
        </div>
        <div>
          <p>binod</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;

// import moment from "moment";
// const validThroughTimeSpan="26/01/2024";
// { (moment().isAfter(
//   moment(validThroughTimeSpan, 'DD-MM-YYYY'),
// ) ||
//   moment
//     .duration(
//       moment(
//         validThroughTimeSpan,
//         'DD-MM-YYYY',
//       ).diff(
//         moment(
//           moment().format('DD-MM-YYYY'),
//           'DD-MM-YYYY',
//         ),
//       ),
//     )
//     .asDays() <
//     Number(
//       ("45,30,15,5")
//         .split(',')
//         .sort((a, b) => b - a)[0],
//     ))?<div>BINOD LAMICHHANE</div>:<div>PARKASH YADAV</div>}