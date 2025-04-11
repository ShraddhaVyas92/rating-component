import { useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
    const [rating, setRating] = useState();
    const [submitted, setSubmitted] = useState(false);
    return(
        <div className="main-container">
            {!submitted ? (
        <>
          
          <Header />     
          <div className="content">
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>
           </div> 

          <div className="rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={rating === n ? "selected" : ""}
                onClick={() => setRating(n)}
              >
                
                {n}
              </button>
            ))}
          </div>

          <button className="btn-submit" onClick={() => setSubmitted(true)}>
            Submit
          </button>
        </>
      ) : (
        <div className="thank-you hidden">
            <img src="./images/illustration-thank-you.svg"/>
            <p>You selected <span className="rating-number">{rating}</span> out of 5</p>
            <h2> Thank you! </h2>

            <p> We appreciate you taking the time to give rating, if you ever need
                more support, don't hesitate to get in touch! </p>

                <button className="btn-submit" id="rate-again" onClick={()=>setSubmitted(false)}>Rate Agian</button>
        </div>
      )}
        </div>
    )
}

export default Hero;
