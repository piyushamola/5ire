/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import burger from '../../assets/frontPageLogos/burger.svg'
import React, { useState } from "react";

import styles from '../styles/sidebar.scss'

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={styles.sideBar}>
      {/* Sidebar Overlay */}
      {/* <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      /> */}

    {/* <div className={styles.burgerIcon} onClick={() => setIsSidebarOpen(true)}>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
      </div> */}

      {/* Sidebar */}
      <div
        className={styles.sideBarItems}
      >

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Welcome",
              itemId: "/welcome",
            },
            {
              title: "Getting Started",
              itemId: "/gettingStarted/5ire",
              subNav: [
                {
                  title: "5ire",
                  itemId: "/gettingStarted/5ire",
                  // Optional
                },
                {
                  title: "Roadmap",
                  itemId: "/gettingStarted/roadmap",
                },
                {
                  title: "UN SDG's",
                  itemId: "/gettingStarted/unsdgs",
                },
              ]
              // Optional
            },
            {
              title: "Architecture",
              itemId: "/architecture/accounts",
              subNav: [
                {
                  title: "Accounts",
                  itemId: "/architecture/accounts",
                  // Optional
                },
                {
                  title: "Consensus",
                  itemId: "/architecture/consensus",
                },
                {
                  title: "Governance",
                  itemId: "/architecture/governance",
                },
                {
                  title: "Identity",
                  itemId: "/architecture/identity",
                },
                {
                  title: "Overview",
                  itemId: "/architecture/overview",
                },
                {
                  title: "Staking",
                  itemId: "/architecture/staking",
                },
                {
                  title: "Treasury",
                  itemId: "/architecture/treasury",
                },

              ]
            },
            {
              title: "Developer Guide",
              itemId: "/developer/overview",
              subNav: [
                {
                  title: "Overview",
                  itemId: "/developer/overview"
                },
                {
                  title: "Smart Contract",
                  itemId: "/developer/smartContract"
                }
              ]
            }
          ]}
        />

      </div>
    </div>
  );
};
