import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { blogobserver } from "./utility/animateintersection.js";
import { url } from "../constant.js";
import Loader from "./utility/Loader.jsx";
// import Ribbon from "./utility/Ribbon.jsx";
// import { normalizePath } from "vite";
function Blog() {
  const [clicked, setClicked] = useState("");
  let [blog, setBlog] = useState([]);
  let [comment, setComment] = useState("");
  let [apiComment, setapiComment] = useState([]);
  let [isFocus, setIsFocus] = useState(false);
  let [loader,setLoader]=useState(false);
  const animifunction = () => {
    const elementsToObserve = document.querySelectorAll(".binod");
    elementsToObserve.forEach((element) => {
      blogobserver.observe(element);
    });
  };
  const handleClick = async (id) => {
    setLoader(true);
    if (clicked == id) {
      setComment("");
      setClicked("");
    } else {
      setClicked(id);
      const commentres = await axios.get(`${url}/blog/comment/${id}`);
      if (commentres.status == 200) {
        setapiComment(commentres.data.data);
        setLoader(false);
      }
      setComment("");
      
    }
  };
  const blogapi = async () => {
    const response = await axios.get(`${url}/blog`);
    setBlog(response.data.data);
 
  };
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      if (comment.length == 0) return;
      const data = {
        blogId: id,
        comment: comment,
        username: "binodlamichhane",
      };

      if (comment.length == 0) new Error("cannot be empty");
      const response = await axios.post(`${url}/blog/comment`, data, {
        withCredentials: true,
      });
      
      if (response.status == 200) {
        setComment("");
        setIsFocus(false);
        alert("comments successfully done");
        const commentres = await axios.get(`${url}/blog/comment/${id}`);
        if (commentres.status == 200) {
          setapiComment(commentres.data.data);
        }
      }
    } catch (error) {
      if (error.response.status == 401) {
        const notify=()=>toast.error('you need to login first', {
          theme:'colored',
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: "light",
          });
        notify();
      }
      // alert("fuck the commnet");
   
    }
  };
  useEffect(() => {
    animifunction();
    window.scrollTo(0, 0);
    blogapi();
  }, []);

  return (
    <div>
      <Header />
      <div className=" md:w-3/4  m-auto">
        {blog.length != 0 ? (
          blog.map((item) => (
            <div key={item.id} className=" binod  section2">
              <div
                className={`border border-black rounded-2xl p-4 my-4 ${
                  clicked == item._id
                    ? " w-full bg-slate-300"
                    :  "w-full md:w-1/2 bg-slate-50"
                }`}
              >
                <div className="flex justify-end">
                  <small>{item.createdAt?.split("T")[0]}</small>
                </div>
                <div className="flex justify-center">
                  <b className=" text-2xl">{item.title}</b>
                </div>
                <div className="p-2">
                  <p
                    className={`${
                      clicked == item._id ? "" : "line-clamp-2 text-ellipsis"
                    } text-justify`}
                  >
                    {item.details}
                  </p>

                  <div className=" md:flex items-center justify-between mt-5 ">
                    {clicked == item._id ? (
                      <button
                        onClick={() => {
                          handleClick(item._id);
                          setIsFocus(false);
                        }}
                        className="my-2 md:my-0 bg-red-500 h-fit p-3 w-fit self-center  rounded-xl "
                      >
                        hide data
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleClick(item._id);
                          setIsFocus(false);
                        }}
                        className=" bg-slate-300 h-fit p-3 w-fit border rounded-xl mt-3"
                      >
                        Readmore
                      </button>
                    )}
                    {clicked == item._id ? (
                      <div className=" sm:flex justify-center items-center self-center bg-slate-200  p-6 rounded-md mr-1">
                        <p className=" w-fit mr-3">Leave a comment</p>
                        <form
                          onSubmit={(e) => {
                            handleSubmit(e, item._id);
                          }}
                        >
                          <input
                            className={`rounded-lg mr-3 ${
                              clicked == item._id ? "sm:w-[90vh]" : "sm:w-[36vh]"
                            } p-2 `}
                            type="text"
                            value={comment}
                            name="comment"
                            onChange={(e) => {
                              setIsFocus(true);
                              setComment(e.target.value);
                            }}
                          />
                          <input
                            className=" active:text-red-400"
                            type="submit"
                            value="Submit"
                          />
                        </form>
                      </div>
                    ) : null}
                  </div>
                  {clicked == item._id ? (
                    <ol className=" relative left-1/2 list-disc mt-4 w-1/2 ">
                      {loader&&<div className=" relative -top-48"><Loader/></div>}
                      <div className=" font-bold md:text-2xl ">
                        Comments({apiComment.length})
                        <p className=" border-t-2 md:w-full mb-2 border-black"></p>
                      </div>
                      {apiComment.map((items) => (
                        <li
                          key={items._id}
                          className="border rounded-md p-2 mb-2  bg-neutral-100"
                        >
                          <div className=" md:flex justify-between  mb-3">
                            <b>{items.userId?.name} </b>
                            <small className=" ml-5">
                              ({item.createdAt?.split("T")[0]})
                            </small>
                          </div>{" "}
                          -{items.comment}
                        </li>
                      ))}
                    </ol>
                  ) :null}
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
     <ToastContainer/>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
