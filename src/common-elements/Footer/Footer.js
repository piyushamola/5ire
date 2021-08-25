import React from 'react';
import HeadingWithList from '../HeaderWithList/HeaderWithList';
import styles from './Foooter.scss';

const FinalFooterHeading = ["General", "Technology", "Community", "Legal"];

const FinalFooterList = [["About", "FAQ", "Support", "Careers"], ["Technology", "Roadmap", "Lightpaper", "Whitepaper"],
                          ["Community",
                            "Documentation",
                            "Element Chat",
                            "Medium"], ["Privacy Policy", "Cookie Policy", "Terms of Use"]];
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