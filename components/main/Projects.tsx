import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      {/* CHANGED: Gradient from Purple -> Cyan to Green -> Cyan/Emerald */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 py-20">
        Our Services
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpringBoot_Service.jpg"
          title="Java DSA & Spring Boot"
          description="Our Spring Boot training enables students to build scalable and secure backend applications using Java.
The program covers REST APIs, database integration, and modern application architecture.
Students gain hands-on experience through real-world projects and best coding practices."
        />
        <ProjectCard
          src="/Python_Service.png"
          title="Python Programming"
          description="Our Python training builds a strong foundation in programming and problem-solving skills.
Students learn core Python concepts, object-oriented programming, and practical applications.
Hands-on exercises and projects enhance real-world coding experience."
        />
        <ProjectCard
          src="/C_Programming.jpg"
          title="C Programming"
          description="Our C training focuses on core programming concepts and logical problem-solving.
Students learn memory management, pointers, and efficient program design.
The course strengthens fundamentals required for advanced programming languages.
Ideal for beginners."
        />
      </div>
    </div>
  );
};

export default Projects;