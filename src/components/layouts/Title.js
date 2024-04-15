import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14 text-center">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="sm:text-3xl md:text-3xl lg:text-4xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title