import React from 'react';
import "./Job.css";
import { useNavigate } from 'react-router-dom';

const Job = () => {

  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className="jobContent">
<button onClick={handleBack} className='back'>All prodigol jobs</button>
   
    <div className="job-container">


 
       
      <div className="job-sidebar">
       
        <div className="sidebar-section">
          <h2>Location</h2>
          <p>Mumbai</p>
          <h2>Department</h2>
          <p>Engineering</p>
        </div>
      </div>
      <div className="job-main">
      <h1>Senior Machine Learning Engineer</h1>
        <div className="job-description">
          <h1>About the role</h1>
          <div className="role-overview">
            <h2>Overview</h2>
            <ul>
              <li>Company name: Prodigal</li>
              <li>HQ Location: Mountain View, California</li>
              <li>Salary: Rs. 75-80 lakhs per year</li>
              <li>Experience: 4+ years</li>
              <li>Location: Mumbai</li>
              <li>Type: Full-time</li>
            </ul>
            <p>We are a fast-growing Bay Area-based startup backed by leading investors like Menlo Ventures, Accel and Y-Combinator. We create AI and ML-powered software for the finance and lending industries, focused on repayment and debt recovery. We work to improve conversations between call center agents and customers and provide actionable insights. Our products use AI to create next-generation speech analytics that support real-time agent guidance, automated notes after conversations, and call analysis for quality assurance and compliance.</p>
            <p>The team has deep technical talent today and we believe there is an opportunity to build an iconic vertical software business that will fundamentally impact how the multi-trillion-dollar debt industry is managed. Debt has such a massive impact on consumers and prior to Prodigal, the industry was saddled with painful, low value manual workflows, and poor customer experience- our mission is to humanize the debt repayment process through automation and data.</p>
            <p>We are looking for a passionate and seasoned Senior Machine Learning (ML) Engineer to spearhead the design, development, and deployment of cutting-edge Machine Learning and Generative AI solutions towards Prodigal’s vision of building the Intelligence Layer for Consumer Finance.</p>
          </div>
          <div className="roleResponsibility">
            <h1>Responsibilities:</h1>
            <p>1. ML Algorithm Development: Design and implement advanced ML algorithms leveraging traditional Machine Learning techniques and the modern NLP stack, including Large Language Model (LLMs)</p>

            <p>2. Data Engineering & Software Development: Architect and implement data pipelines for ML model training. Lead scalable software systems development to deploy ML models into production systems, ensuring high performance and reliability.</p>
            <p>3. Data Engineering & Software Development: Architect and implement data pipelines for ML model training. Lead scalable software systems development to deploy ML models into production systems, ensuring high performance and reliability.</p>
            <p>4.  Collaboration & Leadership: Effectively collaborate with cross-functional teams to deliver high-quality solutions on time. Guide team members in contributing to ML design discussions for new projectp</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Job;

