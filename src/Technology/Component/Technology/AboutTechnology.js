import React from 'react';
import styles from './AboutTechnology.scss';
import logo from '../../../assets2/5ireStructure.png'

import icon7 from '../../../assets2/icon7.svg';
import icon8 from '../../../assets2/icon8.svg';
import icon9 from '../../../assets2/icon9.svg';

import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent';
import Footer from '../../../common-elements/Footer/Footer';

const techBoxesHeading = ["Github", "Documentation", "Chat"];
const techBoxesPara = ["Latest version & history", "Goto to 5ire Wiki", "Lets talk"];
const aboutTechImages = [icon7, icon8, icon9];
const aboutTechHeading = ["Superior Security Model", "Transparent Governance", "GRANDPA & BABE - Reliable Consensus Mechanism"];
const aboutTechParas = ["Normally, blockchains compete with each other over resources to secure their networks, hence compromising the security until a significant community to support their network grows. However, the technology used to build 5irechain plus the Nominated Proof-Of-Stake scheme allows 5irechain to have strong security guarantees that other older blockchains lack.",
"By being a cutting-edge blockchain based on WebAssembly, 5irechain is able to upgrade its runtime logic without hard forking. 5irechain governance mechanism is designed to establish a transparent, accountable and binding process for resolving disputes and upgrading the network. Hence, most importantly staying loyal to the sustainability and for benefit goal of the network.",
"5irechain is using hybrid consensus, combining BABE and GRANDPA for block production and provable finality, respectively allowing a fast block production and a higher level of security. GRANDPA algorithm reaches and finalizes consensus quickly, across networks big and small."];


function AboutTechnology(props) {
    return (
        <div>
            <div className={styles.techHeader}>
                <h1>World’s first User-Centric, Transparent & Secure Sustainability driven ecosystem</h1>
            </div>
            <div className={styles.techBoxStyles}>
            {
                techBoxesHeading.map((heading, index)=> (
                <div className={styles.techBox}>
                    <h1>{heading}</h1>
                    <p>{techBoxesPara[index]}</p>
                </div>
                ))
            }
        </div>
        <div className={styles.imageContent}>
            <div>
                 <img src={logo} className={styles.Applogo} alt="logo" />
            </div>
            <div className={styles.Content}>
                <p>5ireChain is built with Substrate, Parity’s blockchain building framework because of features that are needed to fulfil our democratic vision. This technology allows us forkless upgradeability, which can be achieved without needing to hard fork the network. Most importantly by staying loyal to the sustainability and for benefit prior goal of the network.</p>
                <p>5ireChain takes advantage of Polkadot’s highly sophisticated governance mechanism that allows continuous evolving in accordance with the assembled stakeholders. This canonical system where the commandment of the network is in favor of the majority, is highly suitable for the 5irechain network. This ensures that the sustainable for-benefit paradigm is always maintained and in a democratic way.</p>
                <p>5ireChain is defined in WebAssembly(Wasm), an open, industry-wide collaborative effort, to make it accessible for all developers and them them to build their vision with 5ire.</p>
            </div>
        </div>
        <div className={styles.aboutBody1}>
                <div className={styles.aboutBodyHead1}>
                    <h1>Consensus Actors</h1>
                </div>
                <div className={styles.aboutBodyContent1}>
                    <h1>Nominator</h1>
                    <p>Provide sustainability and security to 5irechain by wisely electing validators and by staking the 5ire tokens.</p>
                </div>
                <div className={styles.aboutBodyContent1}>
                </div>
            </div>
            <div className={styles.aboutBody2}>
                <div className={styles.aboutBodyHead2}>
                    <h1>Governance</h1>
                </div>
                <div className={styles.aboutBodyContent2}>
                        <h1>Council Members</h1>
                        <p>Elected to control the flow of treasury funds, propose sensible referenda, canceling malicious referenda, and electing a technical committee.</p>
                </div>
                <div className={styles.aboutBodyContent2}>
                        <h1>Technical Committee</h1>
                        <p>Members that have demonstrated good knowledge of the 5irechain workflow and runtime. Composed of teams actively building 5ireChain, can propose emergency referenda supported by the council</p>
                </div>
            </div>

            <div className={styles.finalDescription}>
                <h1>Innovative Technology</h1>
                <p>5irechain highlights many building blocks that can be combined to further create tools and schemes to help shift from the fourth industrial revolution to the fifth. 5ireChain invites everyone to be creative in the way they interact with the 5ire ecosystem.</p>
                <div>
                    <div className={styles.aboutTeam}>
                    { aboutTechImages.map((img, index) => (
                                <ImageHeadingContent image={img} para={aboutTechParas[index]} heading={aboutTechHeading[index]}
                                imgSize={styles.imageStyles}
                                headingStyles={styles.headingStyles}
                                paragraphStyles={styles.paraStyles}
                                />
                            ))}
                    </div>
            </div>
            </div>

            <div className={styles.finalFooter}>
                <p>Want to Join 5ire ?</p>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutTechnology;