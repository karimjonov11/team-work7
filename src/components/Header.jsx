import "./Header.css"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const Header = () => {
  return (
    <header>
        <nav>
            <h1>Shop<span>per</span></h1>
            <input type="text" placeholder='Search Items'/> <img className="img1" src={img1} alt="" />
            <div>
                <button className="btn1"><img src={img2} alt="" /> 0 Items Added</button>
                <button className="btn2"><img src={img3} alt="" /> Login or Sign Up</button>
            </div>
        </nav>
         <ul>
                <li>
                    <a href="">Features </a>
                </li>
                 <li>
                    <a href="">Products</a>
                </li>
                 <li>
                    <a href="">Blog</a>
                </li>
                 <li>
                    <a href="">About</a>
                </li>
            </ul>
    </header>
  )
}

export default Header