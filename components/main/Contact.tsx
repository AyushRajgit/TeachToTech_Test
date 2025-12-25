import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden pb-20 py-20 px-10"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact
      </h1>
            <p className="text-lg text-gray-300 max-w-3xl text-center">
                TeachToTech is dedicated to empowering individuals with the skills and knowledge needed to thrive in the ever-evolving tech landscape. Our mission is to provide high-quality, accessible education that bridges the gap between aspiring learners and industry professionals. We believe in fostering a community of continuous learning, innovation, and collaboration, where everyone has the opportunity to succeed in their tech careers.
            </p>
        </section>
    );
};

export default Contact;