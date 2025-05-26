import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="hide-on-mobile md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-refined overflow-hidden bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                {/* Replace with actual profile image when available */}
                <span className="text-7xl">👩‍💻</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-refined shadow-soft p-4 flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Senior Software Engineer
            </h3>
            <p className="text-gray-600 mb-4">
              I'm Poonam, a Senior Software Engineer with over 9 years of
              experience in frontend development. I've had the privilege of
              working with major web hosting brands like BigRock, HostGator
              India, Bluehost India, and ResellerClub India, helping them create
              seamless user experiences and impactful digital solutions.
            </p>
            <p className="text-gray-600 mb-4">
              My passion for coding started during my Bachelor's in Information
              Technology, and has grown into a career focused on building
              elegant, efficient, and user-friendly web interfaces. I specialize
              in React, Bootstrap, and jQuery, and have extensive experience
              with SEO strategies, A/B testing tools.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring around whenever I
              have free time. Like to go in mountains or just be with the
              nature..
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                📍 Malad, Mumbai, India
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                📧 poonamthite6@gmail.com
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                🎓 B.E. in Information Technology
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
