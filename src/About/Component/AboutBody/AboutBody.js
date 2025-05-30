import React from 'react';
import { useTranslation } from 'react-i18next'

import styles from './AboutBody.scss';


//our partners

import partners from '../../../assets2/Partners.png'
// advisors

// advisors 

import ian from '../../../assets2/advisors/Ian.png';
import joe from '../../../assets2/advisors/Joe.png';
import mathew from '../../../assets2/advisors/Mathew.png';
import David from '../../../assets2/advisors/David.png';
import Alvaro from '../../../assets2/advisors/Alvaro.png';

// team
import PG from '../../../assets2/teamPictures/PG.png';
import PD from '../../../assets2/teamPictures/PD.png';
import VM from '../../../assets2/teamPictures/VM.png';
import Serge from '../../../assets2/teamPictures/Serge.png';
import SAI from '../../../assets2/teamPictures/Sai.png';
import Zak from '../../../assets2/teamPictures/Zak.png';
import Avid from '../../../assets2/teamPictures/Avid.png';
import Samiran from '../../../assets2/teamPictures/Samiran.png';
import Raja from '../../../assets2/teamPictures/Raja.png';
import Alvin from '../../../assets2/teamPictures/Alvin.png';
import Laurens from '../../../assets2/teamPictures/Laurens.png';
import Abdullah from '../../../assets2/teamPictures/Abdullah.png';
import Dung from '../../../assets2/teamPictures/Dung.png';
import Salil  from '../../../assets2/teamPictures/Salil.png';
import Himanshu from '../../../assets2/teamPictures/Himanshu.png';
import Jamshed from '../../../assets2/teamPictures/Jamshed.png';
import Omoalhaja from '../../../assets2/teamPictures/Omoalhaja.jpeg';
import Angel from '../../../assets2/teamPictures/Angel.png';
import Mubariz from '../../../assets2/teamPictures/Mubariz.png';

//logo 

import ted from '../../../assets2/logos/ted.png'
import forbes from '../../../assets2/logos/Forbes-logo.png'
import entrepreneur from '../../../assets2/logos/Entrepreneur_logo.png'
import globe from '../../../assets2/logos/globe.png'
import nasdaq from '../../../assets2/logos/nasdaq.png'

// carousel

import CarouselComp from '../../../common-elements/Carousel/Carousel.js';
import ImageHeadingContent from '../../../common-elements/ImageHeadingContent/ImageHeadingContent'

import FlipCard from '../../../common-elements/flipCard/flipCard';
import Footer from '../../../common-elements/Footer/Footer';


// about team values 

