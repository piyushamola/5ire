import React from 'react';
import styles from './AboutTechnology.scss';
import { useTranslation } from 'react-i18next'

// Proof of fire
import NPOS from '../../../assets2/ProofOfFire/NPOS.png';
import POB from '../../../assets2/ProofOfFire/proofofbenefit.png';
import POD from '../../../assets2/ProofOfFire/proofofdonation.png'

//Consesus

import Nominator from '../../../assets2/consensus/Nominator.svg';
import Validator from '../../../assets2/consensus/Validator.svg';

// Governance 

import CouncilMembers from '../../../assets2/governance/councilMembers.svg';
import daoWorking from '../../../assets2/governance/daoworkingGroups.svg';
import sustainibility from '../../../assets2/governance/sustainibilityReporters.png';
import technicalCommittee from '../../../assets2/governance/technicalCommitte.svg';

// build on fire 

import GovernanceDao from '../../../assets2/whatBuildOn/GovernanceDAO.svg';
import customBlockChain from '../../../assets2/whatBuildOn/CustomBlockchain.svg';

// images 

import FireArch from '../../../assets2/5ireArch.svg';

import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent';
import Footer from '../../../common-elements/Footer/Footer';
import Card from '../../../common-elements/Card/Card';


// proof of fire
const proofOfFireImages = [NPOS, POB, POD];
const proofOfFireDimensions = [{width: '10.7rem', height: '12.2rem'}, { width: '12.8rem', height: '12.2rem', marginTop: '5rem'}, { width: '11.8rem', height: '10.5rem', marginTop: '2rem'}];
const proofOfFireHeading = ["Nominated Proof of Stake", "Proof of Benefit", "Proof of Donation"];
const proofOfHeadingPara = ["Nominated Proof of Stake guarantees security, democracy and justified fair representation of network actors.",
                            "A governance-based reward distribution process that incentivizes network actors based on their commitment with the United Nation Sustainable Development Goals.",
                                "Focuses on rewarding positive impact that can either be on-chain or in the real world."]


// consensus actors 

const consensusImages = [ Validator, Nominator];
const consensusImagesDimensions = [{width: '8.4rem', height: '6.4rem'}, {width: '8.4rem', height: '6.4rem'}];
const consensusHeadings = ["Validator", "Nominator"];
const consensusPara = ["Secure the network by participating in the production & verification of blocks, and maintaining the consensus.",
                        "Provide security to 5ireChain by electing validators and backing them with stake while receiving rewards."]


// Governance 
const governanceDimensions = [{width: '8.4rem', height: '6.4rem'}, {width: '8.4rem', height: '6.4rem'}, {width: '8.4rem', height: '6.4rem'}, {width: '8.4rem', height: '6.4rem'}];
const governanceImages = [CouncilMembers, technicalCommittee, sustainibility, daoWorking];
const governanceHeading = ["Council Members", "Technical Committee", "Sustainability Reporters DAOs", "DAOs & Working Groups"];
const governancePara = ["The Council is an on-chain entity that assembles a fixed number of elected actors responsible for governance tasks.", 
                        "Composed of members proactively building the 5ireChain runtime.",
                    "Global sustainability standards working groups that have experience in the 17 SDGs also help validate governance proposals.",
                "Organizations & working groups that work towards implementing the United Nations 2030 Agenda for Sustainable Development, and teams that build 5ireChain."];


// What can we build on fire

const buildHeading = ["Governance & DAO frameworks for individuals, investment funds & companies.", "Custom Blockchain, Smart contracts, IoT, AR/VR, AI solutions for UN SDGs & impact."];
const buildImages = [GovernanceDao, customBlockChain ];
const buildImagesDimensions = [{width: '8.4rem', height: '6.4rem'}, {width: '8.4rem', height: '6.4rem'}]


// Card 

