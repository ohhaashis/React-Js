import React from 'react'
import Cards from './Components/Cards.jsx'
import User from './Components/User.jsx'
import {Bookmark} from 'lucide-react'

const App = () => {
  const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://i.pinimg.com/736x/94/9d/28/949d28d90592f3f66fe4c344a48abad2.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer, Frontend",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 65,
    location: "Mountain View, USA"
  },
  {
    id: 2,
    brandLogo: "https://i.pinimg.com/736x/7d/ff/4b/7dff4b29ca76133774ec88c1aac9efbd.jpg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 95,
    location: "Mumbai, India"
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/736x/95/b4/9c/95b49c846953fe8f44329f0bafa4dabb.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 80,
    location: "Bengaluru, India"
  },
  {
    id: 4,
    brandLogo: "https://i.pinimg.com/736x/7d/38/b3/7d38b3468bdad37991711c543939bf02.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Support Associate",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: 45,
    location: "Hyderabad, India"
  },
  {
    id: 5,
    brandLogo: "https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1__4x.png",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Senior Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 120,
    location: "Los Gatos, USA"
  },
  {
    id: 6,
    brandLogo: "https://i.pinimg.com/736x/3d/6a/2a/3d6a2ad56bc3403c5cfcc3efe09b741b.jpg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 55,
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/originals/2d/4a/11/2d4a115faf50d0a0fea1a2a88214889c.png",
    companyName: "Uber",
    datePosted: "2 weeks ago",
    post: "Backend Engineer (Go/Java)",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 90,
    location: "Mumbai, India"
  },
  {
    id: 8,
    brandLogo: "https://i.pinimg.com/736x/94/9d/28/949d28d90592f3f66fe4c344a48abad2.jpg",
    companyName: "Google",
    datePosted: "6 days ago",
    post: "UI/UX Intern",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: 35,
    location: "London, UK"
  },
  {
    id: 9,
    brandLogo: "https://i.pinimg.com/1200x/1a/57/38/1a5738a724fcfeab108c3f1b346cc5fe.jpg",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI/ML Research Scientist",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 130,
    location: "Pune, India"
  },
  {
    id: 10,
    brandLogo: "https://i.pinimg.com/736x/7d/38/b3/7d38b3468bdad37991711c543939bf02.jpg",
    companyName: "Amazon",
    datePosted: "12 hours ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 50,
    location: "Seattle, USA"
  }
];
  return (
    <div className = "parent">
   {jobOpenings.map(function(elem){
    return <Cards company = {elem.companyName} post={elem.post}
    tag1 = {elem.tag1}
    tag2 = {elem.tag2}
    pay = {elem.pay}
    brandLogo = {elem.brandLogo}
    datePosted = {elem.datePosted}
    />
   })}
    </div>
  )
}

export default App