const teamImages = [PG, PD, VM, Serge, SAI, Zak, Avid, Samiran, Raja, Alvin, Dung, Salil, Himanshu, Laurens, Abdullah, Jamshed, Omoalhaja, Angel, Mubariz];
const aboutTeamParas = ["Serial social entrepreneur, investor, public speaker and writer creating 5th Industrial Revolution and championing UN SDGs. India President - 5thelement.group; Entrepreneur 35 Under 35, Asiaone 40 under 40 Most Influential Leaders, Greenbiz Global 30 Under 30, BP Scholar, WEF Global Shaper, Ambassador at One Young World, Al Gore’s Climate Leader. MBA – IIFT Delhi. Exec Ed – UChicago / UOxford",
"Prateek is a Blockchain enthusiast, investor and veteran Internet Marketer. He conceptualised the proprietary 5IRE consensus mechanism and reward protocols. In his internet marketing days, he clocked 8-figure affiliate revenues and helped incubate many startups. He founded Kaching Media and multiple internet marketing companies. He is also a heavy proponent of work life balance and healthy living.",
"Venture Capitalist & Futurist. Incubated 40+ Projects including Qtum, Tron & Aleph Zero; Advisor at the EU Blockchain Observatory, World Future Society & UN USA; Member of Singularity University, Ex-EU Lawyer.",
"Cofounder of Node Kapital, investing and scaling in DEFI, NFT, Gaming, Esports, Metaverse, Infrastructure & Layer 1/2 solutions. He previously successfully led and scaled Talent Spot Group into a global business with USD 120 Million in revenue. Polyglot - fluent in Arabic, Chinese, English, French, Armenian. Completed his grad degree at Stanford University.",
"Visionary Technology Leader with a record of accomplishment creating technology strategies and products that address across industry opportunities. He has 15+ years of Experience in strategy management MBA - Stephen M. Ross School of Business",
"A security of information systems engineer. Communication protocols and E2E encryption enthusiast. Cryptography, Blockchain and Intellectual property protection & DRM Researcher",
"Software engineer turned social entreprenuer with an experience in building for-benefit businesses and enterprise management. He also has a knack for Graphic & UI/UX Design. Exec Ed - Indian Institute of Management, Ranchi.",
"Phd in Information Security, Green IT & Technopreneurship, previously a research Associate at BT Ireland Innovation Center (University of Ulster) and at Universiti Teknologi Malaysia. Associate Professor at Quest International University Perak and at National University of Computer Emerging Sciences (FAST-NU)",
"An IT Professional having 20+ years with a proven record of delivering results in application development and DevOps. Certified AWS solutions architect with excellent programming experience in CPP,Java and Rust.",
"An Tech Entrepreneur and IT Technologist, Engineer with 10+ years of Software engineering experience. Founder, Blockchain Advisory, CTO, Product Manager and Solutions Architect. Silo’d and built teams that launched several production-grade distributed applications. Lead and delivered products from conception to launch and maturation from an established roadmap. Launched key blockchain platform and solutions specifically in the identity (SSI) space. BTA Blockchain Architect Certified Professional. Oracle Certified Professional. IBM Certified Professional. Technical Writer. Distributed Ledger Technology Advocate.",
"Blockchain/Rust Developer and enthusiast with 5 years of experience in full stack development, He did his education in electronics & technology in Vietnam and Japan.",
"An Infrastructure Engineer with 7+ years experience of effective infrastructure designing at scale, code management and deployment in all different forms of production environment.",
"He has been in the field of bug bounty since 2009 and has been listed in Apple, Google, Microsoft, Facebook, Adobe, Uber, AT&T, Avira, and many more with hall of fame listings. He has been a speaker at various conferences worldwide such as BotConf, CONFidence, Hack In the Box, SINCON, Sec-T Hackcon, and numerous others. He also spoke at the IEEE Conference in California and Malaysia as well as for TedX. He also authored multiple bestsellers titled Kali Linux - An Ethical Hacker's Cookbook, Hands-On Red Team Tactics and Hands-On Web Pentesting with Metasploit",
"He is security-minded a backend developer with a strong passion for Blockchain. Having been in the crypto space since 2016, he has strong knowledge of the workings of blockchain and working to create the the proof of benefit in 5ire. He has a strong skills in Golang, Rust and TS/JS. ",
"Software Engineer and Rust enthusiast with 2+ years of experience in network programming, building libraries and code optimization mainly in C/C++ and Rust",
"Dr. Jamshed Memon is Blockchain Security Consultant at 5ire. He possesses a doctorate in Information Systems and has over 12 years of academic and industry experience in the field of cryptography and cyber security. Along with working at 5ire Dr. Memon is also a cryptography researcher at British Telecom Ireland Innovation Center in Belfast, United Kingdom. His research interests include Post Quantum Cryptography, Public Key Infrastructure and Green Computing. ",
"Omoalhaja helps founders, investors, developers, crypto and blockchain enthusiasts achieve their dreams of decentralizing access to common wealth and lowering the entry barriers for everyday people to contribute to blockchain ecosystems. He does this by writing technical content covering cryptocurrencies, blockchain and blockchain ecosystems, including the burgeoning world of non-fungible tokens (NFTs). His clients have applauded and commended him for demystifying complex topics, identifying risks and opportunities for investors, and poke holes in all the hype and hysteria surrounding digital collectibles. If he's not writing, you will find him hustling NAN with Mubeenah -his jewel.",
"He is Certified AML FinTech Compliance Associate (CAFCA), ACAMS, Professor of Business Law at Universidad Rafael Urdaneta (URU) in the Schools of Law and Business Administration, Member of the Editorial Task Force of the Association of Certified Sanctions Specialists (ACSS). Private consultant in Blockchain and Cryptocurrency Laws and Regulations, International Corporate Law, and AML/CFT & Sanctions Compliance for domestic and international companies in Venezuela.",
"He is Legal expert specializing in tech law. Holding LL.M. degree in International Commercial Law and MA in Information Technology Law. Private consultant for tech companies operating in the fields of A.I.&Machine Learning, Blockchain&Crypto, E-Commerce, and Data Privacy."];

const aboutTeamHeadings = ["Pratik Gauri", "Prateek Dwivedi", "Vilma Mattila", "Serge Ajamian", "Sai Kossireddy", "Zakaria Salek", "Rahul Rautela", "Dr. Samiran Bag", "Raja Anche", "Alvin Jay Reyes", "Ho Dung", "Sushant Salil", "Himanshu Sharma", "Laurens", "Abdullah", "Dr. Jamshed Memon", "Omoalhaja Abiola", "Angel Niño Torres", "Mubariz Aliyev"];

const aboutImageSize = new Array(aboutTeamHeadings.length).fill({ width: '17rem', height: '17rem'});

const aboutTeamSubPara = ["Co Founder & CEO","Co Founder & CMO", "Co Founder & CBO", "Head of Advisory Council Strategic Advisor to the CEO", "Head of Strategy Management", "Head of Blockchain Research & Development", "Head of Operations & Design","Senior Researcher", "Infrastructure Architect", "Technical Manager", "Rust Developer", "Infrastructure Lead", "5ire Security Head", "Sr Substrate Developer", "Software engineer", "Blockchain Researcher", "Technical Writer", "Lawyer", "Lawyer" ];

const aboutTeamLinkedIn = ["https://www.linkedin.com/in/pratikgauri/",
 "https://www.linkedin.com/in/prateekdwivedi1991",
"https://www.linkedin.com/in/vilmamattila",
"https://www.linkedin.com/in/sergeajamian/",
"https://www.linkedin.com/in/skossireddy/",
"https://www.linkedin.com/in/zakaria-salek/",
"https://www.linkedin.com/in/rahul-rautela-14152473/",
"https://www.linkedin.com/in/samiran-bag-aab9a133/",
"https://www.linkedin.com/in/raja-s-a-16300823/",
"https://www.linkedin.com/in/alvinjayreyes/",
"https://www.linkedin.com/in/dinh-dung-880bb0219/",
"",
"https://www.linkedin.com/in/0xhimanshu/",
"https://www.linkedin.com/in/laurens-kubat",
"https://www.linkedin.com/in/abdullah-eryuzlu-675611182",
"https://www.linkedin.com/in/jamshedmemon/",
"",
"https://www.linkedin.com/in/angeljnt/",
"https://www.linkedin.com/in/mubariz-aliyev/",
]

// Advisors 


