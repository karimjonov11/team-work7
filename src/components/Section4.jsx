

import './Section4.css'
import { IoIosStar } from "react-icons/io";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Section4() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

  return (
    <>
    <div className='sec4'>
        <h1>Trending Earphones</h1>
    </div>
    <div className='sec44'>
        <div className='secc4'>
            <h3>Earbuds</h3>
        </div>
        <h2>Wireless</h2>
        <h2>Wired</h2>
    </div>


    <div className='salom1'  data-aos="fade-up">
       <div className='salom'>
            <div className='csec45' >
            <img src={img1} alt="" />
            <div className='ces4'>
                <h2>Boat Rockerz 333</h2>
                <p><IoIosStar className='iconc' /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  />75 Reviews</p>
                <h2>$20</h2>
            </div>
        </div>
        <button>Add to cart</button>
        </div>

         <div className='salom' data-aos="fade-up">
            <div className='csec45' >
            <img src={img2} alt="" />
            <div className='ces4'>
                <h2>Boat Rockerz 333</h2>
                <p><IoIosStar className='iconc' /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  />75 Reviews</p>
                <h2>$20</h2>
            </div>
        </div>
        <button>Add to cart</button>
        </div>

         <div className='salom'   data-aos="fade-up">
            <div className='csec45' >
            <img src={img3} alt="" />
            <div className='ces4'>
                <h2>Boat Rockerz 333</h2>
                <p><IoIosStar className='iconc' /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  /><IoIosStar className='iconc'  />75 Reviews</p>
                <h2>$20</h2>
            </div>
        </div>
        <button>Add to cart</button>
        </div>
    </div>
     
    </>
  )
}

export default Section4
