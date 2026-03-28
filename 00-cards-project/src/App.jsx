import React from 'react'
import Card from "./component/card";
import {Bookmark} from 'lucide-react';
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: 50,
    location: "Channi, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.FV_wFyU19BBJ9FG72LkshAHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "TCS",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: 20,
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Infosys",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: 28,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.-WbEq8HRFFN_CYNCLSD97QHaEK?w=314&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Wipro",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: 45,
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.bR9bF8irYBeD2qn67slkkgHaEK?w=282&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Accenture",
    datePosted: "4 days ago",
    post: "Data Analyst",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: 25,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.V2eoBVnxaEjY_GCtCOIjPQHaEK?w=300&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: 40,
    location: "Bangoler, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.RD-i9XYRQuHAXbxvKW2JDQHaEK?w=298&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Cognizant",
    datePosted: "8 days ago",
    post: "QA Tester",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: 18,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.rSQ9DtGcrL8O5zE3Q_wicAHaEK?w=291&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Oracle",
    datePosted: "9 days ago",
    post: "Database Administrator",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.rIP696AnqdWExk3MY6uvSgHaEK?w=293&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Capgemini",
    datePosted: "12 days ago",
    post: "Mobile App Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: 30,
    location: "Mumbai, India"
  }
];






console.log(jobOpenings)
return(
  <div className='parant'>
    {jobOpenings.map(function(elem, idx){
      return<div key={idx}> 
      <Card compney={elem.companyName} post={elem.post} tag={elem.tag} tag2={elem.tag2}  pay={elem.pay} 
      location={elem.location} datePosted={elem.datePosted} brandLogo={elem.brandLogo}/>
        </div>


    })}
  </div>
)



}


export default App