import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>ECHODEX</title>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <meta name="description" content="ECHODEX is a decentralized launchpad that
         allows users to launch their token and create their initial 
         token sale with staking benefits to their holders and they don't 
         require any Coding Knowledge For this." />
        <link rel="apple-touch-icon" sizes="180x180" href="/echodex.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/echodex.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/echodex.jpg" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/echodex.jpg" />
      </Head>
      <Navbar />
      <Cover />

      {/* feature-section-------- */}
      <section className={styles.featureSection}>
        <div className={styles.featureBlock}>

          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-cube"></i></p>
            <h4 className={styles.featureHead}>GameFi Solution</h4>
            <p className={styles.featureText}>
             Play-To-Earn (P2E) models for user engagement and rewards
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-shield-alt"></i></p>
            <h4 className={styles.featureHead}>DeFi Solution</h4>
            <p className={styles.featureText}>
              Robust yield farming and staking mechanisms for passive income
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-project-diagram"></i></p>
            <h4 className={styles.featureHead}>Ecosystem Benefits</h4>
            <p className={styles.featureText}>
            Sustainable returns for long-term token holders
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-project-diagram"></i></p>
            <h4 className={styles.featureHead}>24/7 customer support and community resources</h4>
            <p className={styles.featureText}>
            Opportunities for social interaction and community engagement
            </p>
          </div>

        </div>
      </section>
      {/* feature-section-------- */}

      {/* about-section------ */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageSection}>
         
          <video src="/vid.mp4"  />
        </div>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Join the echodex community today and experience the future of gamefi and defi!</h3>
          {/* <p className={styles.aboutText}>
          "unlock a new world of possibilities with echodex, where blockchain gaming meets decentralized finance."
          </p> */}
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Security and transparency: Robust security measures to protect user assets transparent tokenomics and governance processes </p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Innovative ecosystem: Seamless integration of gamefi and defi unique play-to-earn models and rewards</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Community focus:  Vibrant community with regular updates, events, and contests opportunities for users to contribute and participate in governance</p>
        </div>
      </section>
    
      <section className={styles.aboutSection}>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Vision and Mission</h3>
          <p className={styles.aboutText}>
          </p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Vision</h2>
            To democratize access to decentralized finance by creating a user-friendly, secure and transparent ecosystem for gaming and decentralized exchange</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Mission</h2>
            Echodex symbolizes the voice & feedback of a community driven decentralized exchange. Our Mission is to create a platform that resonates with users and responds dynamically to market needs.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Solution</h2>
            Echodex is built on cutting-edge blockchain technology to enable fair trading, reduce fees and empower a community-driven governance model.
          </p>
        </div>
        <div className={styles.aboutImageSection}>
          <img src="/vision-illustration.svg" alt="image" />
        </div>
      </section>
      {/* about-section------ */}
      {/* rail-section-- */}
      <section className={styles.railSection}>

        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>Incentivized Community</h3>
              <p className={styles.railText}>
              Accessing premium features and advanced trading tools.
