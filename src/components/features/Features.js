import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title  des="My speciality" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development Front-end using React"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
         icon={<FaReact/>}
        />
        <Card
          title="Web Development Back-end using Django"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiDjango />}
        />    
        <Card
          title="Building REST API using Django REST Framework"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<h6>REST</h6>}
        />    
      </div>
    </section>
  );
}

export default Features