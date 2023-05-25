import React from 'react';
import { Link } from 'react-router-dom';
import pic2 from '../images/image-1.jpg'
import pic3 from '../images/gettyimages-1364964016.jpg'

const Home = () => {
  return (
    <div>

    <div className="home">
      {/* <h1>EFORIA Limited Rwanda <br />The Best Clearing Company in Rwanda</h1>  */}
    </div>

    <div className="home1">
      <h4>We're your business <br/> Clearing partners.</h4>
      <div className="homeabout">
        <p> EFORIA ltd is a freight forwarding and clearing company here in Rwanda.<br/> 
            We are in charge of giving a good service to clients that want to import.<br/>or export goods 
            We help them by clearing taxes for them in the RRA and help<br/> them by advising  good transport ways to use.
        </p>
        <div className="btns">
        <button className="main__btn"><Link to="/about">Get to Know Us</Link></button>
        </div>
      </div>
    </div>

    <div className="cooking_classes">
      <h1>Our Services</h1>
      <div className="work-list">

        <div className="work">
          <img src= {pic2} alt="Freight Forwarding" />
          <div className="layer">
            <h2><Link to="/">Freight Forwarding</Link></h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
        </div>

        <div className="work">
          <img src={pic3} alt="Clearing Taxes" />
          <div className="layer">
            <h2><Link to="/">Clearing Taxes</Link></h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
        </div>

        <div className="work">
          <img src={pic2} alt="French Dessert" />
          <div className="layer">
            <h2><Link to="/">French Dessert</Link></h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
        </div>
      </div>
    </div>

    <div className="home2">
      <img src={pic3} alt="containers" />
      <div className="homeabout">
        <h1>Local Professionals</h1>
        <p>
          We offer free consultations to discuss your questions
          <br /> and understand the scope of your needs. This enables
          <br /> you to meet us personally to determine if we are a good
          <br /> match. Conveniently located in Gikondo, contact us and
          <br /> set up your consultation today.
        </p>
        <div className="btns">
          <button className="main__btn">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>

    <div className="cooking_classes">
      <h1>Blog</h1>
      <div className="work-list">

        <div className="work">
          <img src={pic2}  alt='' />
          <div className="layer">
            <h2><Link to="/">Freight Forwarding</Link></h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
          <button className="bbtn"><Link to="/">Read More</Link></button>
        </div>

        <div className="work">
          <img src={pic3}  alt=''/>
          <div className="layer">
            <h2><Link to="/">Clearing Taxes</Link></h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
          <button className="bbtn"><Link to="/">Read More</Link></button>
        </div>

        <div className="work">
          <img src={pic2} alt='' />
          <div className="layer">
            <h2><Link to="/">French Dessert</Link></h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
          <button className="bbtn"><Link to="/">Read More</Link></button>
        </div>

      </div>
      <button className="bbtn2"><Link to="./Blog">Show More</Link></button>
    </div>
    </div>
  )
}

export default Home