This multi-utility approach incentivizes active participation and creates a self-sustaining ecosystem.
Staking to secure the network and earn liquidity rewards, Airdrop, and referral campaign system
            </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>Our Native Defi Swap & Gamefi Interface</h3>
              <p className={styles.railText}>
              A full-scale mainnet launch. Rolling out advanced features such as algorithmic trading and integrated DeFi solutions.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}> Innovate Across Sectors  </h3>
              <p className={styles.railText}>
              Integration of advanced blockchain technology interoperable across various block chain network with engaging gaming mechanics to redefine financial and interactive digital experiences.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}> Empower the Community</h3>
              <p className={styles.railText}>
              Utilizing Features and transparent governance, fair token distribution, and robust incentive programs to build a truly decentralized platform.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>Driving Sustainable Growth</h3>
              <p className={styles.railText}>
              Implement technical safeguards, such as anti-whale measures and auto-liquidity features, to ensure long-term value and stability.
              </p>
            </div>
          </div>
        </div>

      </section>
      {/* rail-section-- */}

      {/* tokenomics-section-- */}
      <section className={styles.tokenomicsSection} id="token">
        <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
        <div className={styles.tokenomicsDetailsHolder}>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Token Name</h4>
            <p className={styles.tokenDetailText}>ECHODEX</p>
            <h4 className={styles.tokenDetailHead}>Total Supply</h4>
            <p className={styles.tokenDetailText}>10,000,000</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale Start Date</h4>
            <p className={styles.tokenDetailText}>1st April 2025</p>
            <h4 className={styles.tokenDetailHead}>Currencies Accepted</h4>
            <p className={styles.tokenDetailText}>BNB</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>ICO Pre- Sale ECHODEX Supply Launch</h4>
            <p className={styles.tokenDetailText}>4,600,000</p>
            <h4 className={styles.tokenDetailHead}>ICO Supply OF ECHODEX launch</h4>
            <p className={styles.tokenDetailText}>3,500,000</p>
            <h4 className={styles.tokenDetailHead}>Soft cap</h4>
            <p className={styles.tokenDetailText}>4000 BNB</p>
            <h4 className={styles.tokenDetailHead}>ICO Start Date</h4>
            <p className={styles.tokenDetailText}>31st of June 2025</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 1st Phase</h4>
            <p className={styles.tokenDetailText}>1 BNB = 2,600 EDEX</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 2nd Phase</h4>
            <p className={styles.tokenDetailText}>1 BNB = 1,300 EDEX</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 3rd Phase</h4>
            <p className={styles.tokenDetailText}>1 BNB = 650 EDEX</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale- 4th phase</h4>
            <p className={styles.tokenDetailText}>	1 BNB = 325 EDEX</p>
          </div>
        </div>
        <p><small><i>*The Data Above*</i></small></p>
      </section>
      {/* tokenomics-section-- */}

      <section className={styles.chartSection}>
        <div>
          <h3>Tokenomics</h3>
          <img src="/tokenomics-chart.png" alt="chart" />

        </div>
        <div>
          <h3>Fund Allocation</h3>
          <img src="/allocation-chart.png" alt="chart" />
        </div>
      </section>

      {/* roadmap-section---------- */}
      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Phase 1: Development & Launch</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Token creation and presale.
                  </li>
                  <li>Game prototypes using SolidWorks.
                  </li>
                  <li>Staking and liquidity pool deployment.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Phase 2: Growth & Expansion</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Launch GameFi visuals and P2E features.
                  </li>
                  <li>Community-building campaigns.
                  </li>
                 
              
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Phase 3: Scalability</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Launch an AI-powered Web2-to-Web3 interoperability builder.
                  </li>
                  <li>Upgrade ecosystem features based on community feedback.
                  </li>
  
                </ul>
              </p>
            </div>
          </div>
       
         
  
       
      
          
     
        
       
        </div>
      </section>
      {/* roadmap-section-------- */}


      {/* why-section-- */}
      <section className={styles.whySection}>
        <div className={styles.whyTextSection}>
          <h2 className={styles.whyHeader}>Why choose us?</h2>
          <p className={styles.whyAnswer}>
          Echodex is pioneering a new era in gamefi and defi
          </p>
          <div className={styles.whyAnswerPoint}>
            <h3>Authentic Brand</h3>
            <p>
              Our aim will be to be able to provide genuine value to the community
              is the first step toward developing a meaningful products and services
              and, as a result, a successful organisation.
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Comprehensive Platform</h3>
            <p>
              We prefer comprehensive platform for cryptocurrency enthusiasts rather
              than having too many platforms to achieve their goal of growing funds
              in the world of Blockchain
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Simple To Use</h3>
            <p>
              Our platform will be extremely simple to use, with only the necessary
              options for users and other stakeholders.
            </p>
          </div>
        </div>
        <div className={styles.whyImageSection}>
          <img src="/palmer.jpeg" alt="ECHODEX" />
        </div>
      </section>
      {/* why-section-- */}
      {/* team-section------ */}
      <section className={styles.teamSection} id="team">
        <h3 className={styles.teamHeader}>Team</h3>
        <div className={styles.teamBlock}>
         
          <div className={styles.teamCard}>
            <img src="/rabbit.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>N Tri </h4>
            <p className={styles.teamDes}>Blockchain Developer </p>
            <p>
              With immense knowledge in blockchain, Web 3 and Web 2  technologies .
            </p>
          </div>
          <div className={styles.teamCard}>
            <img src="/wolf.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Aak T </h4>
            <p className={styles.teamDes}>Finance and Market</p>
            <p>
              Creative mind with enthusiastic new view and aproach towards the new blockchain maarket needs.
            </p>
          </div>
        </div>
      </section>
      {/* team-section------ */}
      {/* whitepaper-section------- */}
      <section className={styles.whitepaperSection} id="whitepaper">
        <div className={styles.whitepaperBlock}>
          <div className={styles.whitepaperTextSection}>
            <h2 className={styles.whitepaperHead}>Whitepaper</h2>
            <p className={styles.whitepaperText}>
              Total of 10 Million (10,000,000) ECHODEXs will be minted through
              Smart contract and deployed through Binance Smart Chain . We will be selling 20% of the
              tokens in presale which will be done in 4 phases which will run max for 92 days . 1st
              presale for 45 days and rest 3 pre-sales for 15 days each. If the Pre-Sale phases goals
              are reached before time, we will start next phase of pre sale within 24 hours. We have
              kept the investment amount to minimum 0.1 BNB for our presale which will make easy for
              most of the retail investors to invest.
              We will not accept any FIAT currencies during the Pre-Sale as we firmly believe in digital
              currencies and that&apos;s why working on building a ecosystem based on blockchain and
              crypto assets and crypto currencies.
            </p>
          </div>
          <div className={styles.whitepaperActionSection}>
            <Link href="https://echodex.network/whitepaper.pdf"><a target="_blank" rel="noreferrer">Read Online</a></Link>
            <Link href="https://echodex.network/whitepaper.pdf"><a target="_blank" rel="noreferrer" download>Download</a></Link>
          </div>
        </div>
      </section>
      {/* whitepaper-section------- */}

      {/* contact-section-- */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactSocialSide}>
          <h3 className={styles.contactHeader}>Contact Us</h3>
          <div className={styles.contactSocialBlock}>
            <Link href="mailto:support@echodex.network"><a target="_blank" rel="noreferrer"><i className="las la-envelope"></i>support@echodex.network</a></Link>
            <Link href="https://t.me/ECHODEX_CHANNEL"><a target="_blank" rel="noreferrer"><i className="lab la-telegram"></i>Telegram Channel</a></Link>
            <Link href="https://t.me/echodexproject"><a target="_blank" rel="noreferrer"><i className="lab la-telegram"></i>Telegram Group</a></Link>
            <Link href="https://x.com/EchoDex_Project?t=It3yesFILAcH6DglCUdlFw&s=09"><a target="_blank" rel="noreferrer"><i className="lab la-twitter-square"></i>Twitter</a></Link>
            <Link href="#"><a target="_blank" rel="noreferrer"><i className="lab la-location"></i>Office Location:
            Schuepisstrasse 5,hosenruck, switzerland</a></Link>
        
          </div>
        </div>
        <div className={styles.contactFormSide}>
          <div className={styles.contactForm}>
            <input type="text" id='name' required autoComplete='off' placeholder='Full Name' />
            <input type="email" id='email' required autoComplete='off' placeholder='Email' />
            <input type="text" id='telegram' required autoComplete='off' placeholder='Telegram' />
            <input type="text" id='message' required autoComplete='off' placeholder='Message' />
            <button className={styles.submitBtn} onClick={submitForm}>Send Message</button>
          </div>
        </div>
      </section>
      {/* contact-section-- */}

      {/* footer--------- */}
      <section className={styles.footerSection}>
        <div className={styles.brandFooter}>
          <p className={styles.brandText}>Designed with</p>
          <p className={styles.heart}><i className="las la-heart"></i></p>
          <p className={styles.brandText}>by</p>
          <p className={styles.brandText}><Link href="https://www.ECHODEX.com"><a target="_blank" rel="noreferrer">ECHODEX</a></Link></p>
        </div>
      </section>
      {/* footer--------- */}


    </>
  )
}


function submitForm() {
  let name = document.getElementById("name").value;
  let telegram = document.getElementById("telegram").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let data = {
    name,
    telegram,
    email,
    message
  }

  fetch('/api/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    alert("Application Submitted!");

    document.getElementById("name").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
  })
}