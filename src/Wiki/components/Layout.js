import React from "react";

import { NavSidebar } from "./NavSidebar";
import styles from '../styles/sidebar.scss';

import fire from '../../assets2/logowhite.png';
import Content from '../../common-elements/typography/Content/Content';

export const DashboardLayout = ({ children }) => {
  return (
      <div className={styles.BodyWrapper}>
        <div className={styles.pageHeader}>
          <div></div>
          <img src={fire} className={styles.appLogo} alt="logo" />
          <Content size={1}>FIRE WIKI</Content>
        </div>
        <div className={styles.body}>
          <NavSidebar />
          <div>
            <main>
              <section>
                <div>
                  {children}
                </div>
              </section>
            </main>
          </div>
      </div>
      </div>
  );
};
