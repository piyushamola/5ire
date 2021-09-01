import React from 'react';

import fire from '../../../assets2/fire.png'

import paradigm from '../../../assets2/paradigm.svg';

// Assets2
import sdg from '../../../assets2/sdg.png';
import icon1 from '../../../assets2/icon1.svg';
import icon2 from '../../../assets2/icon2.svg';
import icon3 from '../../../assets2/icon3.svg';
import icon4 from '../../../assets2/icon4.svg';
import icon5 from '../../../assets2/icon5.svg';
import icon6 from '../../../assets2/icon6.svg';
import icon7 from '../../../assets2/icon7.svg';
import icon8 from '../../../assets2/icon8.svg';
import icon9 from '../../../assets2/icon9.svg';
import banner2 from '../../../assets2//foundedby.png';
import quote from '../../../assets2/quote.svg';


// components
import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent'
import Button from '../../../common-elements/Button/Button.js';
import CarouselComp from '../../../common-elements/Carousel/Carousel.js';
import AboutInfo from './aboutInfo/aboutInfo.js';
import Footer from '../../../common-elements/Footer/Footer';


//styles
import styles from './Body.scss'

//Routing
import { useHistory } from "react-router-dom";


const backGroundImagebanner2 = {
  backgroundImage: `url(${banner2})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: "no-repeat",
};

const aboutImages = [icon1, icon2, icon3, icon4, icon5, icon6];

const aboutPara = [""];

const aboutHeading = ["Sustainability by Design ", "On-chain Governance and Democracy", "Future-proof and Forkless upgradeability",
"Interoperability & cross-chain Transfers", "On-chain Governance and Democracy", "Future-proof and Forkless upgradeability"];

const proofOfFireImages = [icon7, icon8, icon9];

const proofOfFireHeading = ["Nominated Proof of Stake", "Proof of Benefit", "Proof of Donation"];
const proofOfFireParas = ["",
                          "",
                        ""];

function Body(props) {

  const history = useHistory();

    return (
    <div>
      <div className={styles.FirstPageBody}>
      <div className={styles.backGroundImageStyles}>
        <div className={styles.firstPageFooter}>
            <div>
              <img src={fire} className={styles.Applogo} alt="logo" />
            </div>
            <h1>
                Welcome To 5ire
            </h1>
            <h2>
             Blockchain * Sustainability = 5IRE
            </h2>
            <p>
               5irechain is a fifth-generation blockchain that aims to bring a paradigm shift from a for-profit to a for-benefit economy. 
            </p>
            <Button label="Explore More" btnClick={() => window.scroll(0, 700)} className={styles.button}/>
        </div>
        </div>
      </div>
      <section className={styles.GetStartedContainer}>
       <div>
         <div className={styles.getStartedInfo}>
          <div>
            <div className={styles.getStartedText}>
              <div>
                <p>Accelerating the implementation of the United Nations 2030 Sustainability Development Goals Agenda.   </p>
                <p> Aiming to bring the paradigm shift from For-profit to for-benefit economy.  </p>
              </div>
            <Button label="See Roadmap" btnClick={() => history.push('/roadmap')} className={styles.button}/>
            </div>
          </div>
        </div>
        {/* style={aboutHeadStyle[index]} */}
         <div className={styles.aboutBody}>
              { aboutImages.map((img, index) => (
                <AboutInfo image={img}  para={aboutPara[index]} heading={aboutHeading[index]}/>
              ))}
          </div>
       </div>
      </section>
      <section className={styles.AboutFire}>
          <header className={styles.parentHeader}>
              <div className={styles.aboutHeader}>
                <div className={styles.aboutContent}>
                  <h1>5ire’s language =</h1>
                  <p>United Nation’s Sustainable Development Goals</p>
                </div>
                <div className={styles.aboutImageContainer}>
                  <img src={sdg} className={styles.aboutImage} alt="about"/>
                </div>
            </div>
          </header>
      </section>

      <section className={styles.WhyFire}>
        <header className={styles.whyFireHeader}>
          <div className={styles.learnWhatContent}>
            <div className={styles.whatFireContent}>
              <h1>What is 5ire ?</h1>
              <p>5IRE is an ecosystem that brings forth DLT technology and innovation for the service of humanity with a mission to bring a paradigm shift from “For Profit” to “For Benefit” across the globe. Providing systems and technologies that will eliminate the inefficiencies of digital exchange and communication.</p>
            </div>
            <div className={styles.LearnAbout}>
               <div>
                <p>Learn more about <br/> <b>5irechain Technology</b></p>
              </div>
              <Button label="Discover 5ire" btnClick={() => history.push('/technology')} className={styles.button}/>
           </div>
        </div>
        <div className={styles.learnWhyContent}>
           <div className={styles.whyFireContent}>
               <div>
                <p>In contrast to trends in the Fourth Revolution toward dehumanization, technology and innovation best practices need to be bent back toward the service of humanity.
                 5ire is a milestone in smooth transitioning of the world from 4IR to 5IR. </p>

                 <p>Also its breakthrough to help the world in achieving the UN SDGs in the fast and efficient way.</p>
              </div>
              <Button label="Learn More About 5IR"  btnClick={() => window.open('https://www.youtube.com/watch?v=RDiHaHPOVH0')} className={styles.button}/>
           </div>
            <div className={styles.whyFireHeading}>
              <h1>Why 5IR ?</h1>
            </div>
        </div>
        </header>
        <div className={styles.founder}>
          <div style={backGroundImagebanner2}>
            <div className={styles.founderContent}>
              <h1>Founded by some of the pioneers in Impact & Blockchain Industry</h1>
              <Button label="Learn about 5ire Team" btnClick={() => history.push('/about')} className={styles.button}/>
            </div>
          </div>
        </div>
        <footer>
          <div className={styles.footerStyles}>
              <div className={styles.footerContent}>
                  <h1>Proof of 5ire </h1>
                  <p>The first sustainable by design hybrid consensus and reward distribution mechanism</p>
                  </div>
              <div>
                  <div className={styles.footerBody}>
                      { proofOfFireImages.map((img, index) => (
                        <ImageHeadingContent image={img} para={proofOfFireParas[index]} heading={proofOfFireHeading[index]}/>
                      ))}
                  </div>
              </div>
         </div>
        </footer>
        <div className={styles.textStyle}>
            <img src={quote} alt="quote"/>
             <p>   </p>
        </div>
      </section>


      <section className={styles.Explore}>
        <header className={styles.aboutExplore}>
            <div>
              <img src={paradigm} className={styles.paradigmImage} alt="paradigm"/>
            </div>
            <div className={styles.exploreContent}>
              <h1>Redefining New Standards for Sustainability</h1>
              <p>The 5irechain runtime provides tooling for IoT, on-chain governance, Defi primitives, Self-sovereign digital identity management, Zero knowledge primitives and e-governance. 5irechain has the capability to execute EVM smart contracts with full compatibility with ethereum and WebAssembly WASM smart contracts</p>
              <Button label="Build on 5ire" btnClick={() => window.open('https://5ire.gitbook.io/5ire-wiki/developer-guide/untitled/')} className={styles.button}/>
            </div>
        </header>
        <div className={styles.whyBody}>
           <h1>FOUNDERS FEATURED IN</h1>
        </div>
        <footer>
            <CarouselComp/>
        </footer>
        <Footer/>
      </section>
   </div>
    );
}

export default Body;