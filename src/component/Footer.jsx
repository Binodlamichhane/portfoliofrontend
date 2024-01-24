import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faGithub,faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { url } from '../constant';
import axios from 'axios';

function Footer() {
  const [data,setData]=useState({name:'',email:'',phoneno:'',query:''});
  const handleData=(e)=>{
    let {name,value} = e.target;
    setData({...data,[name]:value})
  }
  const handleFooterSubmit= async(e)=>{
    e.preventDefault();
    try{  
      console.log('query data',data);
      const response= await axios.post(`${url}/user/query`,data);
      if(response.status == 200){
        setData({name:'',email:'',phoneno:'',query:''});
        alert('query submited successfully');
      }
       
  }catch(error){
    console.log(error);
    }
 
  }
  return (
    <div id='one' className="bg-gray-800 text-white py-4 w-full relative " >
      <div className='md:flex justify-between  mx-32'>
        <div><p className=' text-lg test text-center '>Contact Me</p>
          <p className=' test text-center'><i>From India,<br/> Noida secotor 15,C-Block 146</i></p>
          <p className='test text-center'><i>+91 9050423437</i></p>
        </div>
        <div><p className=' text-lg test text-center '  >Services</p>
          <p className=' text-cyan-700 hover:text-green-700 test text-center'>Mobile Applicatioin</p>
          <p className=' text-cyan-700 hover:text-green-700 test text-center'>Dynamic Website</p>
          <p className=' text-cyan-700 hover:text-green-700 test text-center'>Static Webiste</p>
          <p className=' text-cyan-700 hover:text-green-700 test text-center'>DataBase Management</p>
        </div>
        <div className=' text-center '><p className=' text-lg test'>Get In Touch</p>
          <form onSubmit={handleFooterSubmit}>
            <input className='rounded mt-2 h-8 text-cyan-950 text-sm p-2 test' type='text' size={30} placeholder='Name' name='name' value={data.name} onChange={handleData} required/><br/>
            <input className='rounded mt-2 h-8 text-cyan-950 text-sm p-2 test' type='text' size={30} placeholder='Email' name='email' value={data.email} onChange={handleData} required /><br/>
            <input className='rounded mt-2 h-8 text-cyan-950 text-sm p-2 test' type='tel' size={30} placeholder='Phone No' name='phoneno' value={data.phoneno} onChange={handleData} required /><br/>
            <textarea className='rounded mt-2 h-12 text-cyan-950 text-sm p-[6px] test'  rows={4} cols={30} placeholder='Your Query Here' name='query' value={data.query} onChange={handleData} required/><br/>
            <input className='rounded mt-2 p-1  bg-black active:bg-cyan-600 test' type='submit' />
          </form>
        </div>
      </div>
    <div >
      <div className="container mx-auto text-center">
        <p className="text-sm test">
          © 2023 Binod Lamichhane. All Rights Reserved.
        </p>
        <div className="mt-2">
          
          <Link to="https://www.Linkedin.com/in/binod-lamichhane-060b31228/" className="text-gray-400 hover:text-white mx-2 test" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white mx-2 test" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link to="https://github.com/Binodlamichhane" className="text-gray-400 hover:text-white mx-2 test" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;