import "./Section1.css"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"



const Section1 = () => {
  return (
    <section className="section1">
        <div className="sec1text">
            <h1>Discover Our <br /> Latest  Products</h1>
            <p>Lorem ipsum is a placeholder text commonly used <br /> to demonstrate the visual form of a product</p>
            <button>Buy Now</button>
            <div className="viewers">
            <img className="img1" src={img6} alt="" />
            <img className="img2" src={img7} alt="" />
            <img className="img3" src={img8} alt="" />
            <img className="img4" src={img9} alt="" />

            <p>15k Well <br /> Reviews</p>
        </div>
        </div>
        <div className="sec1img">
            <img src={img4}  alt="" />
            <h2>Red Be<span>ats M|9c2zm/a</span></h2>
            <div>
            <img  className="earphone" src={img5} alt="" />
            <h3>50$</h3>
            </div>
            <img className="star" src={img4} alt="" />
        </div>
       

    </section>
  )
}

export default Section1