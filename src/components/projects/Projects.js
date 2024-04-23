import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
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
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="E-commerce Website - Django, Bootstrap"
            // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
        </a>
        <a href="https://unstopable-sagar.github.io/react-ecommerce-app/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="E-commerce Website - React, Bootstrap"
            // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </a>
        <a href="https://unstopable-sagar.github.io/net-prime-react/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Simple movies searching app - react and pure css"
            // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
        </a>
        <a href="https://unstopable-sagar.github.io/Spacex-Clone/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Spacex clone - CSS, JavaScript"
            // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectFour}
          />
        </a>

      </div>
    </section>
  );
}

export default Projects