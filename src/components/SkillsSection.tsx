import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
  delay: number;
}

const SkillCard = ({ title, skills, icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      className="card h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 border border-gray-100 px-3 py-1 rounded-refined text-gray-700 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{
              backgroundColor: "#f0f9ff",
              borderColor: "#bae6fd",
              scale: 1.03,
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "jQuery",
        "Responsive Design",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "npm",
        "Figma",
        "Photoshop",
        "Adobe XD",
        "Chrome DevTools",
      ],
    },
    {
      title: "Digital Marketing",
      icon: "📊",
      skills: [
        "Google Analytics",
        "A/B Testing",
        "SEO",
        "Google Optimize",
        "Adobe Target",
        "OptinMonster",
        "clarity",
        "datadog",
      ],
    },
    {
      title: "Content Management",
      icon: "📝",
      skills: ["WordPress", "CMS Architecture", "jira"],
    },
  ];

  return (
    <section
      id="skills"
      className="section bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Over my 9+ years of experience, I've developed proficiency in
            various technologies and tools used in modern web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
