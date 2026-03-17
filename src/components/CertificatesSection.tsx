import { motion } from "framer-motion";
import aiCertificatePdf from "../assets/certificate/AI_Poonam_Sameer_Bomble_Certificate.pdf";
import jsCertificatePdf from "../assets/certificate/JS_certification.pdf";

interface Certificate {
  title: string;
  issuer: string;
  pdfPath: string;
}

const certificates: Certificate[] = [
  {
    title: "AI Certification",
    issuer: "Poonam Sameer Bomble",
    pdfPath: aiCertificatePdf,
  },
  {
    title: "JavaScript Certification",
    issuer: "Poonam Sameer Bomble",
    pdfPath: jsCertificatePdf,
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Certificates</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Click any certificate to open the PDF.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.a
              key={certificate.title}
              href={certificate.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 block hover:shadow-medium transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{certificate.issuer}</p>
                </div>
                <span className="text-2xl" aria-hidden="true">
                  📄
                </span>
              </div>
              <p className="text-primary-600 mt-4 font-medium">View PDF</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
