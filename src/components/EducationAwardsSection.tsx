import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  subtitle: string;
  period?: string;
  description?: string;
  icon: string;
  delay: number;
}

const AchievementCard = ({ title, subtitle, period, description, icon, delay }: AchievementCardProps) => {
  return (
    <motion.div
      className="card mb-4 flex"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mr-4 flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
          <span className="text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-primary-600">{subtitle}</p>
        {period && <p className="text-gray-500 text-sm mt-1">{period}</p>}
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    </motion.div>
  );
};

const EducationAwardsSection = () => {
  const education = [
    {
      title: "Bachelor of Engineering in Information Technology",
      subtitle: "Thakur College of Engineering and Technology",
      period: "2012 - 2016",
      description: "Completed degree with focus on programming, web development, and IT infrastructure fundamentals.",
      icon: "🎓"
    },
  ];

  const awards = [
    {
      title: "Rockstar of the Month",
      subtitle: "NewFold Digital",
      period: "2023",
      description: "Recognized for exceptional contribution to frontend development and performance optimization.",
      icon: "🏆"
    },
    {
      title: "RNR Award",
      subtitle: "NewFold Digital",
      period: "2022",
      description: "Received recognition for contributions to successful A/B testing implementation and UX improvements.",
      icon: "🌟"
    },
    // More awards can be added here as needed
  ];

  return (
    <section id="achievements" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Education & Awards</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-6 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                🎓
              </span>
              Education
            </motion.h3>
            
            {education.map((item, index) => (
              <AchievementCard 
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
                icon={item.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-6 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                🏆
              </span>
              Awards & Recognition
            </motion.h3>
            
            {awards.map((item, index) => (
              <AchievementCard 
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
                icon={item.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAwardsSection;