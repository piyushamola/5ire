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
const aboutTechHeading = ["Sophisticated Runtime", "Transparent Governance", "GRANDPA & BABE - Reliable Consensus Mechanism"];
const aboutTechParas = ["The 5irechain runtime is built with a modular approach and self-upgradability. Allowing the composition of smart contracts logic and runtime modules over several fields including IoT and multilayered Oracles, on-chain Governance, Defi primitives, Self-sovereign digital identity management, Zk primitives and e-governance. 5irechain is able to execute EVM and WASM smart contracts.",
"By being based on WebAssembly, 5irechain is able to upgrade its runtime logic without hard forking. 5irechain governance & democracy mechanisms are designed to establish a transparent, accountable and binding process  for  upgrading the network assure the empowerment of working groups that work toward the implementation of the 2030 Agenda. Hence, most importantly staying loyal to the sustainability and the for-benefit goals of the network.",
"5irechain is using hybrid consensus, combining BABE and GRANDPA for block production and provable finality, respectively allowing a fast block production and a higher level of security. GRANDPA algorithm reaches and finalizes consensus quickly, across networks big and small. Providing decentralization, transparency and security to the 5ire ecosystem older blockchains couldn’t achieve."];

const links = ["https://github.com/orgs/5ire-org/", "https://5ire.gitbook.io/5ire-wiki/", "https://matrix.to/#/#5ire:matrix.org"]


function AboutTechnology(props) {
    return (
        <div>
            <div className={styles.techHeader}>
                <h1>World’s first User-Centric, Transparent & Secure Sustainability driven ecosystem</h1>
            </div>
            <div className={styles.techBoxStyles}>
            {
                techBoxesHeading.map((heading, index)=> (
                <div className={styles.techBox} onClick={() => window.open(links[index])}>
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
                <p>5irechain’s main goal is to create a for-benefit ecosystem. This is achieved by embedding sustainability in the base layers of the network and also on the upper decision making that democratically guides the network.</p>
                <p>5irechain is built with substrate and bring forth sophisticated runtime, virtual machines, off-chain workers and governance mechanisms that assure the empowerment of working groups and decentralized organizations that work toward the implementation of the 2030 Agenda</p>
                <p>5irechain aims to become the 5th industrial revolution standard by applying heterogeneous sharding to its network and build an interoperable future where communities & blockchains self-govern and bring true impact</p>
            </div>
        </div>
        <div className={styles.aboutBody1}>
                <div className={styles.aboutBodyHead1}>
                    <h1>Consensus Actors</h1>
                </div>
                <div className={styles.aboutBodyContent1}>
                    <h1>Validator</h1>
                    <p>Secure the network by participating in the verification and the production of blocks and maintain the consensus.</p>
                </div>
                <div className={styles.aboutBodyContent1}>
                    <h1>Nominator</h1>
                    <p> Provide security to 5irechain by electing validators and backing them with stake while sharing rewards with elected validators.</p>
                </div>
            </div>
            <div className={styles.aboutBody2}>
                <div className={styles.aboutBodyHead2}>
                    <h1>Governance</h1>
                </div>
                <div className={styles.aboutBodyContent}>
                    <div className={styles.aboutBodyContent2}>
                            <h1>Council Members</h1>
                            <p>The Council is an on-chain entity that is an assembly of elected actors; it consists of a fixed number of actors. It also held responsibility for governance tasks.</p>
                    </div>
                    <div className={styles.aboutBodyContent2}>
                            <h1>Technical Committee</h1>
                            <p>Members that have demonstrated good knowledge of the 5irechain workflow and runtime. Composed of teams that are actively building 5ireChain</p>
                    </div>
                    <div className={styles.aboutBodyContent2}>
                            <h1>Sustainability Reporters DAOs</h1>
                            <p>Sustainability standards Reporters that have experience on each one of the 17 SDGs, and help on the validation of governance proposals</p>
                    </div>
                    <div className={styles.aboutBodyContent2}>
                        <h1>DAOs & Working Groups</h1>
                        <p>Organizations and working groups that work toward the implementation of the United Nations 2030 Agenda and teams that build 5ire.</p>
                    </div>
                </div>
            </div>

            <div className={styles.finalDescription}>
                <h1>Innovative Technology</h1>
                <p>5irechain highlights primitives and building blocks that can be combined to further create tools and schemes that will help in the shift from the fourth industrial revolution to the fifth. 5irechain invites everyone to be creative in the way they interact with the 5ire ecosystem</p>
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