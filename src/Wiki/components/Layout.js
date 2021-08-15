import React from "react";

import { NavSidebar } from "./NavSidebar";
import styles from '../styles/sidebar.scss';

import fire from '../../assets2/logowhite.png';

export const DashboardLayout = ({ children }) => {
  return (
      <div className={styles.BodyWrapper}>
        <div className={styles.pageHeader}>
          <img src={fire} className={styles.appLogo} alt="logo" />
          <p>FIRE WIKI</p>
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