const advisorsImages = [ian, joe, mathew, David, Alvaro];
const advisorsHeadings = ["Ian Scarffe", "Joe Vezzani", "Mathew Neimerg", "David Marshall", "Alvaro Fernandaz"];
const advisorsImageSize = [{ width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'},  { width: '17.6rem', height: '17.6rem'}, { width: '17.6rem', height: '17.6rem'}];
const advisorsSubPara = ["Blockchain and Crypto Advisor", "CEO, Lunarcrush Ex- Morgan Stanley","President & Co-founder of Aleph Zero", "Co-Founder Marshland Capital", "Head of Strategy & Growth, Nsure Network", "Co-founder & CMO Aleph Zero"];
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

// logo styles 
const logos = [nasdaq, forbes, ted, entrepreneur, globe];
const logosDimensions = [{ width: '16rem', height: '4rem', marginTop: '2.5rem'}, { width: '14.7rem', height: '8.3rem', marginBottom: '4rem'}, { width: '12.3rem', height: '4.5rem', marginTop: '2rem'}, { width: '23.8rem', height: '9rem', marginBottom: '4rem'}, { width: '11.2rem', height: '9.4rem', marginBottom:'4rem'}];
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

function AboutBody(props) {
  const { t } = useTranslation();
    return (
        <div>
            <div className={styles.aboutFirstHeader}>
              <h1>{t("5ireChain is a fifth-generation blockchain that aims to bring a paradigm shift from a for-profit to a for-benefit economy.")} </h1>
            </div>
            <div className={styles.AboutHeader}>
                <h1>{t("Our Mission")}</h1>
                <p>{t("5ire aims to become a blockchain ecosystem for the 5th industrial revolution, where self-sovereign decentralized organizations are empowered & incentivized toward accelerating the implementation of the United Nations 2030 Agenda for Sustainable Development.")} </p>
            </div>
            <div className={styles.aboutFire}>
                <h1>{t("About 5ire")}</h1>
                <p>{t("5ire is a blockchain ecosystem where individuals and enterprises can develop, build, transact and participate in sustainable economic growth while assuring democracy and justified fair representation of stakeholders.")} </p>
            </div>
            <header className={styles.founder}>
              <div className={styles.founderContent}>
                <h1>{t("Founded by Global Impact Champions & Blockchain Pioneers")}</h1>
              </div>
           </header>
              <div className={styles.teamFlipFlop}>
                      { teamImages.map((img, index) => (
                        index <= 3 && <div key={index}>
                        <FlipCard image={img} paraAfterFlip={t(aboutTeamParas[index])} heading={t(aboutTeamHeadings[index])} subPara={t(aboutTeamSubPara[index])}
                            imgSize={aboutImageSize[index]}
                            linkedIn={aboutTeamLinkedIn[index]}
                        />
                        </div>
                      ))}
              </div>
              <div className={styles.teamFlipFlop}>
                      { teamImages.map((img, index) => (
                        (index > 3 && index <= 16) && <div key={index}>
                        <FlipCard image={img} paraAfterFlip={t(aboutTeamParas[index])} heading={t(aboutTeamHeadings[index])} subPara={t(aboutTeamSubPara[index])}
                            imgSize={aboutImageSize[index]}
                            linkedIn={aboutTeamLinkedIn[index]}
                        />
                        </div>
                      ))}
              </div>
              <div className={styles.founders}>
                <h1>{t("Legal Team")}</h1>
              </div>
                <div className={styles.teamFlipFlop}>
                      { teamImages.map((img, index) => (
                        (index > 16) && <div key={index}>
                        <FlipCard image={img} paraAfterFlip={t(aboutTeamParas[index])} heading={t(aboutTeamHeadings[index])} subPara={t(aboutTeamSubPara[index])}
                            imgSize={aboutImageSize[index]}
                            linkedIn={aboutTeamLinkedIn[index]}
                        />
                        </div>
                      ))}
              </div>
            <div className={styles.founders}>
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
            <div className={styles.ourAdvisors}>
                 <h1>{t("Our Global Advisory Council & Braintrust Network")}</h1>
            </div>
            <div className={styles.aboutAdvisorsMobile}>
                <CarouselComp responsive={responsiveForAdvisors}>
                { advisorsImages.map((img, index) => (
                            <ImageHeadingContent image={img} heading={t(advisorsHeadings[index])} subHead={t(advisorsSubPara[index])}
                            imgSize={advisorsImageSize[index]}
                            headingStyles={styles.headingStyles}
                            subHeadStyles={styles.subheadingStyles}
                            containerClass={styles.containerClass}
                            linkedIn={advisorsLinkedIn[index]}
                            />
                          ))}
                </CarouselComp>
              </div>
             <div className={styles.ourAdvisors}>
                <h1>{t("Our Partners")}</h1>
            </div>
            <div className={styles.parterns}>
            <img src={partners}  alt="partners" />
            </div>
            <Footer/>

        </div>
    );
}

export default AboutBody;