const headingCard = ["IoT & Smart Sensors", "Smart Contracts", "DAOs & Governance", "Decentralized Oracles", "Distributed Data Storage", "Self-sovereign Digital Identity", "Decentralized Naming Services", "Trusted Execution Environment (TEE)"];
const headingPara = ["Real-time economy sustainability data collection & telemetry with sensors, drones, meters & satellite integration.", "Rust-based WebAssembly ink! & Ethereum EVM Solidity Smart Contracts for building Decentralized applications.",
"On-chain collaboration & confederation frameworks for Decentralized autonomous organizations.", "Advanced decentralized data feeding & AI-based data analytics revealing SDG-related risks and impacts.","On-chain accounting of data transactions & DHT status enabling incentivized data storage & replication.",
"DIDs and Credentials verification, aggregation and computation processes to provide privacy & transparency.", "Decentralized and permissionless naming protocols compatible with DNS as an alternative to existing Certificate Authorities.",
"Custom state transition functions (STF) inside a Trusted Execution Environment to provide confidentiality & integrity."];


function AboutTechnology(props) {
    const { t } = useTranslation()

    return (
        <div>
             <div className={styles.aboutPageHeader}>
                 <h1>{t("A Blockchain platform for impact & SDG-related development, management & investment.")}</h1>
             </div>
             <div className={styles.proofOfFire}>
              <div className={styles.proofOfFireContent}>
                  <h1>{t("Proof of 5ire")}</h1>
                  <p>{t("The first sustainable by design hybrid consensus and reward distribution mechanism")}</p>
                  </div>
              <div className={styles.proofOfFireBoxes}>
                  <div className={styles.footerBody}>
                      { proofOfFireImages.map((img, index) => (
                          <div>
                            <ImageHeadingContent image={img}  heading={t(proofOfFireHeading[index])} para={t(proofOfHeadingPara[index])}
                                  imgSize={proofOfFireDimensions[index]}
                                  headingStyles={styles.headingStyles}
                                 paragraphStyles={styles.paragraphStyles}/>
                            </div>
                      ))}
                  </div>
              </div>
           </div>
           <div className={styles.imageContent}>
                <div>
                    <img src={FireArch} className={styles.Applogo} alt="logo" />
                </div>
                <div className={styles.Content}>
                    <p>{t("5ire Empowers DAOs & Working Groups to help accelerate the implementation of the United Nations 2030 Agenda for Sustainable Development.")}</p>
                </div>
          </div>
          <div className={styles.consensusHeading}> 
              <h1>{t("Consensus Actors")}</h1>
          </div>
        <div className={styles.consensusActors}>
            <div className={styles.consensusActorsBody}>
                { consensusImages.map((img, index) => (
                <div>
                    <ImageHeadingContent image={img}  heading={t(consensusHeadings[index])} para={t(consensusPara[index])}
                            imgSize={consensusImagesDimensions[index]}
                            headingStyles={styles.headingStyles}
                            paragraphStyles={styles.paragraphStyles}
                            containerClass={styles.containerStyles}/>
                            </div>
                ))}
            </div>
        </div>
        <div className={styles.consensusHeading}> 
              <h1>{t("Governance Actors")}</h1>
                </div>
          <div className={styles.consensusActors}>
                  <div className={styles.consensusActorsBody}>
                      { governanceImages.map((img, index) => (
                          <div>
                            <ImageHeadingContent image={img}  heading={t(governanceHeading[index])} para={t(governancePara[index])}
                                  imgSize={governanceDimensions[index]}
                                  headingStyles={styles.headingStyles}
                                 paragraphStyles={styles.paragraphStyles}
                                 containerClass={styles.containerStyles}/>
                            </div>
                      ))}
                  </div>
              </div>
              <div className={styles.buildFire}> 
                <div className={styles.buildFireContainer}>
                    <div className={styles.buildFireHeading}>
                         <h1>{t("What can be built on 5ire?")}</h1>
                    </div>
                    <div className={styles.imageContent}>
                        { buildImages.map((img, index) => (
                        <ImageHeadingContent image={img}  heading={t(buildHeading[index])}
                                imgSize={buildImagesDimensions[index]}
                                headingStyles={styles.headingStyles}
                                containerClass={styles.containerStyles}/>
                    ))}
                </div>
                </div>
            </div>
            <div className={styles.technologyStack}>
                <div className={styles.techstackHeading}>
                    <h1>{t("Technology Stack")} </h1>
                </div>
                <div className={styles.cardStyles}>
                  {
                      headingCard.map((heading, index) => (
                          <Card
                          heading={t(heading)}
                          paragraph={t(headingPara[index])}/>
                      ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutTechnology;