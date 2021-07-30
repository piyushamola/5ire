import React from 'react';
import fire from '../../../assets/fire.png'
import backGround from '../../../assets/backgroundImage.png'
import blockchain from '../../../assets/blockchainbenefit.png';
import dapps from '../../../assets/dapps.png';
import proofofFire from '../../../assets/proofoffire.png';
import nativeapps from '../../../assets/nativeapps.png';
import about from '../../../assets/about.png';
import blockChainSust from '../../../assets/blockChainSustainibility.png';
import iot from '../../../assets/iot.png';
import facilitate from '../../../assets/facilitate.png';

import ted from '../../../assets/logos/ted.png'
import forbes from '../../../assets/logos/Forbes-logo.png'
import entrepreneur from '../../../assets/logos/Entrepreneur_logo.png'
import globe from '../../../assets/logos/globe.png'
import nasdaq from '../../../assets/logos/nasdaq.png'

import useCases from '../../../assets/aboutFooter.svg';
import paradigm from '../../../assets/paradigm.svg';

import community from '../../../assets/exploresvgs/community.svg'
import contribute from '../../../assets/exploresvgs/contribute.svg'
import enterprise from '../../../assets/exploresvgs/enterprise.svg'

import coverImage from '../../../assets/cover.svg'
import startedImage from '../../../assets/getStarted.png';

import { google, messenger, whatsapp, youtube } from '../../../assets/footerLogos';

import HeadingWithContent from '../../../common-elements/HeadingWithContent/HeadingWithContent'
import HeadingWithList from '../../../common-elements/HeaderWithList/HeaderWithList.js'
import GetStartedInfo from './getStartedInfo/getStartedInfo.js';
import AboutInfo from './aboutInfo/aboutInfo.js';
import './Body.scss'

