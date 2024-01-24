import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faRocket } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div id="outerdiv" className="w-3/4 m-auto">
        <div id='mobility'>
          <div className="flex justify-center">
            <b className=" text-xl text-violet-800 my-5">Mobility</b>
          </div>
          <div className="">
            <div className="flex justify-center">
              <b className=" text-lg">
                <FontAwesomeIcon icon={faMobileAlt} color="red" /> Elevate Your
                Business with Innovative Mobile Solutions
                <FontAwesomeIcon icon={faRocket} color="blue" />
              </b>
            </div>
            <div className="flex justify-center text-center">
              <p className=" clear-end w-3/4 ">
                Are you ready to redefine your brand's digital presence? Meet
                Me, your gateway to cutting-edge mobile application development.
              </p>
            </div>
            <div className="flex justify-center">
              <b>Functionality</b>
            </div>
            <ol className=" list-disc">
              <li className=" w-3/4  m-auto">
                <b>Sleek & intitive Disign</b>
                <p>
                  Our app boasts a user-friendly interface that captivates users
                  from the first glance. Modern design principles ensure a
                  seamless and engaging experience.
                </p>
              </li>
              <li className=" w-3/4 m-auto">
                <b>Poserful Functionality</b>
                <p>
                  From essential functionalities to advanced features, Our team
                  is engineered to meet the unique needs of your business.
                  Enhance productivity, streamline processes, and exceed
                  customer expectations.
                </p>
              </li>
              <li className=" w-3/4  m-auto">
                <b>Cross Platform Compability</b>
                <p>
                  {" "}
                  Reach your audience wherever they are. Our app ensures a
                  consistent experience across iOS and Android platforms,
                  maximizing your market reach.
                </p>
              </li>
              <li className=" w-3/4  m-auto">
                <b>Scalability & Future Proofing</b>
                <p>
                  Designed for growth and scales with your business. We
                  incorporate the latest technologies to future-proof your
                  investment
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div id="Portfolio">
          <div className="flex justify-center">
            <b className="border text-xl text-violet-800 my-5">Portfolio Website</b>
          </div>
          <div className=" flex justify-center text-justify">
            <b>Why a Portfolio Website?</b></div>
            <p className="text-justify">In today's digital age, having a professional online presence is crucial. A portfolio website serves as your virtual business card, offering potential clients and employers a comprehensive view of your expertise. Whether you are a freelancer, entrepreneur, or job seeker, a well-crafted portfolio website can make a significant impact on your career.</p>
            <p className=" w-fit m-auto"><b>Our Portfolio Website Development Service Offers:</b></p>
          <div className=" flex justify-center">
            
            <ul className=" list-disc  text-justify  w-3/4">
              <li>
                <b>Custom Design </b>
                <p>We understand the importance of making a memorable first impression. Our team will work closely with you to create a visually appealing and user-friendly design that reflects your personal brand.</p>
              </li>
              <li>
                <b>Responsive Development</b>
                <p>Your portfolio website will be fully responsive, ensuring a seamless experience across various devices – from desktops to smartphones</p>
              </li>
              <li><b>Project ShowCase</b>
              <p>Highlight your projects and achievements with dedicated sections that allow visitors to explore your work in detail. We'll implement interactive features to engage your audience effectively.</p>
              </li>
              <li><b>SEO optimization</b>
              <p> Increase your online visibility with search engine optimization (SEO) techniques. Your portfolio website will be optimized for relevant keywords, making it easier for people to find you online.</p>
              </li>
            </ul>
          </div>

        </div>




        <div id="Dynamic Website">
          <div className="flex justify-center">
            <b className="border text-xl text-violet-800 my-5">Dynamic Website</b>
          </div>
          <div className=" flex justify-center text-justify">
            <b>Why a Dyncmic Website?</b></div>
            <p className="text-justify">In today's fast-paced digital landscape, a dynamic website is a powerful tool that not only captures attention but also provides an interactive and personalized user experience. Whether you're an entrepreneur, business owner, or creative professional, a dynamic website can be a game-changer for your online success</p>
          
            <p className=" w-fit m-auto border"><b>Our Dynamic Website Development Service Offers:</b></p>
          <div className=" flex justify-center">
            
            <ul className=" list-disc  text-justify  w-3/4">
              <li>
                <b>Custom Functionality: </b>
                <p>We specialize in developing websites that go beyond the standard. Our team will tailor features and functionalities specific to your business needs, ensuring a truly unique online experience.</p>
              </li>
              <li>
                <b>Engaging User Interfaces:</b>
                <p>Capture your audience's attention with modern and intuitive user interfaces. Our designs are not only aesthetically pleasing but also optimized for seamless user navigation.</p>
              </li>
              <li>
                <b>E-Commerce Integration:</b>
                <p>If you're looking to sell products or services online, our dynamic websites seamlessly integrate robust e-commerce solutions, providing a secure and enjoyable shopping experience for your customers.</p>
              </li>
              <li>
                <b>Database Integration: </b>
                <p> Leverage the power of data with database integration. From customer information to product databases, we implement solutions that streamline your business processes.</p>
              </li>
              <li>
                <b>Responsive Design:</b>
                <p>Your website will be fully responsive, ensuring optimal performance across a variety of devices, from desktops to smartphones.</p>
              </li>
            </ul>
          </div>
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
