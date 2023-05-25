import React from 'react'
import { Link } from 'react-router-dom';
import pic1 from '../images/think-professional.jpg'


const Blog = () => {
  return (
    <div>
      <body>

      <div className="contimg">
        <div className="contact2">
        <h1>Blog</h1>
        </div>
      </div>

      <div className="blog-container">

        <div className="blog">
            <img src={pic1} alt=" " />
            <h2>Blog Title 1</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis metus. Aliquam bibendum augue eu sapien fringilla, in euismod
            velit consequat. Sed blandit justo a nisi aliquet, vel bibendum dolor
            pharetra. Curabitur fermentum consectetur enim, sit amet molestie risus
            fermentum sed.
            </p>
            <Link to="/">Read More</Link>
        </div>

        <div className="blog">
            <img src={pic1} alt=" " />  
            <h2>Blog Title 2</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis metus. Aliquam bibendum augue eu sapien fringilla, in euismod
            velit consequat. Sed blandit justo a nisi aliquet, vel bibendum dolor
            pharetra. Curabitur fermentum consectetur enim, sit amet molestie risus
            fermentum sed.
            </p>
            <Link to="/">Read More</Link>
        </div>

        <div className="blog">
        <img src={pic1} alt=" " /> 
            <h2>Blog Title 3</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis metus. Aliquam bibendum augue eu sapien fringilla, in euismod
            velit consequat. Sed blandit justo a nisi aliquet, vel bibendum dolor
            pharetra. Curabitur fermentum consectetur enim, sit amet molestie risus
            fermentum sed.
            </p>
            <Link to="/">Read More</Link>
        </div>

        <div className="blog">
        <img src={pic1} alt=" " />
            <h2>Blog Title 4</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis metus. Aliquam bibendum augue eu sapien fringilla, in euismod
            velit consequat. Sed blandit justo a nisi aliquet, vel bibendum dolor
            pharetra. Curabitur fermentum consectetur enim, sit amet molestie risus
            fermentum sed.
            </p>
            <Link to="/">Read More</Link>
        </div>

        <div className="blog">
        <img src={pic1} alt=" " />
            <h2>Blog Title 5</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis metus. Aliquam bibendum augue eu sapien fringilla, in euismod
            velit consequat. Sed blandit justo a nisi aliquet, vel bibendum dolor
            pharetra. Curabitur fermentum consectetur enim, sit amet molestie risus
            fermentum sed.
            </p>
            <Link to="/">Read More</Link>
        </div>

        <div className="blog">
        <img src={pic1} alt=" " />
            <h2>Blog Title 6</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis metus. Aliquam bibendum augue eu sapien fringilla, in euismod
            velit consequat. Sed blandit justo a nisi aliquet, vel bibendum dolor
            pharetra. Curabitur fermentum consectetur enim, sit amet molestie risus
            fermentum sed.
            </p>
            <Link to="/">Read More</Link>
        </div>
        <div>
      </div>
      </div>
      </body>
    </div>
  )
}

export default Blog
