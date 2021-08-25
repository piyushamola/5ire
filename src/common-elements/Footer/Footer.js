import React from 'react';
import HeadingWithList from '../HeaderWithList/HeaderWithList';
import styles from './Foooter.scss';

import privacyPolicy from '../../assets2/documents/privacyPolicy.pdf';
import WhitePaper from '../../assets2/documents/WhitePaper.pdf';

const FinalFooterHeading = ["General", "Technology", "Community", "Legal"];

const FinalFooterList = [[{ label: "About", link:'/about' }, { label: "FAQ", link: ''}, { label: "Support", link: '/contact'}, {label: "Careers", link: ''}],
                          [{ label: "Technology", link: '/technology'}, { label: "Roadmap", link: '/roadmap'}, { label: "Lightpaper", link: ''}, { label: "Whitepaper", link: '', open: WhitePaper}],
                          [{ label: "Community", link: '/contact'}, {label: "Documentation", link: '', open : 'https://5ire.gitbook.io/5ire-wiki/'}, {label: "Element Chat", link: '', open: 'https://matrix.to/#/#5ire:matrix.org'}, { label: "Medium", link: '', open: 'https://medium.com/@5ireChain'}],
                          [{ label: "Privacy Policy", link: '', open: privacyPolicy } , { label: "Cookie Policy", link: ''}, {label: "Terms of Use", link: ''}]
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
      <p className={styles.contentStyles}>All Right  Reserved &copy; 5ire 2021 | Kemp House, 160 City Rd, London EC1V 2NX, United Kingdom</p>
    </footer>
    );
}

export default Footer;