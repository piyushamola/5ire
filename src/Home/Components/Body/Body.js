import React from 'react';
import { useTranslation } from 'react-i18next'

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

import ian from '../../../assets2/advisors/Ian.png';
import joe from '../../../assets2/advisors/Joe.png';
import mathew from '../../../assets2/advisors/Mathew.png';
import David from '../../../assets2/advisors/David.png';
import Alvaro from '../../../assets2/advisors/Alvaro.png';


// logos


import ted from '../../../assets2/logos/ted.png'
import forbes from '../../../assets2/logos/Forbes-logo.png'
import entrepreneur from '../../../assets2/logos/Entrepreneur_logo.png'
import globe from '../../../assets2/logos/globe.png'
import nasdaq from '../../../assets2/logos/nasdaq.png'
import inc500 from '../../../assets2/logos/inc500.png'

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
const aboutHeading = ["Sustainability by Design ", "On-chain Governance & Democracy", "Future-proof upgradeability",
"Interoperability & Cross-chain Transfers", "Transactional scalability", "Security for everyone"];


// proof of fire
const proofOfFireImages = [NPOS, POB, POD];
const proofOfFireDimensions = [{width: '10.7rem', height: '12.2rem'}, { width: '12.8rem', height: '12.2rem'}, { width: '11.8rem', height: '10.5rem', marginTop: '2rem'}];
const proofOfFireHeading = ["Nominated Proof of Stake", "Proof of Benefit", "Proof of Donation"];

// team
const teamImages = [PG, PD, VM];
const aboutTeamHeadings = ["Pratik Gauri", "Prateek Dwivedi", "Vilma Mattila"];
const aboutImageSize = [{ width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}];
const aboutTeamSubPara = ["Co Founder & CEO","Co Founder & CMO", "Co Founder & CBO"];
const aboutTeamLinkedIn = ["https://www.linkedin.com/in/pratikgauri/",
 "https://www.linkedin.com/in/prateekdwivedi1991",
"https://www.linkedin.com/in/vilmamattila",
];

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

const logos = [nasdaq, forbes, ted, entrepreneur, globe, inc500];
const logosDimensions = [{ width: '16rem', height: '4rem', marginTop: '2.5rem'}, { width: '14.7rem', height: '8.3rem', marginBottom: '4rem'}, { width: '12.3rem', height: '4.5rem', marginTop: '2rem'}, { width: '23.8rem', height: '9rem', marginBottom: '4rem'}, { width: '11.2rem', height: '9.4rem', marginBottom:'4rem'}, { width: '11.2rem', height: '9.4rem', marginBottom:'4rem'}];
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


// advisors 

