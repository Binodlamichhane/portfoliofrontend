import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
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
  const date = new Date().toLocaleDateString();
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
    console.log(response.data.data);
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
      console.log("binod ji", response.status);
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
      console.log("binoderror", error.response.status);
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
      <div className=" w-3/4 m-auto">
        {blog.length != 0 ? (
          blog.map((item) => (
            <div key={item.id} className=" binod  section2">
              <div
                className={`border border-black rounded-2xl p-4 m-4 ${
                  clicked == item._id
                    ? " w-full bg-slate-300"
                    : "w-1/2 bg-slate-50"
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

                  <div className="flex items-center justify-between mt-5 ">
                    {clicked == item._id ? (
                      <button
                        onClick={() => {
                          handleClick(item._id);
                          setIsFocus(false);
                        }}
                        className=" bg-red-500 h-fit p-3 w-fit self-center  rounded-xl "
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
                      <div className=" flex justify-center items-center self-center bg-slate-200  p-6 rounded-md mr-1">
                        <p className=" w-fit mr-3">Leave a comment</p>
                        <form
                          onSubmit={(e) => {
                            handleSubmit(e, item._id);
                          }}
                        >
                          <input
                            className={`rounded-lg mr-3 ${
                              clicked == item._id ? "w-[90vh]" : "w-[36vh]"
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
                      <div className=" font-bold text-2xl ">
                        Comments({apiComment.length})
                        <p className=" border-t-2 w-full mb-2 border-black"></p>
                      </div>
                      {apiComment.map((items) => (
                        <li
                          key={items._id}
                          className="border rounded-md p-2 mb-2  bg-neutral-100"
                        >
                          <div className=" text-wrap  mb-3">
                            <b>{items.userId?.name} </b>{" "}
                            <small className=" ml-5">
                              ( {item.createdAt?.split("T")[0]})
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

{
  /* <div className=' binod  section9 '>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div>
            <div  className=' binod  section1'>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div> */
}

{
  /* <div  className=' binod  section2' onClick={handleClick}>
            <div className={`border border-black rounded-2xl p-4 m-4 ${clicked?' w-full bg-slate-300' :'w-1/2 bg-slate-50'}`}>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' text-2xl'>Intersection Observer</b>
            </div>
         <div className='p-2'>
         
         <p className={`${clicked?'':'line-clamp-2 text-ellipsis'} text-justify`}> Today I learn about intersection observer and how it works.Intersection Observer is used to load element only when it is entering the viewport or completely loaded to viewport.We have to create observer that observe the element.some code relate to intersection observer 
         <pre><code> 
            {`  export const  blogobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry.target);
    if(entry.isIntersecting){
        entry.target.classList.toggle('animate-bloganimi');
        entry.target.classList.remove('');
    }
    });
  },{
    threshold:1
  });`}
      </code></pre>
       

         </p>
         <button  className=' bg-slate-300 h-fit p-3 w-fit border rounded-xl'>Readmore</button>

         </div>
        </div>
            </div> */
}
{
  /* <div  className=' binod   section3 '>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div>
            <div className=' binod  section4'>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div>
            <div className=' binod  section5'>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div>
            <div className=' binod  section6'>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div>
            <div className=' binod  section7'>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div>
            <div className=' binod  section8'>
            <div className='border border-black rounded-2xl p-4 m-4 w-1/4 '>
            <div className='flex justify-end'><small>{date}</small></div>
            <div className='flex justify-center'>
            <b className=' '>BlogTitle</b>
            </div>
         <div className='p-2'>
         <p className=' line-clamp-2 text-ellipsis'>This is the first blog on this website from my side this is it and all.</p>

         </div>
        </div>
            </div> */
}
