import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import AnimationLottie from "../../helper/animation-lottie";
import experience from '/public/lottie/code.json';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24 ">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Favorite Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;