import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Fire from './GettingStarted/fire';
import RoadMap from "./GettingStarted/roadmap";
import Unsdgs from "./GettingStarted/unsdgs";

import Accounts from './Architecture/accounts';
import Consensus from "./Architecture/consensus";
import Governance from "./Architecture/governance";
import Identity from "./Architecture/identity";
import Overview from "./Architecture/overview";
import Staking from "./Architecture/staking";
import Treasury from "./Architecture/treasury";

import OverviewDeveloper from "./DeveloperGuide/overview";
import SmartContract from "./DeveloperGuide/smartcontract";

import Welcome from "./Welcome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/gettingStarted/5ire">
          <Fire />
        </Route>
        <Route path="/gettingStarted/roadmap">
          <RoadMap />
        </Route>
        <Route path="/gettingStarted/unsdgs">
          <Unsdgs />
        </Route>
        <Route path="/architecture/accounts">
          <Accounts />
        </Route>
        <Route path="/architecture/Governance">
          <Governance />
        </Route>
        <Route path="/architecture/consensus">
          <Consensus />
        </Route>
        <Route path="/architecture/identity">
          <Identity />
        </Route>
        <Route path="/architecture/overview">
          <Overview />
        </Route>
        <Route path="/architecture/staking">
          <Staking />
        </Route>
        <Route path="/architecture/treasury">
          <Treasury />
        </Route>
        <Route path="/developer/overview">
          <OverviewDeveloper />
        </Route>
        <Route path="/developer/smartContract">
          <SmartContract />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
