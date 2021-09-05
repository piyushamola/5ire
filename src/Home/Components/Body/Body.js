import React from 'react';

import fire from '../../../assets2/fire.png'

// Assets2
import sdg from '../../../assets2/sdg.png';
import icon1 from '../../../assets2/icon1.svg';
import icon2 from '../../../assets2/icon2.svg';
import icon3 from '../../../assets2/icon3.svg';
import icon4 from '../../../assets2/icon4.svg';
import icon5 from '../../../assets2/icon5.svg';
import icon6 from '../../../assets2/icon6.svg';
import quote from '../../../assets2/quote.svg';


// Proof of fire
import NPOS from '../../../assets2/ProofOfFire/NPOS.png';
import POB from '../../../assets2/ProofOfFire/proofofbenefit.png';
import POD from '../../../assets2/ProofOfFire/proofofdonation.png'


// Teams images 

import PG from '../../../assets2/teamPictures/PG.png';
import PD from '../../../assets2/teamPictures/PD.png';
import VM from '../../../assets2/teamPictures/VM.png';


// advisors 

import joe from '../../../assets2/advisors/Joe.png';
import mathew from '../../../assets2/advisors/Mathew.png';
import RichardSwart from '../../../assets2/advisors/RichardSwart.png';
import Rongaron from '../../../assets2/advisors/Rongaron.png';
import sam from '../../../assets2/advisors/Sam.png';
import yechuanHu from '../../../assets2/advisors/YechuanHu.png';

// logos


import ted from '../../../assets2/logos/ted.png'
import forbes from '../../../assets2/logos/Forbes-logo.png'
import entrepreneur from '../../../assets2/logos/Entrepreneur_logo.png'
import globe from '../../../assets2/logos/globe.png'
import nasdaq from '../../../assets2/logos/nasdaq.png'

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


// features
const aboutImages = [icon1, icon2, icon3, icon4, icon5, icon6];
const aboutHeading = ["Sustainability by Design ", "On-chain Governance and Democracy", "Future-proof and Forkless upgradeability",
"Interoperability & cross-chain Transfers", "On-chain Governance and Democracy", "Future-proof and Forkless upgradeability"];


// proof of fire
const proofOfFireImages = [NPOS, POB, POD];
const proofOfFireDimensions = [{width: '10.7rem', height: '12.2rem'}, { width: '12.8rem', height: '12.2rem'}, { width: '11.8rem', height: '10.5rem'}];
const proofOfFireHeading = ["Nominated Proof of Stake", "Proof of Benefit", "Proof of Donation"];

// team
const teamImages = [PG, PD, VM];
const aboutTeamHeadings = ["Pratik Gauri", "Prateek Dwivedi", "Vilma Matilla"];
const aboutImageSize = [{ width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}];
const aboutTeamSubPara = ["Co Founder","Co Founder", "Co Founder"];
const responsiveForTeam = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


//logos

const logos = [nasdaq, forbes, ted, entrepreneur, globe];
const logosDimensions = [{ width: '16rem', height: '4rem', marginTop: '2.5rem'}, { width: '14.7rem', height: '8.3rem', marginBottom: '4rem'}, { width: '12.3rem', height: '4.5rem', marginTop: '2rem'}, { width: '23.8rem', height: '9rem', marginBottom: '4rem'}, { width: '11.2rem', height: '9.4rem', marginBottom:'4rem'}];
const commonStylesLogos = {
  marginLeft: '8rem',
}
const responsiveForLogos = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


// advisors 

