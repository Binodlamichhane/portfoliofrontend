import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  faTwitter,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import profile from "../assets/image/binodphoto.jpg";
import backgroundimage from "../assets/image/contactpagebackgroundimage.jpg";
import { observer } from "./utility/animateintersection";
function Contact() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const elementsToObserve = document.querySelectorAll(".test");
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });
  }, [pathname]);

  return (
    <div>
      <Header />
      <div
        className="h-[90vh] w-3/4 m-auto border flex justify-center items-center test"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <div className="  border flex justify-center h-[60vh]  w-4/5 items-center  rounded-2xl  bg-slate-200 opacity-70">
          <div>
            <div className="animate-bounce">
              <b className=" text-2xl ">Feel Free to Contact me!</b>
            </div>
            <div className="flex justify-center  my-8  animate-zoominout">
              <img src={profile} className="  h-32  w-32 rounded-full" />
            </div>

            <div className="flex justify-center h-11">
              <Link
                to="https://www.linkedin.com/in/binod-lamichhane-060b31228/"
                className="  text-zinc-600 hover:text-black mx-2"
              >
                <FontAwesomeIcon
                  className=" hover:size-10"
                  icon={faLinkedinIn}
                  size="2x"
                />
              </Link>
              <Link to="#" className="text-zinc-600 hover:text-black  mx-2">
                <FontAwesomeIcon
                  className=" hover:size-10"
                  icon={faXTwitter}
                  size="2x"
                />
              </Link>
              <Link
                to="https://github.com/Binodlamichhane/ecommercebackend"
                className="text-zinc-600 hover:text-black  mx-2"
              >
                <FontAwesomeIcon
                  className=" hover:size-10"
                  icon={faGithub}
                  size="2x"
                />
              </Link>
              <Link to="#" className="text-zinc-600  hover:text-black  mx-2">
                <FontAwesomeIcon
                  className=" hover:size-10"
                  icon={faFacebook}
                  size="2x"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
