import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate(); // Create the navigate function
  const [filters, setFilters] = useState({
    role: "",
    employees: "",
    experience: "",
    remote: "",
    salary: "",
   
  });
  useEffect(() => {
    const fetchJobs = async () => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const body = JSON.stringify({ limit: 10, offset: 0 });
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
        const data = await response.json();
        setJobs(data.jdList);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);
 

 
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filteredJobs = jobs.filter(job => {
    const roleMatch = filters.role === "" || (job.jobRole && job.jobRole.toLowerCase().includes(filters.role.toLowerCase()));
    const expMatch = filters.experience === "" || 
      (job.minExp !== undefined && job.maxExp !== undefined &&
      parseInt(filters.experience) >= job.minExp && parseInt(filters.experience) <= job.maxExp);
    const remoteMatch = filters.remote === "" || (job.location && job.location.toLowerCase().includes(filters.remote.toLowerCase()));
    const salaryMatch = filters.salary === "" || 
      (job.maxJdSalary !== undefined && parseInt(filters.salary) <= job.maxJdSalary);
  
    // Debugging outputs
    console.log(`Filtering Job: ${job.jobRole}, Role Match: ${roleMatch}, Exp Match: ${expMatch}, Remote Match: ${remoteMatch}, Salary Match: ${salaryMatch}`);
  
    return roleMatch && expMatch && remoteMatch && salaryMatch;
  });
  
  
  return (
    <>
      <div className="homeContainer">
        <div className="leftSidebar">
          <img src="./logo.png" alt="" />
          <div className="logoContent">
            <h4>Get jobs</h4>
            <div className="logos">
              <span class="material-symbols-outlined">person</span>
            </div>
            <div className="logos">
              <span class="material-symbols-outlined">search</span>
            </div>
            <div className="logos">
              <span class="material-symbols-outlined">currency_rupee</span>
            </div>
            <div className="logos">
              <span class="material-symbols-outlined">person_add</span>
            </div>
          </div>
          <div className="ReferLogoContent">
            <h4>REFER</h4>
            <div className="ReferLogo">
              <span class="material-symbols-outlined">recommend</span>
            </div>
            <div className="ReferLogo">
              <span class="material-symbols-outlined">featured_play_list</span>
            </div>
            <div className="ReferLogo">
              <span class="material-symbols-outlined">share</span>
            </div>
          </div>
        </div>

        <div className="MiddleContent">
          <div className="filters">
            <div className="filter">
            <select name="role" onChange={handleFilterChange}>
                <option>Roles</option>
                <option>Backend</option>
                <option>Frontend</option>
                <option>Fullstack</option>
                <option> Flutter</option>
                <option>Android</option>
                <option>Hr</option>
                <option> Legal</option>
                <option>Finance</option>
              </select>
            </div>

            <div className="filter">
            <select name="employees" onChange={handleFilterChange}>
                <option>Number Of Employees</option>
                <option>1-10</option>
                <option>11-20</option>
                <option>21-50</option>
                <option>51-100</option>
                <option>101-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
            <div className="filter">
            <select name="experience" onChange={handleFilterChange}>
                <option>Experience</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>

                <option>4 Years</option>
                <option>5 Years</option>
                <option>6 Years</option>
                <option>7 Years</option>
                <option>8 Years</option>
                <option>9 Years</option>
                <option>10 Years</option>
              </select>
            </div>
            <div className="filter">
            <select name="remote" onChange={handleFilterChange}>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </div>

            <div className="filter">
            <select name="salary" onChange={handleFilterChange}>
                <option>Minimum Base Pay Salary</option>
                <option>0L</option>
                <option>10L</option>
                <option>20L</option>
                <option>30L</option>
                <option>40L</option>
                <option>50L</option>
                <option>60L</option>
                <option>70L</option>
              </select>
            </div>
            <div className="filter">
              <input type="text" placeholder="Search Company Name" />
            </div>
          </div>

         

<div className="grid-container">
            {filteredJobs.map((job) => (
              <div className="card" key={job.jdUid}>
                <div className="card-header">
                  <span className="date-posted">Posted recently</span>
                </div>
                <div className="job-details">
                  <div className="jobImg">
                    <img src={job.logoUrl || './bird.jpg'} alt="Company Logo" className="company-logo" />
                  </div>
                  <div className="jobContent">
                    <h2>{job.companyName}</h2>
                    <h3>{job.jobRole}</h3>
                    <h4>{job.location}</h4>
                    <p>Estimated Salary: {job.minJdSalary ? `$${job.minJdSalary}k - ` : ''}${job.maxJdSalary}k {job.salaryCurrencyCode}</p>
                  </div>
                </div>
                <div className="card-body">
                  <h1>About Company:</h1>
                  <p className={showFullText ? "" : "truncated"}>
                    {job.jobDetailsFromCompany}
                  </p>
                  <button className="show-more-button" onClick={() => navigate('/jobDescription')}>
                    Show More
                  </button>
                </div>
                <div className="card-footer">
                  <h3>Minimum Experience</h3>
                  <h2>{job.minExp} - {job.maxExp} years</h2>
                  <button>Easy Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="RightSidebar">
          <div className="RightContent">
            <img src="./Profile.jpg" alt="" />
          </div>
          <div className="EditLogo">
            <span class="material-symbols-outlined">edit</span>
            <h3>Edit Profile</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