const advisorsImages = [joe, mathew, RichardSwart, Rongaron, sam, yechuanHu];
const advisorsHeadings = ["Mathew Neimera", "Mathew Neimera", "Mathew Neimera", "Mathew Neimera", "Mathew Neimera","Mathew Neimera"];
const advisorsImageSize = [{ width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'},  { width: '17.6rem', height: '17.6rem'},  { width: '17.6rem', height: '17.6rem'},  { width: '17.6rem', height: '17.6rem'}];
const advisorsSubPara = ["President & Co-founder of Aleph Zero, Ph.D. IBM High Performance Computing","President & Co-founder of Aleph Zero, Ph.D. IBM High Performance Computing", "President & Co-founder of Aleph Zero, Ph.D. IBM High Performance Computing", "President & Co-founder of Aleph Zero, Ph.D. IBM High Performance Computing", "President & Co-founder of Aleph Zero, Ph.D. IBM High Performance Computing", "President & Co-founder of Aleph Zero, Ph.D. IBM High Performance Computing"];
const responsiveForAdvisors = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


// Main Component

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
             Blockchain X Sustainability = 5IRE
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
        <div className={styles.aboutFireContent}>
            <div className={styles.whatIsFire}>
                <h1>What is 5ire ?</h1>
                <p>5IRE is a Collaborative Blockchain-Driven Platform with an innovative SDG driven consensus mechanism , with a mission to bring a paradigm shift from “For Profit” to “For Benefit” across the globe, as every single transaction on the 5IRE Ecosystem Contributes to Social Impact.</p>
            </div>
            <div className={styles.learnMoreAbout}>
                  <div className={styles.learnMoreAboutText}>
                    <p>Learn more about</p>
                    <h1>5irechain Technology </h1>
                  </div>
                  <Button label="Discover 5ire" btnClick={() => history.push('/technology')} className={styles.button}/>
            </div>
        </div>
        <div className={styles.whyFireContent}>
            <div className={styles.whyIsFire}>
                <h1>Why 5IR ?</h1>
                <p>In contrast to trends in the Fourth Revolution toward dehumanization, technology and innovation best practices need to be bent back toward the service of humanity.5ire is a milestone in smooth transitioning of the world from 4IR to 5IR. Also its breakthrough to help the world in achieving the UN SDGs in the fast and efficient way.</p>
            </div>
            <div className={styles.learnMoreAbout}>
                  <div className={styles.learnMoreAboutText}>
                    <p>Learn more about</p>
                    <h1>5th Industrial Revolution</h1>
                  </div>
                  <Button label="Learn More About 5IR"  btnClick={() => window.open('https://www.youtube.com/watch?v=RDiHaHPOVH0')} className={styles.button}/>
            </div>
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
      <div className={styles.quoteStyle}>
            <img src={quote} alt="quote"/>
             <p><span>Society & environment. </span>is where we all meet, where all have a mutual interest, the one thing all of us share. </p>
        </div>
      <section className={styles.WhyFire}>
        <footer>
          <div className={styles.footerStyles}>
              <div className={styles.footerContent}>
                  <h1>Proof of 5ire </h1>
                  <p>The first sustainable by design hybrid consensus and reward distribution mechanism</p>
              </div>
              <div className={styles.proofOfFireBoxes}>
                  <div className={styles.footerBody}>
                      { proofOfFireImages.map((img, index) => (
                        <div className={styles.proofAddition}>
                          <div>
                            <ImageHeadingContent image={img}  heading={proofOfFireHeading[index]} 
                                  imgSize={proofOfFireDimensions[index]}
                                  headingStyles={styles.headingStyles}/>
                            </div>
                        </div>
                      ))}
                  </div>
                  <div className={styles.buttonStyles}>
                  <Button label="Learn More"  btnClick={() => history.push('/technology')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                  </div>
              </div>
         </div>
         <div className={styles.featuresHeading}><h1>Features</h1></div>
         <div className={styles.features}>
              { aboutImages.map((img, index) => (
                <AboutInfo image={img} heading={aboutHeading[index]}/>
              ))}
          </div>
        </footer>
      </section>


      <section className={styles.foundersSection}>
        <header className={styles.founder}>
            <div className={styles.founderContent}>
              <h1>Founded by some of the pioneers in Impact & Blockchain Industry</h1>
            </div>
        </header>
        <div className={styles.aboutTeam}>
                      { teamImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={aboutTeamHeadings[index]} subHead={aboutTeamSubPara[index]}
                        imgSize={aboutImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}/>
                      ))}
         </div>
         <div className={styles.aboutTeamMobile}>
             <CarouselComp responsive={responsiveForTeam}>
             { teamImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={aboutTeamHeadings[index]} subHead={aboutTeamSubPara[index]}
                        imgSize={aboutImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}/>
                      ))}
             </CarouselComp>
          </div>
         <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button label="Meet Fire Team" btnClick={() => history.push('/about')}/>
         </div>
        <div className={styles.foundersFeatured}>
           <h1>Founders Featured In</h1>
        </div>
        <div className={styles.logosCarousel}>
            <CarouselComp responsive={responsiveForLogos}>
              {
                logos.map((logo, index) => (
                  <>
                    <img src={logo} style={{...logosDimensions[index], ...commonStylesLogos}} alt={logo} />
                    </>
                  ))
              }
            </CarouselComp>
        </div>
        <div className={styles.foundersFeatured}>
           <h1>Our Advisors</h1>
        </div>
        {/* <div className={styles.aboutTeam}>
                      { teamImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={aboutTeamHeadings[index]} subHead={aboutTeamSubPara[index]}
                        imgSize={aboutImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}/>
                      ))}
         </div> */}
         <div className={styles.aboutAdvisors}>
             <CarouselComp responsive={responsiveForAdvisors}>
             { advisorsImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={advisorsHeadings[index]} subHead={advisorsSubPara[index]}
                        imgSize={advisorsImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}/>
                      ))}
             </CarouselComp>
          </div>
         <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5rem'}}>
            <Button label="Learn more about our Advisors" style={{ width: '30rem'}} btnClick={() => history.push('/about')}/>
         </div>
        <Footer/>
      </section>
   </div>
    );
}

export default Body;