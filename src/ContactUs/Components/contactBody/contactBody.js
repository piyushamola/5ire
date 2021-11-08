import React from 'react';
import styles from './contactBody.scss';
import Footer from '../../../common-elements/Footer/Footer';
const techBoxesHeading = ["Twitter", "Element Chat", "Reddit", "Medium", "LinkedIn", "Telegram"];
const links = ["https://twitter.com/5ireChain", "https://matrix.to/#/#5ire:matrix.org", "https://www.reddit.com/r/5ireChain/", "https://medium.com/@5ireChain", "https://www.linkedin.com/company/5irechain/", "https://t.me/OfficialFireChain"]

function contactBody(props) {
    return (
        <div>
             <div className={styles.techHeader}>
                <h1>5ire: Transforming Internet of Information to Internet of Value</h1>
            </div>
            <div className={styles.techBoxStyles}>
                {
                    techBoxesHeading.map((heading, index)=> (
                    <div className={styles.techBox} onClick={() => window.open(links[index])}>
                        <h1>{heading}</h1>
                    </div>
                    ))
                }
              </div>
              <Footer/>
        </div>
    );
}

export default contactBody;