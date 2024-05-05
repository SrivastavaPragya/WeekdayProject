import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate(); // Create the navigate function

  const handleShowMore = () => {
    navigate('/jobDescription'); // Navigate to the jobDescription route
  };
  return (
   <>
   <div className="homeContainer">

<div className="leftSidebar">
<img src="./logo.png" alt="" />
<div className="logoContent">

    <h4>Get jobs</h4>
    <div className="logos">
        <span class="material-symbols-outlined">
person
</span>
    </div>
    <div className="logos">
    <span class="material-symbols-outlined">
search
</span>
    </div>
    <div className="logos">
    <span class="material-symbols-outlined">
currency_rupee
</span>
    </div>
    <div className="logos">
    <span class="material-symbols-outlined">
person_add
</span>
    </div>

</div>
<div className="ReferLogoContent">
    <h4>REFER</h4>
    <div className="ReferLogo">
    <span class="material-symbols-outlined">
recommend
</span>
    </div>
    <div className="ReferLogo">
    <span class="material-symbols-outlined">
featured_play_list
</span>
    </div>
    <div className="ReferLogo">
    <span class="material-symbols-outlined">
share
</span>
    </div>
</div>
</div>


<div className="MiddleContent">
      <div className="filters">
        <div className="filter">
        <select>
            <option>Roles</option>
            <option>Backend</option>
            <option>Frontend</option>
            <option>Fullstack</option>
            <option > Flutter</option>
            <option >Android</option>
            <option>Hr</option>
            <option > Legal</option>
            <option >Finance</option>
          </select>
        </div>
      
        <div className="filter">
          <select>
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
          <select>
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
          <select>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>
        </div>
       
        <div className="filter">
          <select>
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
    
          




           


          
              








            <div className="card">
              <div className="card-header">
                <span className="date-posted">Posted 16 days ago</span>
              </div>

              <div className="job-details">
                <div className="jobImg">
                <img src="./bird.jpg" alt="Company Logo" className="company-logo" />
                </div>
                
                <div className='jobContent'>
                    <h2>Fampay</h2>
                  <h3>Backend Engineer</h3>
                  <h4>Bangalore</h4>
                  
                  <p>Estimated Salary: ₹18 - 35 LPA</p>
                </div>
              </div>

              <div className="card-body">
                <h1>About Company:</h1>
                
                <p className={showFullText ? '' : 'truncated'}>
                FieldAssist is a top-tier SaaS platform providing cutting-edge Sales Transformation.
It integrates the power of Distribution Management System (DMS) and Sales Force Automation (SFA) to optimize sales efficiency, enable data-driven decision-making, and streamline distribution operations.
 Impact focussed Online DMS Pioneer

- Rs. 20 Cr+ Claims settled monthly



                </p>
                <button className='show-more-button' onClick={handleShowMore}>
                  Show More
                </button>

              </div>
              <div className="card-footer">
               
               <h3>Minimum Experience</h3>
               <h2>2 years</h2>
                <button>Easy Apply</button>

              </div>
            </div>

            


            <div className="card">
              <div className="card-header">
                <span className="date-posted">Posted 16 days ago</span>
              </div>

              <div className="job-details">
                <div className="jobImg">
                <img src="./bird.jpg" alt="Company Logo" className="company-logo" />
                </div>
                
                <div className='jobContent'>
                    <h2>Fampay</h2>
                  <h3>Backend Engineer</h3>
                  <h4>Bangalore</h4>
                  
                  <p>Estimated Salary: ₹18 - 35 LPA</p>
                </div>
              </div>

              <div className="card-body">
                <h1>About Company:</h1>
                
                <p className={showFullText ? '' : 'truncated'}>
                FieldAssist is a top-tier SaaS platform providing cutting-edge Sales Transformation.
It integrates the power of Distribution Management System (DMS) and Sales Force Automation (SFA) to optimize sales efficiency, enable data-driven decision-making, and streamline distribution operations.
 Impact focussed Online DMS Pioneer

- Rs. 20 Cr+ Claims settled monthly



                </p>
                <button className='show-more-button' onClick={handleShowMore}>
                  Show More
                </button>

              </div>
              <div className="card-footer">
               
               <h3>Minimum Experience</h3>
               <h2>2 years</h2>
                <button>Easy Apply</button>

              </div>
            </div>



            <div className="card">
              <div className="card-header">
                <span className="date-posted">Posted 16 days ago</span>
              </div>

              <div className="job-details">
                <div className="jobImg">
                <img src="./bird.jpg" alt="Company Logo" className="company-logo" />
                </div>
                
                <div className='jobContent'>
                    <h2>Fampay</h2>
                  <h3>Backend Engineer</h3>
                  <h4>Bangalore</h4>
                  
                  <p>Estimated Salary: ₹18 - 35 LPA</p>
                </div>
              </div>

              <div className="card-body">
                <h1>About Company:</h1>
                
                <p className={showFullText ? '' : 'truncated'}>
                FieldAssist is a top-tier SaaS platform providing cutting-edge Sales Transformation.
It integrates the power of Distribution Management System (DMS) and Sales Force Automation (SFA) to optimize sales efficiency, enable data-driven decision-making, and streamline distribution operations.
 Impact focussed Online DMS Pioneer

- Rs. 20 Cr+ Claims settled monthly



                </p>
                <button className='show-more-button' onClick={handleShowMore}>
                  Show More
                </button>

              </div>
              <div className="card-footer">
               
               <h3>Minimum Experience</h3>
               <h2>2 years</h2>
                <button>Easy Apply</button>

              </div>
            </div>




            <div className="card">
              <div className="card-header">
                <span className="date-posted">Posted 16 days ago</span>
              </div>

              <div className="job-details">
                <div className="jobImg">
                <img src="./bird.jpg" alt="Company Logo" className="company-logo" />
                </div>
                
                <div className='jobContent'>
                    <h2>Fampay</h2>
                  <h3>Backend Engineer</h3>
                  <h4>Bangalore</h4>
                  
                  <p>Estimated Salary: ₹18 - 35 LPA</p>
                </div>
              </div>

              <div className="card-body">
                <h1>About Company:</h1>
                
                <p className={showFullText ? '' : 'truncated'}>
                FieldAssist is a top-tier SaaS platform providing cutting-edge Sales Transformation.
It integrates the power of Distribution Management System (DMS) and Sales Force Automation (SFA) to optimize sales efficiency, enable data-driven decision-making, and streamline distribution operations.
 Impact focussed Online DMS Pioneer

- Rs. 20 Cr+ Claims settled monthly



                </p>
                <button className='show-more-button' onClick={handleShowMore}>
                  Show More
                </button>

              </div>
              <div className="card-footer">
               
               <h3>Minimum Experience</h3>
               <h2>2 years</h2>
                <button>Easy Apply</button>

              </div>
            </div>





            <div className="card">
              <div className="card-header">
                <span className="date-posted">Posted 16 days ago</span>
              </div>

              <div className="job-details">
                <div className="jobImg">
                <img src="./bird.jpg" alt="Company Logo" className="company-logo" />
                </div>
                
                <div className='jobContent'>
                    <h2>Fampay</h2>
                  <h3>Backend Engineer</h3>
                  <h4>Bangalore</h4>
                  
                  <p>Estimated Salary: ₹18 - 35 LPA</p>
                </div>
              </div>

              <div className="card-body">
                <h1>About Company:</h1>
                
                <p className={showFullText ? '' : 'truncated'}>
                FieldAssist is a top-tier SaaS platform providing cutting-edge Sales Transformation.
It integrates the power of Distribution Management System (DMS) and Sales Force Automation (SFA) to optimize sales efficiency, enable data-driven decision-making, and streamline distribution operations.
 Impact focussed Online DMS Pioneer

- Rs. 20 Cr+ Claims settled monthly



                </p>
                <button className='show-more-button' onClick={handleShowMore}>
                  Show More
                </button>

              </div>
              <div className="card-footer">
               
               <h3>Minimum Experience</h3>
               <h2>2 years</h2>
                <button>Easy Apply</button>

              </div>
            </div>





            <div className="card">
              <div className="card-header">
                <span className="date-posted">Posted 16 days ago</span>
              </div>

              <div className="job-details">
                <div className="jobImg">
                <img src="./bird.jpg" alt="Company Logo" className="company-logo" />
                </div>
                
                <div className='jobContent'>
                    <h2>Fampay</h2>
                  <h3>Backend Engineer</h3>
                  <h4>Bangalore</h4>
                  
                  <p>Estimated Salary: ₹18 - 35 LPA</p>
                </div>
              </div>

              <div className="card-body">
                <h1>About Company:</h1>
                
                <p className={showFullText ? '' : 'truncated'}>
                FieldAssist is a top-tier SaaS platform providing cutting-edge Sales Transformation.
It integrates the power of Distribution Management System (DMS) and Sales Force Automation (SFA) to optimize sales efficiency, enable data-driven decision-making, and streamline distribution operations.
 Impact focussed Online DMS Pioneer

- Rs. 20 Cr+ Claims settled monthly



                </p>
                <button className='show-more-button' onClick={handleShowMore}>
                  Show More
                </button>

              </div>
              <div className="card-footer">
               
               <h3>Minimum Experience</h3>
               <h2>2 years</h2>
                <button>Easy Apply</button>

              </div>
            </div>
           
           
          </div>









          

     




         




          




    </div>


<div className="RightSidebar">

<div className="RightContent">
    <img src="./Profile.jpg" alt="" />
</div>
<div className="EditLogo">
<span  class="material-symbols-outlined">
edit
</span>
<h3>Edit Profile</h3>
</div>
</div>

   </div>
   
   
   
   
   </>
  )
}

export default Home
