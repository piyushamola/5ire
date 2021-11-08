import React from 'react';
import styles from './AboutBody.scss';


//our partners

import partners from '../../../assets2/Partners.png'
// advisors

// advisors 

import ian from '../../../assets2/advisors/Ian.png';
import joe from '../../../assets2/advisors/Joe.png';
import mathew from '../../../assets2/advisors/Mathew.png';
import David from '../../../assets2/advisors/David.png';
import Alvaro from '../../../assets2/advisors/Alvaro.png';
import Antoni from '../../../assets2/advisors/Antoni.png';

// team
import PG from '../../../assets2/teamPictures/PG.png';
import PD from '../../../assets2/teamPictures/PD.png';
import VM from '../../../assets2/teamPictures/VM.png';
import SAI from '../../../assets2/teamPictures/Sai.png';
import Zak from '../../../assets2/teamPictures/Zak.png';
import Avid from '../../../assets2/teamPictures/Avid.png';
import Serge from '../../../assets2/teamPictures/Serge.png';

//logo 

import ted from '../../../assets2/logos/ted.png'
import forbes from '../../../assets2/logos/Forbes-logo.png'
import entrepreneur from '../../../assets2/logos/Entrepreneur_logo.png'
import globe from '../../../assets2/logos/globe.png'
import nasdaq from '../../../assets2/logos/nasdaq.png'

// carousel

import CarouselComp from '../../../common-elements/Carousel/Carousel.js';
import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent'

import FlipCard from '../../../common-elements/flipCard/flipCard';
import Footer from '../../../common-elements/Footer/Footer';

const teamImages = [PG, PD, VM, Serge, SAI, Zak, Avid];
const aboutTeamParas = ["Serial social entrepreneur, investor, public speaker and writer creating 5th Industrial Revolution and championing UN SDGs. India President - 5thelement.group; Entrepreneur 35 Under 35, Asiaone 40 under 40 Most Influential Leaders, Greenbiz Global 30 Under 30, BP Scholar, WEF Global Shaper, Ambassador at One Young World, Al Gore’s Climate Leader. MBA – IIFT Delhi. Exec Ed – UChicago / UOxford",
    "Prateek is a Blockchain enthusiast, investor and veteran Internet Marketer. He conceptualised the proprietary 5IRE consensus mechanism and reward protocols. In his internet marketing days, he clocked 8-figure affiliate revenues and helped incubate many startups. He founded Kaching Media and multiple internet marketing companies. He is also a heavy proponent of work life balance and healthy living.",
"Venture Capitalist & Futurist. Incubated 40+ Projects including Qtum, Tron & Aleph Zero; Advisor at the EU Blockchain Observatory, World Future Society & UN USA; Member of Singularity University, Ex-EU Lawyer.",
"Cofounder of Node Kapital, investing and scaling in DEFI, NFT, Gaming, Esports, Metaverse, Infrastructure & Layer 1/2 solutions. He previously successfully led and scaled Talent Spot Group into a global business with USD 120 Million in revenue. Polyglot - fluent in Arabic, Chinese, English, French, Armenian. Completed his grad degree at Stanford University.",
"Visionary Technology Leader with a record of accomplishment creating technology strategies and products that address across industry opportunities. He has 15+ years of Experience in strategy management MBA - Stephen M. Ross School of Business",
"A security of information systems engineer. Communication protocols and E2E encryption enthusiast. Cryptography, Blockchain and Intellectual property protection & DRM Researcher",
"Software  engineer turned social entreprenuer with an experience in building for-benefit businesses and enterprise management. He also has a knack for Graphic & UI/UX Design. Exec Ed - Indian Institute of Management, Ranchi.",
];

const aboutTeamHeadings = ["Pratik Gauri", "Prateek Dwivedi", "Vilma Mattila", "Serge Ajamian", "Sai Kossireddy", "Zakaria Salek", "Rahul Rautela",];

const aboutImageSize = [{ width: '17rem', height: '17rem'}, { width: '17rem', height: '17rem'}, { width: '17rem', height: '17rem'}, { width: '17rem', height: '17rem'}, { width: '17rem', height: '17rem'}, { width: '17rem', height: '17rem'}, { width: '17rem', height: '17rem'}];

