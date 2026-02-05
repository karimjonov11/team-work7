import "./Section3.css"
import img13 from "../assets/img13.png"
import img14 from "../assets/img14.png"
import img15 from "../assets/img15.png"
import img16 from "../assets/img16.png"



const Section3 = () => {
  return (
    <section className="section3">
        <h2>Top Sellers</h2>
        <div className="pcon">
            <p className="p1">Top Picks</p>
            <p className="p2">Watches</p>
        </div>
        <div className="cardcon">
        <div className="card1">
           <div className="imgcon">
            <img src={img13} alt="" />
            <p>Save <br /> 60%</p>
           </div>
           <div className="textcon">
                <p>Boat Rockerz 333</p>
                <div className="starcon">
                    <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <small>75 Reviews</small>
                </div>
                <h4>$20</h4>
            </div>
        </div>
        <div className="card2">
           <div className="imgcon2">
            <img src={img14} alt="" />
           </div>
           <div className="textcon">
                <p>Boat Rockerz 333</p>
                <div className="starcon">
                    <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <small>75 Reviews</small>
                </div>
                <h4>$20</h4>
            </div>
        </div>
        <div className="card3">
           <div className="imgcon3">
            <img src={img15} alt="" />
            <p>Save <br /> 40%</p>
           </div>
           <div className="textcon">
                <p>Boat Rockerz 333</p>
                <div className="starcon">
                    <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <img src={img16} alt="" />
                <small>75 Reviews</small>
                </div>
                <h4>$20</h4>
            </div>
        </div>
        </div>
         <div className="btncon">
            <button>Add to cart</button>
            <button>Add to cart</button>
            <button>Add to cart</button>
        </div>
      
    </section>
  )
}

export default Section3