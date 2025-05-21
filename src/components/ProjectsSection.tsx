import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  delay: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  delay,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="card overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-gray-100 h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
          <span className="text-4xl">{image}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-refined"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
              viewport={{ once: true }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      title: "A/B Testing Implementation",
      description:
        "Implemented A/B testing on checkout flow that resulted in 15% increase in conversion rate by simplifying the user journey.",
      tags: ["A/B Testing", "UX Design", "React", "Analytics"],
      image: "📊",
    },
    {
      title: "SEO Performance Optimization",
      description:
        "Enhanced SEO strategies for BigRock, resulting in a 30% increase in organic traffic and improved page load speed by 40%.",
      tags: ["SEO", "Performance", "Analytics"],
      image: "🚀",
    },
    {
      title: "Responsive Dashboard Redesign",
      description:
        "Redesigned customer dashboard for HostGator India, improving user retention and reducing support tickets by 25%.",
      tags: ["UI/UX", "Responsive Design", "React", "Bootstrap"],
      image: "📱",
    },
    {
      title: "Analytics Integration",
      description:
        "Implemented comprehensive analytics tracking across ResellerClub India, providing valuable insights for business decisions.",
      tags: ["Google Analytics", "Data Tracking", "JavaScript"],
      image: "📈",
    },
    {
      title: "Cross-browser Compatibility Solution",
      description:
        "Resolved complex cross-browser compatibility issues that affected 15% of users, ensuring consistent experience across all platforms.",
      tags: ["Browser Compatibility", "CSS", "JavaScript"],
      image: "🌐",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimized BigRock India site performance, reducing load times by 40% and improving Core Web Vitals scores significantly.",
      tags: ["Performance", "Core Web Vitals", "Optimization"],
      image: "⚡",
    },
  ];

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Projects & Case Studies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A selection of my recent work and the impact it created.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button onClick={showMoreProjects} className="btn btn-outline">
              View More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