const aboutTeamSubPara = ["Co Founder & CEO","Co Founder & CMO", "Co Founder & CBO", "Head of Advisory Council Strategic Advisor to the CEO", "Head of Strategy Management", "Head of Blockchain Research & Development", "Head of Operations & Design"];

// Advisors 


const advisorsImages = [ian, joe, mathew, David, Alvaro, Antoni];
const advisorsHeadings = ["Ian Scarffe", "Joe Vezzani", "Mathew Neimerg", "David Marshall", "Alvaro Fernandaz","Antoni Zolciak"];
const advisorsImageSize = [{ width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'},  { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}];
const advisorsSubPara = ["Blockchain and Crypto Advisor", "CEO, Lunarcrush Ex- Morgan Stanley","President & Co-founder of Aleph Zero", "Co-Founder Marshland Capital", "Head of Strategy & Growth, Nsure Network ", "Co-founder & CMO Aleph Zero"];
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

// logo styles 
const logos = [nasdaq, forbes, ted, entrepreneur, globe];
const logosDimensions = [{ width: '16rem', height: '4rem', marginTop: '2.5rem'}, { width: '14.7rem', height: '8.3rem', marginBottom: '4rem'}, { width: '12.3rem', height: '4.5rem', marginTop: '2rem'}, { width: '23.8rem', height: '9rem', marginBottom: '4rem'}, { width: '11.2rem', height: '9.4rem', marginBottom:'4rem'}];
const commonStylesLogos = {
  marginLeft: '8rem',
}
const responsiveForLogos = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

function AboutBody(props) {
    return (
        <div>
            <div className={styles.aboutFirstHeader}>
              <h1>5ireChain is a fifth-generation blockchain that aims to bring a paradigm shift from a for-profit to a for-benefit economy. </h1>
            </div>
            <div className={styles.AboutHeader}>
                <h1>Our Mission</h1>
                <p>5ire aims to become a blockchain ecosystem for the 5th industrial revolution, where self-sovereign decentralized organizations are empowered & incentivized toward accelerating the implementation of the United Nations 2030 Agenda for Sustainable Development. </p>
            </div>
            <div className={styles.aboutFire}>
                <h1>About 5ire</h1>
                <p>5ire is a blockchain ecosystem where individuals and enterprises can develop, build,  transact and participate in sustainable economic growth while assuring democracy and justified fair representation of stakeholders. </p>
            </div>
            <header className={styles.founder}>
              <div className={styles.founderContent}>
                <h1>Founded by Global Impact Champions & Blockchain Pioneers</h1>
              </div>
           </header>
              <div className={styles.teamFlipFlop}>
                      { teamImages.map((img, index) => (
                        index <= 3 && <div>
                        <FlipCard image={img} paraAfterFlip={aboutTeamParas[index]} heading={aboutTeamHeadings[index]} subPara={aboutTeamSubPara[index]}
                            imgSize={aboutImageSize[index]}
                        />
                        </div>
                      ))}
              </div>
              <div className={styles.teamFlipFlop}>
                      { teamImages.map((img, index) => (
                        index > 3 && <div>
                        <FlipCard image={img} paraAfterFlip={aboutTeamParas[index]} heading={aboutTeamHeadings[index]} subPara={aboutTeamSubPara[index]}
                            imgSize={aboutImageSize[index]}
                        />
                        </div>
                      ))}
              </div>
            <div className={styles.founders}>
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
            <div className={styles.ourAdvisors}>
                 <h1>Our Global Advisory Council & Braintrust Network</h1>
            </div>
            <div className={styles.aboutAdvisorsMobile}>
                <CarouselComp responsive={responsiveForAdvisors}>
                { advisorsImages.map((img, index) => (
                            <ImageHeadingContent image={img} heading={advisorsHeadings[index]} subHead={advisorsSubPara[index]}
                            imgSize={advisorsImageSize[index]}
                            headingStyles={styles.headingStyles}
                            subHeadStyles={styles.subheadingStyles}
                            containerClass={styles.containerClass}/>
                          ))}
                </CarouselComp>
              </div>
             <div className={styles.ourAdvisors}>
                <h1>Our Partners</h1>
            </div>
            <div className={styles.parterns}>
            <img src={partners}  alt="partners" />
            </div>
            <Footer/>

        </div>
    );
}

export default AboutBody;