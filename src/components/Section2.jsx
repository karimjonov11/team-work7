import "./Section2.css"
import img10 from "../assets/img10.png"
import img11 from "../assets/img11.png"
import img12 from "../assets/img12.png"

const Section2 = () => {
  return (
    <section className='section2'>
        <div className="sec2img">
        <h1>Apple wireless Airpod</h1>
        <div className="imgcon">
            <img src={img10} alt="" />
            <img className="topimg" src={img11} alt="" />
            <img src={img12} alt="" />
        </div>
        <p>Price : <strong>$45 .99</strong></p>
        </div>  
        <div className="sec2text">
             <h1>Our Featured Products</h1>
            <p>Lorem ipsum is a placeholder text commonly used <br /> to demonstrate the visual form of a <br /> product</p>
            <div>
            <button className="btn1">Add to cart</button>
            <button className="btn2">View more</button>
            </div>

        </div>
    </section>
  )
}

export default Section2