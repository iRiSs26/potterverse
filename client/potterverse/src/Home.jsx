import { useState } from 'react';
import logo from './night.jpg';
import './Home.css';
import './Home1.css';
import './Home2.css';
import './Home3.css';
import './Home4.css';
import logo1 from './rec14.jpg';
import logo2 from './rec15.jpg';
import logo3 from './rec16.jpg';
import logo4 from './rec17.jpg';
import logo5 from './rec18.jpg';
import logo6 from './rect2.jpg';
import logo7 from './th1.jpg';


function Home() {
    const [count, setCount] = useState(0)
  
    return (
        <>
       <div className="desktop-4">
      <img className="night-2-icon" alt="" src={logo} />
     
      <section className="conversation-area">
        <div className="content-frame">
          <img
            className="question-mark-icon"
            loading="eager"
            alt=""
            src={logo1}
          />
          <div className="answer-area">
            <div className="answer-a-few">{`Answer a few enchanting questions and let the magic unfold as we reveal your unique Patronus. `}</div>
          </div>
        </div>
      </section>
      <section className="narrative-section">
        <div className="news-feed-container">
          <div className="engage-in-enchanting">
            Engage in enchanting conversations about your favorite movie
            moments, unravel the mysteries of the Wizarding World, and share
            your spellbinding insights.
          </div>
          <img
            className="description-field-icon"
            loading="eager"
            alt=""
            src={logo2}
          />
        </div>
      </section>
      <section className="button-element">
        <div className="chat-frame">
          <div className="chat-frame-inner">
            <img
              className="frame-child"
              loading="eager"
              alt=""
              src={logo3}
            />
          </div>
          <div className="dive-into-a-container">
            <span>
              dive into a sea of magical narratives as users share their
              fanfictions, casting new spells and weaving tales beyond the pages
              of the Wizarding world.
            </span>
            <span className="span">.</span>
          </div>
        </div>
      </section>
      <section className="news-feed">
        <div className="stay-enchanted-with-the-latest-parent">
          <div className="stay-enchanted-with">
            Stay enchanted with the latest updates from the Wizarding World!
          </div>
          <div className="rectangle-wrapper">
            <img
              className="frame-item"
              loading="eager"
              alt=""
              src={logo4}
            />
          </div>
        </div>
      </section>
      <section className="character-quiz">
        <div className="character-info-parent">
          <img
            className="character-info-icon"
            loading="eager"
            alt=""
            src={logo5}
          />
          <div className="questions">
            <div className="think-you-know">
              Think you know your favorite Harry Potter characters inside out?
              Challenge your wizarding knowledge with our "How Well Do You Know
              Your Favorite Characters?"
            </div>
          </div>
        </div>
      </section>
      <img className="desktop-4-child" alt="" src={logo6} />
      <section className="vectordivider">
        <div className="frame-container">
          <div className="about-us-ad-container">
            <p className="p">{`   `}</p>
            <p className="about-us-ad">
              <span className="span1">{`   `}</span>
              <span>About us. Ad choices</span>
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="reach-out-to">
              {" "}
              reach out to us. Privacy and cookies
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="faqs"> faq’s. overview</p>
          </div>
          <img
            className="th-2-icon"
            loading="eager"
            alt=""
            src={logo7}
          />
        </div>
      </section>
    </div>
  
        
        </>
    )
}
export default Home;