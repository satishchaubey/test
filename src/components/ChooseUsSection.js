import styles from './choose.module.css'
export default function ChooseUsSection() {
  return (
    <section className="choose-us-section">
      <div className="container">
        <div className={`${styles.choose_container}`}>
          <div>
            <img src="/images/image.png" alt="" className={`${styles.image_choose}`}/>
          </div>
          <h2><span className="highlight">Choose us</span> ...Let's work together</h2>
        </div>
        <div className="definitions">
          <p><strong>vintage</strong> <em>adj.</em> – of old, recognized and enduring interest, importance or quality: classic</p>
          <p><strong>hippo</strong> <em>n.</em> – meaning versatile, strong, friendly, assertive, caring, quirky and supportive</p>
        </div>

        <div className="features">
          <div className="feature">
            <img src="/icons/unique.png" alt="We're unique" />
            <h3>Why <span className="orange">We're unique</span></h3>
            <p>We believe in support, customer service and being available to our clients 24/7...</p>
          </div>
          <div className="feature">
            <img src="/icons/traditional.png" alt="We're traditional" />
            <h3>Why <span className="green">We're traditional</span></h3>
            <p>Our values are traditional, but our approach is not...</p>
          </div>
          <div className="feature">
            <img src="/icons/special.png" alt="We're special" />
            <h3>Why <span className="red">We're special</span></h3>
            <p>We enjoy what we do and who we do it with...</p>
          </div>
        </div>

        <div className="buttons">
          <button className="dark-btn">Learn More</button>
          <button className="orange-btn">Contact Us</button>
        </div>

        <div className="golden-rule">
          <p>We live and work by the</p>
          <h2 className="gold">GOLDEN RULE</h2>
          <blockquote>“Do unto others as you would have them do unto you”</blockquote>
        </div>

        <div className="frequent-research">
          <h2><span className="highlight">We are</span> Frequent Research</h2>

          <div className="cards">
            <div className="card">
              <img src="/icons/creative.png" alt="Creative People" />
              <h3><span className="orange">dedicated, creative people</span></h3>
              <p>We love print. We love graphics and design...</p>
            </div>
            <div className="card">
              <img src="/icons/handshake.png" alt="Bread & Butter" />
              <h3><span className="green">bread & butter</span></h3>
              <p>Trusted long lasting relationships are the b & b of VHVM...</p>
            </div>
            <div className="card">
              <img src="/icons/idea.png" alt="Got an Idea?" />
              <h3><span className="red">Let's talk</span></h3>
              <p>We know that listening is an invaluable skill...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
