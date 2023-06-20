import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" The project will be implemented using the MERN stack to ensure scalability, performance, and responsiveness. 
          Key features include user authentication and advanced search functionality,add friends, profiles, post sharing, likes, comments. "
          src={projectOne}
        />
        <ProjectsCard
          title="Dashboard Prime React"
          des=" A basic MERN stack dashboard project that displays user signup data with a Line Chart and Pie Chart representing signup counts by month. 
          It also includes a data table showing detailed user information. "
          src={projectTwo}
        />
        <ProjectsCard
          title="Rental Management System"
          des=" Developed a web application which is used to find the house on rent nearby share. 
          Implemented an admin panel that allows administrators to add customers and add their services to see all rental details, including payable amounts, extra charges, and transaction history. "
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects