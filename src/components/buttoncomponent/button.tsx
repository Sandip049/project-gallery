"use client";

import React, { ReactNode } from "react";

interface ButtonSlideProps {
  title: string;
  iconClass: ReactNode;
  link?: string;
}

const ButtonSlide: React.FC<ButtonSlideProps> = ({ title, iconClass, link = "#" }) => {
  return (
    <div>
      <a className="btn-slide" href={link}>
      <span className="circle">{iconClass}</span>
        <span className="title">{title}</span>
      </a>
    </div>
  );
};

export default ButtonSlide;
