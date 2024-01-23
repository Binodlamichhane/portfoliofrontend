import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/image/logo-image.jpg";
import headerimg from "../assets/image/headerimage.jpg";
import { url } from "../constant";
function Header() {
  const [signin, setSignIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [signInForm, setSignInForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginform, setLoginForm] = useState({ email: "", password: "" });
  const [loggedStatus, setloggedstatus] = useState(false);

  const checkloginstatus = async () => {
    try {
      const respose = await axios.get(`${url}/user/verify`, {
        withCredentials: true,
      });
      if (respose.status == 200) {
        setloggedstatus(true);
      }
    } catch (error) {
      setloggedstatus(false);
    }
  };

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setSignInForm({ ...signInForm, [name]: value });
  };
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginform, [name]: value });
  };
  const handleLogOut = async () => {
    if (confirm("are you sure to logged out")) {
      const response = await axios.get(`${url}/user/expire`, {
        withCredentials: true,
      });

      if (response.status == 200) {
        checkloginstatus();
      }
    }
  };
  const handlSubmiteSignUp = async (e) => {
    try {
      e.preventDefault();
      const notify = () => toast("successfully signIn", { autoClose: 1200 });
      const response = await axios.post(`${url}/user/signup`, signInForm);
      if (response.status == 200) {
        setSignInForm((prestate) => ({
          ...prestate,
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));
        setSignIn(false);
        notify();
      }
    } catch (error) {
      if (error.response.status == 409) {
        alert("User already exists");
      }
      if (error.response.status == 500) {
        alert("signup failed");
      }
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const notify = () => toast("successfully  login", { autoClose: 1200 });

      const response = await axios.post(`${url}/user/login`, loginform, {
        withCredentials: true,
      });

      if (response.status == 200) {
        setLoginForm((prestate) => ({ ...prestate, email: "", password: "" }));
        setLogin(false);
        setloggedstatus(true);
        notify();
      }
    } catch (error) {
      const notify = () => toast("error in login", { autoClose: 1200 });
      notify();
    }
  };
  const handleGoogleSignin=async(credential)=>{
    try{
      
      const notify = () => toast("successfully  signup", { autoClose: 1200 });
      const response = await axios.post(`${url}/user/googleSignIn`,{credential:credential.credential},{withCredentials:true})
      if (response.status == 200) {
        setSignInForm((prestate) => ({
          ...prestate,
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));
        setSignIn(false);
        notify();
      }
    }catch(error){
      console.log('failed to send credential ',error);
    }
  }
  const handleGoogleLogin=async(credential)=>{
    try{
      const notify = () => toast("successfully  login", { autoClose: 1200 });
      const response = await axios.post(`${url}/user/googlelogin`,{credential:credential.credential},{withCredentials:true})
   
      if (response.status == 200) {
        setLoginForm((prestate) => ({ ...prestate, email: "", password: "" }));
        setLogin(false);
        setloggedstatus(true);
        notify();
      }
    }catch(error){
      const notify = () => toast("error in login", { autoClose: 1200 });
      notify();
    }
  }

  useEffect(() => {
    checkloginstatus();
    // gapi.load('client:auth2',googlefunc);
  }, []);
  return (
    <>
      <div className=" w-full h-20 flex sticky top-0 bg-zinc-600  z-20 ">
        <div className="w-3/4 flex m-auto justify-between items-center ">
          <div className="h-14 w-14 rounded-full">
            <img src={headerimg} className=" h-14 w-16 rounded-full" />
          </div>
          <div className=" w-2/4  min-w-60  ">
            <ul className="flex justify-between ">
              <li className="border border-gray-500 rounded-lg hover:text-orange-400 px-1 text-yellow-100">
                <Link to="/">Home</Link>
              </li>
              <li className="border border-gray-500 rounded-lg hover:text-orange-400 px-1 text-yellow-100">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="border border-gray-500 rounded-lg hover:text-orange-400 px-1 text-yellow-100">
                <Link to="/service">Service</Link>
              </li>
              <li className="border border-gray-500 rounded-lg  hover:text-orange-400 px-1 text-yellow-100">
                <a href={"#one"}>About</a>
              </li>
              <li className="border border-gray-500 rounded-lg  hover:text-orange-400 px-1 text-yellow-100">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="border border-gray-500 rounded-lg hover:text-orange-400 px-1 text-yellow-100">
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </div>
          <div>
            {loggedStatus ? (
              <button
                onClick={() => {
                  handleLogOut();
                  setSignIn(false);
                }}
                className=" rounded-lg bg-slate-100 hover:bg-cyan-600 px-1 align-middle mr-2"
              >
                logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setLogin(!login);
                  setSignIn(false);
                }}
                className=" rounded-lg bg-slate-100 hover:bg-cyan-600 px-1 align-middle mr-2"
              >
                login
              </button>
            )}
            <button
              onClick={() => {
                setSignIn(!signin);
                setLogin(false);
              }}
              className=" rounded-lg bg-slate-100 hover:bg-cyan-600 px-1 align-middle"
            >
              signIn
            </button>
          </div>
          {signin && (
            <form
              className="absolute top-[15vh] left-[35vw] border  p-8 px-11 rounded-lg bg-slate-200"
              onSubmit={handlSubmiteSignUp}
            >
              <label
                onClick={() => setSignIn(!signin)}
                className="absolute right-0 top-0 bg-red-500 px-1 rounded-tr-lg rounded-bl-lg"
              >
                X
              </label>
              <div className="flex justify-center font-bold text-lg -mt-4 mb-2">
                Register
              </div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className=" rounded-lg p-2"
                type="text"
                id="name"
                name="name"
                required
                size={30}
                value={signInForm.name}
                autoComplete
                autoFocus
                onChange={handleSignUp}
              />
              <br />
              <label htmlFor="email">Email Address:</label>
              <br />
              <input
                className=" rounded-lg p-2"
                type="email"
                id="email"
                name="email"
                value={signInForm.email}
                required
                size={30}
                autoComplete
                onChange={handleSignUp}
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                className=" rounded-lg p-2"
                type="password"
                name="password"
                value={signInForm.password}
                required
                size={30}
                onChange={handleSignUp}
              />
              <br />
              <label htmlFor="password">ConfirmPassword</label>
              <br />
              <input
                className=" rounded-lg p-2"
                type="password"
                name="confirmPassword"
                value={signInForm.confirmPassword}
                required
                size={30}
                onChange={handleSignUp}
              />
              <br />
              {/* <small className="error"></small><br /> */}
              <input
                className=" rounded-lg w-full p-2 my-3 m bg-zinc-600 text-white active:bg-zinc-800 "
                type="submit"
                value="SignIn"
                size={30}
              />
                 <GoogleLogin
                onSuccess={(credentialResponse) => {

                  handleGoogleSignin(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                width={"300px"}
                type="standard"
                text="signup_with"
              />
            </form>
          )}
          {login && (
            <form
              onSubmit={handleSubmitLogin}
              className="absolute top-[20vh] left-[35vw] border  p-8 px-11 rounded-lg bg-slate-200"
            >
              <label
                onClick={() => setLogin(!login)}
                className="absolute right-0 top-0 bg-red-500 px-1 rounded-tr-lg rounded-bl-lg"
              >
                X
              </label>
              <div className="flex justify-center font-bold text-lg -mt-4 mb-2">
                Login
              </div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <input
                className=" rounded-lg p-2"
                type="email"
                id="email"
                name="email"
                value={loginform.email}
                required
                size={30}
                autoComplete
                onChange={handleLogin}
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                className=" rounded-lg p-2"
                type="password"
                name="password"
                value={loginform.password}
                required
                size={30}
                onChange={handleLogin}
              />
              <br />{" "}
              <input
                className=" rounded-lg w-full p-2 my-3 m bg-zinc-600 text-white active:bg-zinc-800 "
                type="submit"
                value="Login"
                size={30}
              />
              <div><p className=" w-fit m-auto -mt-1">OR</p></div>
              <div className="flex justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                width={"300px"}
                type="standard"
                text="continue_with"
               
              />
              </div>
              
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
