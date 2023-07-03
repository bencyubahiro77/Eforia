import React from 'react'
import pic1 from '../images/think-professional.jpg'


const About = () => {
  return (
    <body>

      <div className="contact-sec-1">
        <h2>About us</h2>
        <p>WE WOULD LIKE YOU TO KNOW MORE ABOUT US</p>
      </div>
  

    <div className="about">
        <div className="head">
        <h2>EFORIA LTD</h2>
        <p>
            We'd like to provide you with an opportunity to get to know our staff
            as well as our firm's values before you come to see us. <br />
             Our firm provides outstanding service to our clients because of our dedication
            to relationships and strong values.
        </p>
        </div>
        
    <div className="profe">
       <img src= {pic1} alt=" " />

      <div className="profe-t">
        <h6>OUR VALUES</h6>
        <h1>Professionalism</h1>
        <p>
          Our firm is one of the leading firms in the area.
          By combining our expertise, experience and the energy of our
          staff, each client receives close personal and professional
          attention.
        </p>
        <p>
          Our high standards, service and specialized staff spell the
          difference between our outstanding performance, and other
          firms. We make sure that every client is served by the
          expertise of our whole firm.
        </p>
      </div>
    </div>  

    {/* <div className="quality">
      <div className="qlty1">
        <h2>Quality</h2>
        <p>An accounting firm is known for the quality of its service.<br />
          Our firm's reputation reflects the high standards we demand <br />
          of ourselves.
        </p>
        <p style={{ paddingBottom: '20px' }}>
          Our primary goal as a trusted advisor is to be available and <br />
          to provide insightful advice to enable our clients to make <br />
          informed financial decisions. We do not accept anything less <br />
          from ourselves and this is what we deliver to you
        </p>
      </div>

      <div className="qlty2">
        <p>We feel it is extremely important to continually professionally <br />
           educate ourselves to improve our technical expertise, financial <br />
           knowledge and service to our clients. Our high service quality and <br />
           "raving fan" clients are the result of  our commitment to excellence.
        </p>
        <p>
          We will answer all of your questions, as they impact both <br />
          your tax and financial situations. We welcome you to <br />
          contact us anytime.
        </p>
      </div>
    </div> */}

    <div className="team">
      <h1>Our Team</h1>

    <div className="team1">
    <img src={pic1} alt=" " />
      <div>
        <h3>Nsengiyumva Jean Bosco</h3>
        <p>
          The Firm's principal, Daniel T. Elder, graduated from the University of
          Missouri - St. Louis  with a B.S. degree <br />in Business Administration.
        </p>
        <p>
          Laura started her career in banking and real estate. She has 10 years
          of experience in public accounting with an <br />emphasis in closely held
          businesses and taxation. She has developed a niche in helping real
          estate developers <br />and investors with the various tax credits.
        </p>
      </div>
    </div>
     
    <div className="team1">
    <img src={pic1} alt=" " />
      <div>
        <h3>Nsengiyumva Jean Bosco</h3>
        <p>
          The Firm's principal, Daniel T. Elder, graduated from the University of
          Missouri - St. Louis  with a B.S. degree <br />in Business Administration.
        </p>
        <p>
          Laura started her career in banking and real estate. She has 10 years
          of experience in public accounting with an <br />emphasis in closely held
          businesses and taxation. She has developed a niche in helping real
          estate developers <br />and investors with the various tax credits.
        </p>
      </div>
    </div>

    <div className="team1">
    <img src={pic1} alt=" " />
      <div>
        <h3>Nsengiyumva Jean Bosco</h3>
        <p>
          The Firm's principal, Daniel T. Elder, graduated from the University of
          Missouri - St. Louis  with a B.S. degree <br />in Business Administration.
        </p>
        <p>
          Laura started her career in banking and real estate. She has 10 years
          of experience in public accounting with an <br />emphasis in closely held
          businesses and taxation. She has developed a niche in helping real
          estate developers <br />and investors with the various tax credits.
        </p>
      </div>
     </div>

    </div>  
    </div>    

    </body>
  );
}
export default About
