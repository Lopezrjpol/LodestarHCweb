import 'bootstrap/dist/css/bootstrap.min.css';


const Navigate = () => {
    return ( 
      <div>
      <nav>
        <ul className="nav">
        <li><a href="/">Home</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/investor">Investor Relation</a></li>
        <li><a href="../members/bod">Meet the team</a>
        <ul>
        <li><a href="../members/bod">BOARD OF DIRECTORS</a></li>
        <li><a href="../members/bcm">BOARD COMMITEE MEMBERS </a></li>
        <li><a href="../members/eo">EXECUTIVE OFFICERS</a></li>
        </ul>
        </li>
        <li><a href="#">Downloadables</a>
        <ul>
        <li><a href="#">Corporate Governance</a>
            <ul>
            <li><a href="../downloadables/manualcorp">Manual on Corporate Governance</a></li>
            <li><a href="../downloadables/ConductEthics">CODE OF BUSINESS CONDUCT AND ETHICS</a></li>
            <li><a href="../downloadables/AnnualGovernanceReport">ANNUAL CORPORATE GOVERNANCE REPORT</a></li>
            <li><a href="../downloadables/BoardCommittee">BOARD COMMITTEES</a></li>
            <li><a href="../downloadables/SocialRespo">CORPORATE SOCIAL RESPONSIBILITY</a></li>
            <li><a href="../downloadables/RiskManagement">ENTERPRISE RISK MANAGEMENT</a></li>
            <li><a href="../downloadables/CompanyPolicies">COMPANY POLICIES</a></li>
            </ul>
        </li>
        <li><a href="#">COMPANY DISCLOSURES</a>
            <ul>
            <li><a href="../downloadables/SecFilings">SEC FILINGS</a></li>
            <li><a href="../downloadables/AnnualMeeting">NOTICE OF ANNUAL OR SPECIAL STOCKHOLDER'S MEETING</a></li>
            <li><a href="../downloadables/Minutes">MINUTES OF ALL GENERAL OR SPECIAL STOCKHOLDERS'S MEETINGS</a></li>
            </ul>
        </li>
        <li><a href="../downloadables/Others">OTHERS</a></li>
        </ul>
        </li>
        </ul>
        </nav>
  </div>
     );
}
 
export default Navigate;