import React from 'react';
import HeadingWithList from '../HeaderWithList/HeaderWithList';
import styles from './Foooter.scss';

import privacyPolicy from '../../assets2/documents/privacyPolicy.pdf';
import WhitePaper from '../../assets2/documents/WhitePaper.pdf';
import LightPaper from '../../assets2/documents/LightPaper.pdf';

const FinalFooterHeading = ["General", "Technology", "Community", "Legal"];

const FinalFooterList = [[{ label: "About", link:'/about' }, { label: "Support", link: '/contact'}],
                          [{ label: "ResearchGate", link: '', open : 'https://www.researchgate.net/publication/353918948_5IRECHAIN_A_SUSTAINABILITY-DRIVEN_FIFTH-GENERATION_BLOCKCHAIN'}, { label: "Roadmap", link: '/roadmap'}, { label: "Lightpaper", link: '', open: LightPaper}, { label: "Whitepaper", link: '', open: WhitePaper}],
                          [{ label: "Telegram", link: '', open : 'https://t.me/OfficialFireChain'}, {label: "Documentation", link: '', open : 'https://5ire.gitbook.io/5ire-wiki/'}, {label: "Element Chat", link: '', open: 'https://matrix.to/#/#5ire:matrix.org'}, { label: "Medium", link: '', open: 'https://medium.com/@5ireChain'}],
                          [{ label: "Privacy Policy", link: '', open: privacyPolicy }]
                        ];

function Footer(props) {
    return (
        <footer className={styles.FinalFooterContainer}>
        <div className={styles.FinalFooter}>
          { FinalFooterHeading.map(( head, index) => (
          <div>
              <HeadingWithList list={FinalFooterList[index]} heading={head}/>
          </div>
          ))}
        </div>
      <p className={styles.contentStyles}>All Rights Reserved &copy; 5ire 2021 | Kemp House, 160 City Rd, London EC1V 2NX, United Kingdom</p>
    </footer>
    );
}

export default Footer;