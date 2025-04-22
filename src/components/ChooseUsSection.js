import styles from './choose.module.css';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Welcome from './welcome';
import Research from './Research';




export default function ChooseUsSection() {
  return (
    <section className="choose-us-section">
      <div className="container">
        <Research heading={`Choose us`} work={`...Let's work together`} img={`image`} />
        <div className="definitions">
          <div className='section_vintage_two'>
            <div >
              <strong className='section_vintage'>vintage</strong> <em>adj.</em> –
            </div>
            <div>of old, recognized and enduring interest, importance or quality: classic</div>
          </div>
          <div>
            <div>
              <strong className='section_vintage'>hippo</strong> <em>n.</em> –
            </div>
            <div>meaning versatile, strong, friendly, assertive, caring, quirky and supportive</div>
          </div>
        </div>

        <div className="features">
          <div className="feature">
            <img src="/images/image (1).png" alt="We're unique" />
            <h3 className={styles.why_cls}>Why <span className="orange">We're unique</span></h3>
            <div className='underline'></div>
            <p className='introduction-section'>We believe in support, customer service and being available to our clients 24/7 .We answer our phones ,email and texts.</p>
          </div>

          <div className="feature">
            <img src="/images/image (2).png" alt="We're traditional" />
            <h3 className={styles.why_cls}>Why <span className="green">We're traditional</span></h3>
            <div className='underline'></div>
            <p className='introduction-section'>Our values are traditional, but our approach is not.Our clients are people we want to work with.we enjoy what we do and who we do it with.</p>
          </div>
          <div className="feature">
            <img src="/images/image (3).png" alt="We're special" />
            <h3 className={styles.why_cls}>Why <span className="red">We're special</span></h3>
            <div className='underline'></div>
            <p className='introduction-section'>We enjoy what we do and who we do it with ! Our passion is very apparent.Get in touch... you'll see the difference.</p>
          </div>
        </div>

        <div className="buttons">
          <button className="dark-btn">Learn More <MdOutlineArrowCircleRight size={16} /></button>
          <button className="orange-btn">Contact Us <MdOutlineArrowCircleRight size={16} /></button>
        </div>

        <div className="golden-rule">
          <p>We live and work by the</p>
          <h2 className="gold">GOLDEN RULE</h2>
          <blockquote className='quote'>“Do unto others as you would have them do unto you”</blockquote>
        </div>
        <div className='red_underline'></div>
        <div className="welcome_class"> </div>
        <div className="positions">
          <Welcome title="why_us_two " any={`second_border_two`} />
        </div>
        <div className="frequent-research">
          <div className='frequent_container'>
            <Research heading={`Choose us`} work={`...Let's work together`} cssCls={`${styles.choose_container_two}`} classesfor_h2={`${styles.classesfor_h2}`} img={`image (5)`} />
          </div>

          <div className="cards">
            <div className="card">
              <div className='card_img'>
                <img src="/images/image (6).png" alt="Creative People" />
              </div>
              <div className='underlines'></div>
              <div className='group_of'>We are a group of...</div>
              <h3><span className="orange">dedicated, creative people</span></h3>
              <p className='introduction-section'>We love print.  We love graphics and design We love graphics and design We love graphics and design...</p>
            </div>

            <div className="card">
              <img src="/images/image (7).png" alt="Bread & Butter" />
              <div className='underlines'></div>
              <h3 ><span className='group_of'>our </span><span className="green">bread & butter</span></h3>
              <p className='introduction-section'>Trusted long lasting relationships are the b & b of VHVM  lasting relationships are the b & b of VHVM  lasting relationships are the b & b of VHVM ...</p>
            </div>
            <div className="card">
              <img src="/images/image (8).png" alt="Got an Idea?" />
              <div className='underlines'></div>
              <div className='group_of'>Get an idea?</div>
              <h3><span className="red">Let's talk</span></h3>
              <p className='introduction-section'>We know that listening is an invaluable skill...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
