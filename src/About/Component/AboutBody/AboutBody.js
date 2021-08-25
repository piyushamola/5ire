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
                    <p>5ireChain aims to become a sustainable for-benefit and democratic ecosystem that focuses on positive impact. Purely decentralised and highly secure!</p>
                    <p>No one is in charge of the services and everyone can participate in the ecosystem with no privileges for certain parties.</p>
                </div>
            </div>
            <div className={styles.aboutBody2}>
                <div className={styles.aboutBodyHead2}>
                    <h1>About 5irechain </h1>
                </div>
                <div className={styles.aboutBodyContent2}>
                    <p>5irechain can connect with a variety of blockchains hence enabling cross- blockchain transfers of any type of data in a trustless manner - there is no dependence on any central party.</p>
                    <p>5irechain is built to embed the for-benefit paradigm deeply inside the blockchain runtime logic. Only by having this change at the core of the blockchain, we can ensure that the upper logic and activity will follow.</p>
                    <p >All of this in the most human-focused sustainable way where bringing value to existence is highly incentivized.Financial services on top of 5irechain are superior to their centralized counterparts.</p>
                    <p>With 5irechain, there is immense possibility of various financial applications and services existing in the most sustainable way with its user-centric vision that does not include intermediaries. We invite other blockchains and projects on top of 5irechain to adopt this vision and innovate in the way they utilize these mechanisms.</p>
                </div>
            </div>
            <div className={styles.AboutHeader}>
                <h1>Built by us, for the world. </h1>
                <h1>With one goal to create IMPACT.</h1>
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