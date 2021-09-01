import React from 'react';
import styles from './AboutBody.scss';

// import Content from '../../../common-elements/typography/Content/Content';
// import Heading from '../../../common-elements/typography/Heading/Heading';
import PG from '../../../assets2/teamPictures/PG.png';
import PD from '../../../assets2/teamPictures/PD.png';
import VM from '../../../assets2/teamPictures/VM.png';
import SAI from '../../../assets2/teamPictures/Sai.png';
import Zak from '../../../assets2/teamPictures/Zak.png';
import Avid from '../../../assets2/teamPictures/Avid.png';
import Serge from '../../../assets2/teamPictures/Serge.png';

import CarouselComp from '../../../common-elements/Carousel/Carousel.js';


import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent'
import Footer from '../../../common-elements/Footer/Footer';

const teamImages = [PG, PD, VM, SAI, Zak, Avid, Serge];
const aboutTeamParas = ["Serial social entrepreneur, investor, public speaker and writer creating 5th Industrial Revolution and championing UN SDGs. India President - 5thelement.group ; Entrepreneur 35 Under 35, Asiaone 40 under 40 Most Influential Leaders, Greenbiz Global 30 Under 30, BP Scholar, WEF Global Shaper, Ambassador at One Young World, Al Gore’s Climate Leader. MBA – IIFT Delhi. Exec Ed – UChicago / UOxford",
    "Prateek is a Blockchain enthusiast , investor and veteran Internet Marketer. He conceptualised the proprietary 5IRE consensus mechanism and reward protocols. In his internet marketing days, he clocked 8-figure affiliate revenues and helped incubate many startups. He founded Kaching Media and multiple internet marketing companies. He is also a heavy proponent of work life balance and healthy living",
"Ex-EU lawyer, Venture Capitalist & Futurist. Incubated 40+ Projects including Qtum, Tron & Aleph Zero ; Advisor at the EU Blockchain Observatory , World Future Society & UN USA ; Member of Singularity University",
"Visionary Technology Leader with a record of accomplishment creating technology strategies and products that address across industry opportunities. He has 11+ years of Experience in strategy management MBA - Stephen M. Ross School of Business",
"A security of information systems engineer with an experience  on communication protocols and E2E encryption.  Cryptography, Blockchain and Intellectual property protection & DRM Researcher",
"Software  engineer  turned Social entreprenuer with an experience in   building for-benefit  businesses and enterprise management. He also has a knack  for Graphic & UI/UX Design. Exec Ed - Indian Institute of Management, Ranchi",
"Cofounder of Node Kapital, investing and scaling in DEFI, NFT, Gaming, Esports, Metaverse, & Infrastructure, Layer 1/2 solutions. He previously successfully led and scaled Talent Spot Group into a global business USD 120 Million in revenue Polyglot, fluent in Arabic Chinese English French Armenian Completed his grad degree at Stanford University"];

const aboutTeamHeadings = ["Pratik Gauri", "Prateek Dwivedi", "Vilma Matilla", "Sai Kossireddy", "Zakaria Salek", "Rahul Rautela", "Serge Ajamian"];

const aboutTeamSubPara = ["Co Founder","Co Founder", "Co Founder", "Head of Strategy Management", "Head of Blockchain Research & Development", "Head of Operations & Design", "Head of Global Growth & Partnerships"];

function AboutBody(props) {
    return (
        <div>
            <div className={styles.AboutHeader}>
                <h1>About 5ire - A Revolutionary Blockchain</h1>
            </div>
            <div className={styles.aboutBody1}>
                <div className={styles.aboutBodyHead1}>
                    <h1>5ire Mission</h1>
                </div>
                <div className={styles.aboutBodyContent1}>
                    <p>5ire aims to become THE launchpad FOR the 5th industrial revolution where self-sovereign decentralized organizations are empowered to work towards achieving the United Nations 2030 Agenda. 5ire will empower teams to build solutions for a sustainable & decentralized future.  This will be done by creating unions and confederations between communities & DAOs that will be democratically funded by the 5ire treasury. 5ire is inspired by how sovereign nations split their yearly treasury into specialized treasuries managed by competing ministries & creates the governance and assets management systems of the future while assuring protection and privacy of all stakeholders by combining Trusted execution environments and Blockchain technologies to achieve high levels of security & truth.</p>
                   
                </div>
            </div>
            <div className={styles.aboutBody2}>
                <div className={styles.aboutBodyHead2}>
                    <h1>About 5irechain </h1>
                </div>
                <div className={styles.aboutBodyContent2}>
                    <p>Distributed ledger technology enables the achievement of a cryptographic truth backed by mathematical assumptions and physical laws. Enabling the separation of facts and narratives & solving inefficiencies caused by paper form agreements.</p>
                    <p>5ire believes that the true powers of blockchain are yet to be seen. 5irechain nodes are designed to bring 700+ ESG data sources on-chain using a network of decentralized oracle and off-chain workers to build immutable sources of sustainability indexes and standards.</p>
                    <p >The runtime of 5irechain is modular & rich bringing forth governance and democracy mechanisms, self-sovereign digital identity management, trusted execution environment, zero-knowledge primitives, and metaverses. 5ire is able to execute EVM smart contracts with ethereum tooling full compatibility and WebAssembly smart contracts that provide more utility, security, and upgradability.</p>
                    <p>5irechain is able to interoperate and cross-transfer with almost all the existing blockchain platforms & aims to become a sharded network of connected blockchains and ecosystems that will lead the 5th industrial revolution.</p>
                </div>
            </div>
            <div className={styles.AboutHeader}>
                <h1>5ire bring forth Truth not Trust </h1>
            </div>
            <div className={styles.MeetTeam}>
                <h1>Meet Our Team</h1>
            </div>
            <div>
                  <div className={styles.aboutTeam}>
                      { teamImages.map((img, index) => (
                        <ImageHeadingContent image={img} para={aboutTeamParas[index]} heading={aboutTeamHeadings[index]} subPara={aboutTeamSubPara[index]}
                        imgSize={styles.imageStyles}
                        headingStyles={styles.headingStyles}
                        paragraphStyles={styles.paraStyles}
                        subParaStyles={styles.subheadingStyles}/>
                      ))}
                  </div>
            </div>
            <div className={styles.founders}>
                <h1>FOUNDERS FEATURED IN</h1>
            </div>
            <footer>
                <CarouselComp/>
            </footer>
            <div className={styles.finalFooter}>
                <p>Want to Join 5ire ?</p>
            </div>
            <Footer/>

        </div>
    );
}

export default AboutBody;