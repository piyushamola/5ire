import React from 'react';
import coverImage from '../../../assets/designImage.png'
import fire from '../../../assets/fire.png'
import startedImage from '../../../assets/getStartedInfo.png'
import backGround from '../../../assets/backgroundImage.png'
import blockchain from '../../../assets/blockchainbenefit.png';
import dapps from '../../../assets/dapps.png';
import proofofFire from '../../../assets/proofoffire.png';
import nativeapps from '../../../assets/nativeapps.png';
import GetStartedInfo from '../getStartedInfo/getStartedInfo.js';
import './Body.scss'

function Body(props) {
  const backGroundImageStyle = {
    backgroundImage: `url(${backGround})`,
    height: '100%',
    width: '100%',
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };
  const images = [blockchain, proofofFire, nativeapps, dapps];

  const headings = ["BlockChain + Benefit", "Proof Of Fire", "SGD's + Native Apps", "Built For Benefit Dapps"];

  const Paragraphs = ["We have taken the technology of blockchain and the spirit of impact, creating a perfect marriage between the two.",
                      "Our proprietary consensus mechanism makes sure that sustainable practices in the world of blockchain are rewarded, both in terms of financials and legacy.",
                    "Our native apps would aim to translate all Sustainable Development Goals listed by the United Nations in blockchain for transparency. In addition, our native apps would have innumerable use cases.",
                      "Build dApps on our ecosystem and move to “for benefit”, automatically."]
    return (
    <div>
       <div>
            <img src={coverImage} class="coverImage" alt="cover" />
      </div>
      <div className="firstPageFooter">
          <h1 >
              Welcome To The World Of 5ire
          </h1>
          <div>
            <img src={fire} className="Applogo" alt="logo" />
          </div>
          <div className="rightContent">
            5ire is a community-run public sustainable blockchain powering the cryptocurrency (5ire) and hundreds of decentralized applications.
          </div>
      </div>
      <section>
       <div className="GetStartedContainer">
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
                images.map((img, index) => (
                  <GetStartedInfo image={img} para={Paragraphs[index]} head={headings[index]}/>
                ))
              }
           </div>
       </div>
      </section>
   </div>
    );
}

export default Body;