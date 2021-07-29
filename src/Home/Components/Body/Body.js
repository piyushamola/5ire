import React from 'react';
import coverImage from '../../../assets/designImage.png'
import fire from '../../../assets/fire.png'
import startedImage from '../../../assets/getStartedInfo.png'
import backGround from '../../../assets/backgroundImage.png'
import blockchain from '../../../assets/blockchainbenefit.png';
import dapps from '../../../assets/dapps.png';
import proofofFire from '../../../assets/proofoffire.png';
import nativeapps from '../../../assets/nativeapps.png';
import about from '../../../assets/about.png';
import blockChainSust from '../../../assets/blockChainSustainibility.png';
import iot from '../../../assets/iot.png';
import facilitate from '../../../assets/facilitate.png';
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
            <div style={{ width: '30%'}}>
              <h1 style={{ fontSize: '3rem', color: '#29316F', fontWeight: 'bold'}}>Get started</h1>
              <p>5ire.org is your gate into the ecosystem of 5ire. We are a totally new paradigm in the world of blockchain.  Let us introduce you to the world of 5IRE. May we build a better world together.s</p>
            </div>
            <div>
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
      </section>
   </div>
    );
}

export default Body;