function Body(props) {

  const backGroundImageStyle = {
    backgroundImage: `url(${backGround})`,
    height: '100%',
    width: '100%',
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };
  const finalFooterLogos = [google, messenger, youtube, whatsapp]
  const getStartedImages = [blockchain, proofofFire, nativeapps, dapps];

  const headings = ["BlockChain + Benefit", "Proof Of Fire", "SGD's + Native Apps", "Built For Benefit Dapps"];

  const Paragraphs = ["We have taken the technology of blockchain and the spirit of impact, creating a perfect marriage between the two.",
                      "Our proprietary consensus mechanism makes sure that sustainable practices in the world of blockchain are rewarded, both in terms of financials and legacy.",
                    "Our native apps would aim to translate all Sustainable Development Goals listed by the United Nations in blockchain for transparency. In addition, our native apps would have innumerable use cases.",
                      "Build dApps on our ecosystem and move to “for benefit”, automatically."]

  const aboutImages = [blockChainSust, iot, facilitate];

  const aboutPara = ["5IRE is a Native Chain that combines the benefits of existing blockchain (trust, cost, speed, visibility, traceability,immutability, improved security & privacy, efficiency & decentralization. Plus the Sustainable Aspect of Economy. Every action inside the blockchain is designed to contribute directly to impact.",
                      "5ire isn't just for donations or e-governance. It is an all inclusive ecosystem with benefits intrinsically built into it. Our consensus mechanism is based on our proprietary “Proof of FIRE” concept, which has Nominated Proof Of Stake(nPOS) as the base layer, on top of which we have added “Proof Of Benefit” And “Proof Of Donation”, to make sure we work t an intersection of profit and purpose. The way it should be.",
                      "In today's world, blockchain is trying to solve the privacy problem by facilitating an “Open” internet with no need for a user's private data. But we still do not factor in sustainability and hence end up using way more resources than needed. 5IRE is the first blockchain where sustainable practices are rewarded and translate into financial benefits as well, hence taking the world towards a more sustainable future."];

  const aboutHeading = ["Blockchain + Sustainability = 5IRE", "The internet of benefit", "Blockchain To Facilitate 5IRE"];

  const logos = [forbes, ted, globe, nasdaq, entrepreneur];

  const logosDimensions = [{ width: '15rem', height: '10rem'}, { width: '10rem', height: '4rem'}, { width: '10rem', height: '8rem'}, { width: '12rem', height: '6rem'}, { width: '12rem', height: '6rem'}];

  const explorePara = ["The latest price for 5ire ether. You can buy as little as 0.000000000000000001 – you don't need to buy 1 whole 5ire coin.",
                          "The number of transactions successfully processed on the network in the last 24 hours.",
                          "The amount of money in decentralized finance (DeFi) applications, the 5ire ecosystem",
                          "5ire is run by 120 nodes around the globe."];
  const exploreHeading = ["5ire PRICE (USD)", "TRANSACTIONS TODAY", "VALUE LOCKED IN DEFI (USD)", "NODES"];

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

    return (
    <div>
      <div className="FirstPageBody">
         <div>
              <img src={coverImage} class="coverImage" alt="cover" />
        </div>
        <div className="firstPageFooter">
            <h1>
                Welcome To The World Of 5ire
            </h1>
            <div>
              <img src={fire} className="Applogo" alt="logo" />
            </div>
            <p className="rightContent">
              5ire is a community-run public sustainable blockchain powering the cryptocurrency (5ire) and hundreds of decentralized applications.
            </p>
        </div>
      </div>
      <section className="GetStartedContainer">
       <div>
         <div style={backGroundImageStyle}>
           <div className="getStartedInfo">
            <div style={{ width: '30%', paddingTop: '12rem'}}>
              <h1>Get started</h1>
              <p>5ire.org is your gate into the ecosystem of 5ire. We are a totally new paradigm in the world of blockchain.  Let us introduce you to the world of 5IRE. May we build a better world together</p>
            </div>
            <div style={{ paddingTop: '6rem'}}>
                <img src={startedImage} className="startedLogo" alt="logo" />
            </div>
          </div>
        </div>
           <div className="getStartedBoxes">
              {
                getStartedImages.map((img, index) => (
                  <GetStartedInfo image={img} para={Paragraphs[index]} head={headings[index]}/>
                ))
              }
           </div>
       </div>
      </section>
      <section className="AboutFire">
          <header className="aboutHeader">
            <div className="aboutContent">
              <h1>What is 5ire?</h1>
              <p>5IRE is a Collaborative Blockchain-Driven Platform with an innovative SDG driven consensus mechanism , with a mission to bring a paradigm shift from “For Profit” to “For Benefit” across the globe, as every single transaction on the 5IRE Ecosystem Contributes to Social Impact</p>
            </div>
            <div>
              <img src={about} className="aboutImage" alt="about"/>
            </div>
          </header>
          <div className="aboutBody">
              { aboutImages.map((img, index) => (
                <AboutInfo image={img} para={aboutPara[index]} heading={aboutHeading[index]}/>
              ))}
          </div>
          <footer>
          <img src={useCases}  alt="useCases"/>
          </footer>
      </section>
      <section className="WhyFire">
        <header className="whyFireHeader">
            <div className="whyFireContent">
              <h1>Why 5IRE?</h1>
              <p>In contrast to trends in the Fourth Revolution toward dehumanization, technology and innovation best practices need to be bent back toward the service of humanity.</p>
            </div>
        </header>
        <div className="whyBody">
           <h1>FOUNDERS FEATURED IN</h1>
        </div>
        <footer className="whyFireFooter">
                { logos.map((logo, index) => (
                   <img src={logo} style={logosDimensions[index]} alt={logo} />
                ))}
        </footer>
      </section>
      <section className="Explore">
        <header className="aboutExplore">
            <div>
              <img src={paradigm} style={{ width: "30rem", height: "30rem"}} alt="paradigm"/>
            </div>
            <div className="exploreContent">
              <h1>A New Paradigm for Sustainability</h1>
              <p>5ire and its dapps are transparent and open source. You can build on top or fork code and reuse functionalities that others have already built. If you don't want to learn a new language you can just interact with open source code using Rust and other existing languages.</p>
            </div>
        </header>
        <div class="exploreBody">
            {
              exploreHeading.map((head,index) => (
                <HeadingWithContent heading={head} para={explorePara[index]} />
              ))
            }
        </div>
        <div className="expHeading"><h1>Explore 5ire.org</h1></div>
        <div className="aboutExploreBoxes">
              { exploreImages.map((img, index) => (
                <AboutInfo image={img} para={exploreContentPara[index]} heading={exploreContentHeading[index]}/>
              ))}
          </div>
          <footer className="FinalFooter">
                { FinalFooterHeading.map(( head, index) => (
                <div>
                    <HeadingWithList list={FinalFooterList[index]} heading={head}/>
                </div>
                ))}
               <div class="footerLastColumn">
                  <div class="footerLogoStyle">
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