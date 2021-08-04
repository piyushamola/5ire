import React from 'react';

import fire from '../../../assets/fire.png'

import ted from '../../../assets/logos/ted.png'
import forbes from '../../../assets/logos/Forbes-logo.png'
import entrepreneur from '../../../assets/logos/Entrepreneur_logo.png'
import globe from '../../../assets/logos/globe.png'
import nasdaq from '../../../assets/logos/nasdaq.png'
import paradigm from '../../../assets/paradigm.svg';

import community from '../../../assets/exploresvgs/community.svg'
import contribute from '../../../assets/exploresvgs/contribute.svg'
import enterprise from '../../../assets/exploresvgs/enterprise.svg'
import { google, messenger, whatsapp, youtube } from '../../../assets/footerLogos';

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
import banner2 from '../../../assets2/Banner2.png';
import quote from '../../../assets2/quote.svg';


// components
import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent'
import HeadingWithList from '../../../common-elements/HeaderWithList/HeaderWithList.js'
import Button from '../../../common-elements/Button/Button.js';
import AboutInfo from './aboutInfo/aboutInfo.js';
import styles from './Body.scss'


const backGroundImagebanner2 = {
  backgroundImage: `url(${banner2})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: "no-repeat",
};
const finalFooterLogos = [google, messenger, youtube, whatsapp]

const aboutImages = [icon1, icon2, icon3, icon4, icon5, icon6];

const aboutPara = ["5irechain’s main goal is to create a user-centric sustainability-driven ecosystem and it achieves this by embedding sustainability and humanity benefit algorithms inside the 5irechain reward distribution mechanism and runtime logic.",
                    "5irechain’s transparent on-chain governance mechanism allows everyone to democratically participate in the network and propose changes. And assure a justified fair representation of all the stakeholders.",
                    "By being a cutting-edge blockchain based    on WebAssembly. 5irechain is able to upgrade its runtime logic without hard forking. These upgrades are enacted through the 5irechain governance mechanism.",
                    "5irechain has the ability to interoperate seamlessly with a variety of blockchains. Enabling cross-blockchain transfers of any type of data through bridges. Either natively with substrate based chains or through smart contract bridges.",
                    "5irechain uses  GRANDPA finality gadget that is able to reach and finalize consensus quickly, no matter how big the 5ire network would become. While NPoS mechanisms assure high transactional throughput with the low fees.",
                    "5irechain is built on Rust and Substrate with the best Present-day  technological stack for the creation of blockchains. While the NPoS assures higher levels of security without compromising decentralization."];

const aboutHeading = ["Sustainability by Design ", "On-chain Governance and Democracy", "Future-proof and Forkless upgradeability",
"Interoperability & cross-chain Transfers", "On-chain Governance and Democracy", "Future-proof and Forkless upgradeability"];

const logos = [nasdaq, ted, globe, entrepreneur, forbes];

const logosDimensions = [{ width: '16rem', height: '4rem'}, { width: '12.3rem', height: '4.5rem'}, { width: '11.2rem', height: '9.4rem'}, { width: '23.8rem', height: '9rem'}, { width: '14.7rem', height: '8.3rem'}];


const exploreImages = [enterprise, community, contribute];

const exploreContentHeading = ["5ire for enterprise", "The 5ire community (heroes)", "Contribute to 5ire.org"];

const exploreContentPara = ["See how 5ire can open up new business models, reduce your costs and future-proof your business.",
                      "The community is the heart and soul of 5ire. It's made up of people from all different backgrounds and interests. Click here to join.",
                      "The website and community are open source with hundreds of community contributors. You can propose edits to any of the content , suggest new features, or help us in another way."]

const FinalFooterList = [["About", "FAQ", "Support", "Build", "Grants and Bounties", "Careers"], ["Technology", "Roadmap", "Token", "Telemetry", "Substrate", "Lightpaper", "Whitepaper"],
                          ["Community",
                            "Documentation",
                            "Brand Assets",
                            "Blog",
                            "Element",
                            "Chat",
                            "Medium"]];

const FinalFooterHeading = ["General", "Technology", "Community"];

const proofOfFireImages = [icon7, icon8, icon9];

const proofOfFireHeading = ["Nominated Proof of Stake", "Proof of Benefit", "Proof of Donation"];
const proofOfFireParas = ["The cutting edge NPOS guarantees democracy and justified fair representation to all the stakeholders while giving a reputation base for the upper Proof Of 5ire layers.",
                          "A governance based mechanism that rewards network actors  based on their commitment to the United Nation 17 Sustainable Development Goals (SDGs).",
                        "A Donation oriented scheme that focuses on rewarding charity-oriented activities. These activities can be either on-chain or in the real world."];

const buttonsLabels = ["Nominator", "Validator", "Curator", "Register", "Governance"];

function Body(props) {
    return (
    <div>
      <div className={styles.FirstPageBody}>
        <div className={styles.firstPageFooter}>
            <div>
              <img src={fire} className={styles.Applogo} alt="logo" />
            </div>
            <h1>
                Welcome To 5ire
            </h1>
            <h2>
               The Future of <del>Blockchain</del> Business
            </h2>
            <p>
                5irechain is a fifth-generation blockchain that aims to bring a paradigm shift from a for-profit to a for-benefit. 5irechain implements sustainability by design while it ensures democracy and governance, interoperability, high transactional throughput, strong security guarantees and forkless upgradeability.
            </p>
            <Button label="Learn More" className={styles.button}/>
        </div>
      </div>
      <section className={styles.GetStartedContainer}>
       <div>
         <div className={styles.getStartedInfo}>
          <div>
            <div className={styles.getStartedText}>
              <div>
                <p>We are Redefining the Blockchain </p>
                <p> Be a the part of the next Big Revolution </p>
              </div>
            <Button label="See Roadmap" className={styles.button}/>
            </div>
          </div>
        </div>
         <div className={styles.aboutBody}>
              { aboutImages.map((img, index) => (
                <AboutInfo image={img} para={aboutPara[index]} heading={aboutHeading[index]}/>
              ))}
          </div>
       </div>
      </section>
      <section className={styles.AboutFire}>
          <header className={styles.parentHeader}>
              <div className={styles.aboutHeader}>
                <div className={styles.aboutContent}>
                  <h1>5ire’s language</h1>
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
              <h1>What is 5ire</h1>
              <p>5IRE is a Collaborative Blockchain-Driven Platform with an innovative SDG driven consensus mechanism , with a mission to bring a paradigm shift from “For Profit” to “For Benefit” across the globe, as every single transaction on the 5IRE Ecosystem Contributes to Social Impact.</p>
            </div>
            <div className={styles.LearnAbout}>
               <div>
                <p>Learn more about <br/> <b>5irechain Technology</b></p>
              </div>
              <Button label="Discover 5ire" className={styles.button}/>
           </div>
        </div>
        <div className={styles.learnWhyContent}>
           <div className={styles.whyFireContent}>
               <div>
                <p>In contrast to trends in the Fourth Revolution toward dehumanization, technology and innovation best practices need to be bent back toward the service of humanity.
                 5ire is a milestone in smooth transitioning of the world from 4IR to 5IR. </p>

                 <p>Also its breakthrough to help the world in achieving the UN SDGs in the fast and efficient way.</p>
              </div>
              <Button label="Learn More About 5IR" className={styles.button}/>
           </div>
            <div className={styles.whyFireHeading}>
              <h1>Why 5ire</h1>
            </div>
        </div>
        </header>
        <div className={styles.founder}>
          <div style={backGroundImagebanner2}>
            <div className={styles.founderContent}>
              <h1>Founded by some of the pioneers in Impact & Blockchain Industry</h1>
              <Button label="Learn about 5ire Team" className={styles.button}/>
            </div>
          </div>
        </div>
        <footer>
          <div className={styles.footerStyles}>
              <div className={styles.footerContent}>
                  <h1>Proof of 5ire </h1>
                  <p>The first sustainable by design hybrid consensus and reward distribution mechanism</p>
                  <p>The Proof Of Fire is the first multi-layered consensus mechanism and reward distribution scheme that prioritizes sustainability and service of humanity,  and 5irechain is the first  blockchain to implement it. Proof Of Fire  assures higher yields to network actors that are in  harmony with the United Nation 17 Sustainable Development Goals and to actors that have a donation history either on-chain or in real-world. Proof Of Fire is a superposition of three underlying mechanisms.</p>
              </div>
              <div>
                  <div className={styles.footerBody}>
                      { proofOfFireImages.map((img, index) => (
                        <ImageHeadingContent image={img} para={proofOfFireParas[index]} heading={proofOfFireHeading[index]}/>
                      ))}
                  </div>
              </div>
              <div className={styles.footerLast}>
                <Button label="Learn More" className={styles.button}/>
                <h1>Participate in 5ire Ecosystem become a </h1>
              </div>
              <div className={styles.buttonList}>
                {
                  buttonsLabels.map((label) => (
                    <Button label={label} className={styles.button}/>
                  ))
                }
              </div>
         </div>
        </footer>
        <div className={styles.textStyle}>
            <img src={quote} alt="quote"/>
             <p><span>We have changed the Technology. </span>We are changing the way how world looking at the future of businesses. We are Using technology to make a shift from the ‘For Profit’ Paradigm to ‘For Benefit’ Paradigm.</p>
        </div>
      </section>


      <section className={styles.Explore}>
        <header className={styles.aboutExplore}>
            <div>
              <img src={paradigm} className={styles.paradigmImage} alt="paradigm"/>
            </div>
            <div className={styles.exploreContent}>
              <h1>A New Paradigm for Sustainability</h1>
              <p>5ire and its dapps are transparent and open source. You can build on top or fork code and reuse functionalities that others have already built. If you don't want to learn a new language you can just interact with open source code using Rust and other existing languages.</p>
              <Button label="Build on 5ire" className={styles.button}/>
            </div>
        </header>
        <div className={styles.whyBody}>
           <h1>FOUNDERS FEATURED IN</h1>
        </div>
        <footer className={styles.whyFireFooter}>
                { logos.map((logo, index) => (
                   <img src={logo} style={logosDimensions[index]} alt={logo} />
                ))}
        </footer>
        <div className={styles.expHeading}><h1>Explore 5ire.org</h1></div>
        <div className={styles.aboutExploreBoxes}>
              { exploreImages.map((img, index) => (
                <ImageHeadingContent image={img} para={exploreContentPara[index]} heading={exploreContentHeading[index]}
                   imgSize={styles.imageStyles}
                   headingStyles={styles.headingStyles}
                   paragraphStyles={styles.paraStyles}
                />
              ))}
          </div>
          <footer className={styles.FinalFooter}>
                { FinalFooterHeading.map(( head, index) => (
                <div>
                    <HeadingWithList list={FinalFooterList[index]} heading={head}/>
                </div>
                ))}
               <div class={styles.footerLastColumn}>
                  <div class={styles.footerLogoStyle}>
                  {finalFooterLogos.map((logo) => (
                    <div>
                    <img src={logo}  alt={logo} />
                    </div>
                  ))}
                  </div>
                  <div>
                    <p>Subscribe to the newsletter to hear about Polkadot updates and events.</p>
                  </div>
                  <button>
                    Subscribe
                  </button>
              </div>
          </footer>
      </section>
   </div>
    );
}

export default Body;