const advisorsImages = [ian, joe, mathew, David, Alvaro];
const advisorsHeadings = ["Ian Scarffe", "Joe Vezzani", "Mathew Neimerg", "David Marshall", "Alvaro Fernandaz"];
const advisorsImageSize = [{ width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'},  { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}];
const advisorsSubPara = ["Blockchain and Crypto Advisor", "CEO, Lunarcrush Ex- Morgan Stanley","President & Co-founder of Aleph Zero", "Co-Founder Marshland Capital", "Head of Strategy & Growth, Nsure Network"];
const advisorsLinkedIn = ["https://www.linkedin.com/in/ianscarffe/",
"https://www.linkedin.com/in/joevezzani/",
"https://www.linkedin.com/in/matthew-niemerg/",
"https://www.linkedin.com/in/davidkmarshall/",
"https://www.linkedin.com/in/alvaro-fern%C3%A1ndez-576b3489/"];

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
  const { t } = useTranslation()

    return (
    <div>
      <div className={styles.FirstPageBody}>
      <div className={styles.backGroundImageStyles}>
        <div className={styles.firstPageFooter}>
            <div>
              <img src={fire} className={styles.Applogo} alt="logo" />
            </div>
            <h1>
               {t('Welcome To 5ire')}
            </h1>
            <h2>
              {t('Blockchain X Sustainability = 5ire')}
            </h2>
            <p>
               {t('5ireChain is a fifth-generation blockchain that aims to bring a paradigm shift from a for-profit to a for-benefit economy')}
            </p>
            <div className={styles.applyNow}>
              <div className={styles.firePublicSale}>
              <h1>{t('              5ire Public Sale is coming soon ! Apply Now to get Whitelisted.')}</h1>
              </div>
              <Button label={t('Apply Now')} btnClick={() => window.open("https://forms.gle/k2gz8TMeWbG8NC9R6")} className={styles.button}/>
            </div>
        </div>
        </div>
      </div>
      <section className={styles.GetStartedContainer}>
       <div>
         <div className={styles.getStartedInfo}>
            <div className={styles.getStartedText}>
              <div className={styles.getStartedDiv}>
                <p>{t("5ire's mission is to accelerate the implementation of the United Nations 2030 Agenda for Sustainable Development.")}</p>
              </div>
              <div className={styles.getStartedRoadMap}>
                <Button label={t("See Roadmap")} btnClick={() => history.push('/roadmap')} className={styles.button}/>
              </div>
            </div>
        </div>
        <div className={styles.aboutFireContent}>
            <div className={styles.whatIsFire}>
                <h1>{t("What is 5ire ?")}</h1>
                <p>{t("5ire is a blockchain ecosystem that brings forward Sustainability, Technology & Innovation to build the 5th industrial revolution.")}</p>
            </div>
            <div className={styles.learnMoreAbout}>
                  <div className={styles.learnMoreAboutText}>
                    <p>{t("Learn more about")}</p>
                    <h1>{t("5ireChain Technology")}</h1>
                  </div>
                  <div className={styles.fireChainTechBtn}>
                     <Button label={t("Discover 5ire")} btnClick={() => history.push('/technology')} className={styles.button}/>
                  </div>
            </div>
        </div>
        <div className={styles.whyFireContent}>
            <div className={styles.whyIsFire}>
                <h1>{t("Why 5IR ?")}</h1>
                <p>{t("In contrast to trends in the Fourth Industrial Revolution toward dehumanization, technology, and innovation, best practices need to be bent back toward the service of humanity. 5ire is a gateway in the smooth transitioning of the world from 4IR to 5IR.")} </p>
            </div>
            <div className={styles.learnMoreAbout}>
                  <div className={styles.learnMoreAboutText}>
                    <p>{t("Learn more about")}</p>
                    <h1>{t("5th Industrial Revolution")}</h1>
                  </div>
                  <div className={styles.fireChainTechBtn}>
                     <Button label={t("Learn More About 5IR")}  btnClick={() => window.open('https://www.youtube.com/watch?v=RDiHaHPOVH0')} className={styles.button}/>
                  </div>
            </div>
        </div>
       </div>
      </section>
      <section className={styles.AboutFire}>
          <header className={styles.parentHeader}>
              <div className={styles.aboutHeader}>
                <div className={styles.aboutContent}>
                  <h1>{t("5ire’s lingo =")}</h1>
                  <p>{t("United Nations' Sustainable Development Goals")}</p>
                </div>
                <div className={styles.aboutImageContainer}>
                  <img src={sdg} className={styles.aboutImage} alt="about"/>
                </div>
            </div>
          </header>
      </section>
      <div className={styles.quoteStyle}>
            <img src={quote} alt="quote"/>
             <p><span>{t("Society & environment")} </span>{t("is where we all meet; where all have a mutual interest; it is the one thing all of us share.")} </p>
        </div>
      <section className={styles.WhyFire}>
        <footer>
          <div className={styles.footerStyles}>
              <div className={styles.footerContent}>
                  <h1>{t("Proof of 5ire")} </h1>
                  <p>{t("The first sustainable by design hybrid consensus and reward distribution mechanism")}</p>
              </div>
              <div className={styles.proofOfFireBoxes}>
                  <div className={styles.footerBody}>
                      { proofOfFireImages.map((img, index) => (
                            <ImageHeadingContent image={img}  heading={t(proofOfFireHeading[index])}
                                  imgSize={proofOfFireDimensions[index]}
                                  containerClass={styles.containerClass}
                                  headingStyles={styles.headingStyles}/>
                      ))}
                  </div>
                  <div className={styles.buttonStyles}>
                  <Button label={t("Learn More")}  btnClick={() => history.push('/technology')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                  </div>
              </div>
         </div>
         <div className={styles.featuresData}>
            <div className={styles.featuresHeading}><h1>{t("Features")}</h1></div>
            <div className={styles.featuresRow}>
                  <div className={styles.features}>
                        { aboutImages.map((img, index) => (
                          index % 2 === 1 && <AboutInfo image={img} heading={t(aboutHeading[index])}/>
                        ))}
                    </div>
                    <div className={styles.features}>
                        { aboutImages.map((img, index) => (
                        index % 2 === 0 &&  <AboutInfo image={img} heading={t(aboutHeading[index])}/>
                        ))}
                    </div>
              </div>
          </div>
        </footer>
      </section>

      <section className={styles.youTubeVideo}>
        <div>
            <iframe width="1000" height="500" src="https://www.youtube.com/embed/JLr7o0UDY9k"
             frameborder='0'
             allow='autoplay; encrypted-media'
             allowfullscreen
             title='video'></iframe>
        </div>
      </section>


      <section className={styles.foundersSection}>
        <header className={styles.founder}>
            <div className={styles.founderContent}>
              <h1>{t("Founded by Global Impact Champions & Blockchain Pioneers")}</h1>
            </div>
        </header>
        <div className={styles.aboutTeam}>
                      { teamImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={t(aboutTeamHeadings[index])} subHead={t(aboutTeamSubPara[index])}
                        imgSize={aboutImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}
                        linkedIn={aboutTeamLinkedIn[index]}
                        />
                      ))}
         </div>
         <div className={styles.aboutTeamMobile}>
             <CarouselComp responsive={responsiveForTeam}>
             { teamImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={t(aboutTeamHeadings[index])} subHead={t(aboutTeamSubPara[index])}
                        imgSize={aboutImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}
                        containerClass={styles.containerClass}
                        linkedIn={aboutTeamLinkedIn[index]}
                        />
                      ))}
             </CarouselComp>
          </div>
         <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom: '15rem'}}>
            <Button label={t("Meet 5ire Team")} btnClick={() => history.push('/about')}/>
         </div>
        <div className={styles.foundersFeatured}>
           <h1>{t("Founders Featured In")}</h1>
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
           <h1>{t("Our Global Advisory Council & Braintrust Network")}</h1>
        </div>
         <div className={styles.aboutAdvisors}>
             <CarouselComp responsive={responsiveForAdvisors}>
             { advisorsImages.map((img, index) => (
                        <ImageHeadingContent image={img} heading={t(advisorsHeadings[index])} subHead={t(advisorsSubPara[index])}
                        imgSize={advisorsImageSize[index]}
                        headingStyles={styles.headingStyles}
                        subHeadStyles={styles.subheadingStyles}
                        containerClass={styles.containerClass}
                        linkedIn={advisorsLinkedIn[index]}/>
                      ))}
             </CarouselComp>
          </div>
         <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5rem'}}>
            <Button label={t("Learn more about our Advisors")} style={{ width: '30rem'}} btnClick={() => history.push('/about')}/>
         </div>
        <Footer/>
      </section>
   </div>
    );
}

export default Body;