import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="http://127.0.0.1:8000/api/posts/2" target="_blank" rel="noopener noreferrer">

          <ProjectsCard
            title="E-commerce Website using Django"
            // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
        </a>

        <ProjectsCard
          title="E-commerce Website using React"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />

      </div>
    </section>
  );
}

export default Projects