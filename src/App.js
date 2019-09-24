// eslint-disable-next-line no-unused-vars
import React from 'react';

import './App.css';
import Matrix from './Matrix';

function App() {
  let cols = ['FSG Council'	,'Executive Committee Chair','Committee Chair',	'Advisory Group Members'	,'Business Leads'	,'Business Stewards Ops',	'AS Ops',	'Project Manager'];
  let rows = ['Develop strategy & communicate vision','Oversee Financial System Governance body','Define & monitor performance metrics (KPIs)','Schedule and conduct FSG group meetings','Establish priorities for ongoing support, maintenance, critical issues and enhancement of the application','Manage scope, resources and issues related to system operations and enhancements','Cross-functional coordination of ongoing operational concerns, patches, fixes, upgrades, and enhancements','Provide progress on performance metrics (KPIs)','Provide status and progress of ongoing FMS iniitiative (non-BA initiatives) projects','Identify opportunities for process and system improvements, evaluate options, propose enhancements','Consolidate list of proposed enhancements','Define and document business requirements for system enhancements','Provide technical estimates and plan for enhancement requests','Develop charter for all enhancements for each cycle','Review and approve enhancement charter','Approve enhancement charter budget'];
  return (
    <div className="App">
      
        <Matrix row={rows} col={cols}/>
      
    </div>
  );
}

export default App;
