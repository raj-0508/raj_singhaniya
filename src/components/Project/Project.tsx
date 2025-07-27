import React, { useState } from "react";
import Image from "next/image";
import ProjectDetails from "./ProjectDetails";

interface Tag {
  id: string | number;
  path: string;
  name: string;
}

interface ProjectProps {
  title: string;
  description: string;
  subDescription?: string;
  href?: string;
  image: string;
  tags: Tag[];
  setPreview: (image: string | null) => void;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation px-3 py-2 rounded-3xl bg-rose-500 text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Read More
          <Image
            src="/assets/project/arrow-right.svg"
            alt="Arrow"
            width={20}
            height={20}
            className="w-5"
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription ? [subDescription] : []}
          image={image}
          tags={tags}
          href={href ?? ""}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
