'use client';

import React from 'react'
import Image from 'next/image'

const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/contact.jpg",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/herosec1.jpg",
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/Councelling.jpg",
    },
    {
      id: 4,
      title: "Project Title 4",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/introduction.jpg",
    },
    {
      id: 5,
      title: "Project Title 5",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/photo.jpeg",
    },
    {
      id: 6,
      title: "Project Title 6",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/photo2.webp",
    },
    {
      id: 7,
      title: "Project Title 7",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/photo3.webp",
    },
    {
      id: 8,
      title: "Project Title 8",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/photo4.jpeg",
    },
    {
      id: 9,
      title: "Project Title 9",
      description: "This is a brief description of the project. It explains what the project is about.",
      imageUrl: "/images/photo5.jpeg",
    }
  ];

  function ProjectGallery() {
    return (
      <section className="w-[90%] mx-auto my-12">
        <h1 className="text-center text-3xl font-bold mb-12 capitalize">Responsive image gallery</h1>
        <div className="flex flex-wrap justify-center ">
          {projects.map((project) => (
            <div key={project.id} className="w-[90%] md:w-[50%] lg:w-1/3 px-2">
              <div className="mt-4 mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default ProjectGallery;