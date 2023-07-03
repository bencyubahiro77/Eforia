import React from 'react';
import { Link } from 'react-router-dom';
import pic2 from '../images/image-1.jpg'
import pic3 from '../images/consulting-abstract-concept-vector-illustration_107173-24712.jpg'

const Home = () => {

  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog`);
  //       const sortedBlogs = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //       setBlogs(sortedBlogs.slice(0, 3));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div>

    <div className="home">
      <h1>EFORIA Limited Rwanda <br /> Clearing Company </h1> 
      <p>We are flexible and dedicated Clearing Service 
      Partner. <br />We work with you to design custom solutions <br />
      that add value to your business.
      </p>
      <button><Link to="/contact">Reach Out</Link></button>
    </div>

    <div className="home1">
      <h4>We're your business <br/> Clearing partners.</h4>
      <div className="homeabout">
        <p> EFORIA Ltd is a Freight Forwarding and Clearing company here in Rwanda.
            We are in charge of giving a good service to clients that want to import or export goods.
            We assist individuals by handling their tax matters with the 
            RRA and providing guidance on efficient transportation options to utilize.
        </p>
        <div className="btns">
        <button className="main__btn"><Link to="/about">Get to Know Us</Link></button>
        </div>
      </div>
    </div>

    <div className="cooking_classes">
      <h1>What We Do</h1>
      <div className="work-list">

        <div className="work">
          <img src= {pic2} alt="Freight Forwarding" />
          <div className="layer">
            <h2>Freight Forwarding</h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
        </div>

        <div className="work">
          <img src={pic3} alt="Clearing Taxes" />
          <div className="layer">
            <h2>Clearing Taxes</h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
        </div>

        <div className="work">
          <img src={pic2} alt="French Dessert" />
          <div className="layer">
            <h2>Business Advisor</h2>
            <p>Short ribs fatback kevin spare ribs biltong pig bacon corned beef kielbasa porchetta</p>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="home2">
      <img src={pic3} alt="containers" />
      <div className="homeabout">
        <h1>Local Professionals</h1>
        <p>
          We offer free consultations to discuss your questions
          and understand the scope of your needs. This enables
          you to meet us personally to determine if we are a good
          match. Conveniently located in Gikondo, contact us and
          set up your consultation today.
        </p>
        <div className="btns">
          <button className="main__btn">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div> */}

    {/* <div className="cooking_classes">
        <h1>Latest Blog</h1>
        {isLoading ? (
          <div className="loading-circle"></div>
        ) : (
          <div className="work-list">
            {blogs.map((blog) => (
              <div className="work" key={blog._id}>
                <img src={blog.image} alt="" />
                <div className="layer">
                  <h2>
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                  </h2>
                  <p>{blog.desc.slice(0, 100)}</p>
                </div>
                <button className="bbtn">
                  <Link to={`/blog/${blog._id}`}>Read More</Link>
                </button>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  )
}

export default Home
