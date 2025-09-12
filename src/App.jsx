// src/App.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import referaiImg from "/images/referai.png";
import bunquetBuddyImg from "/images/banquetbuddy.png";
import spotisightImg from "/images/spotisight.png";


function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="py-20 px-6 max-w-5xl mx-auto w-full overflow-x-hidden"
    >
      <motion.h2
        className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

const projects = [
  {
    title: "REFERAI",
    description:
      "AI-powered tool that analyzes soccer plays from multiple angles to determine fouls and card-worthy actions.",
    image: referaiImg,
    link: "https://github.com/RefereeAI/referai",
  },
  {
    title: "BANQUETBUDDY",
    description:
      "Django web app for catering management that connects individuals, employers, and catering services.",
    image: bunquetBuddyImg,
    link: "https://github.com/ISPP-GRUPO-8/BANQUETBUDDY",
  },
  {
    title: "SpotiSight",
    description:
      "React app that uses the Spotify API to display user stats and offers interactive music-related games.",
    image: spotisightImg,
    link: "https://github.com/juamarcan8/SpotiSight2",
  },
];


export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-2">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Javier Rodríguez Cordero
          </motion.h1>
          <nav className="flex gap-4">
            {["about", "experience", "education", "projects", "contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="hover:text-indigo-200 text-white transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="About Me">
        <motion.p
          className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Software Engineer with hands-on experience in Big Data, data
          visualization, and automation, delivering measurable improvements in
          data accessibility and operational efficiency. Currently pursuing a
          Master’s in Artificial Intelligence (UNIR), with strong skills in
          full-stack development, cloud computing, and machine learning.
        </motion.p>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Professional Experience">
        <motion.div
          className="bg-white dark:bg-slate-700 shadow-md rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
            Software Engineering Intern – NTT DATA
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Seville, Spain · Oct 2024 – May 2025
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-200">
            <li>
              Designed and optimized data pipelines and visualization workflows
              for the Endesa Data Services project.
            </li>
            <li>
              Built advanced SQL queries on Amazon Redshift, reducing query
              execution time by 30%.
            </li>
            <li>
              Developed dashboards with QlikSense/QlikView, enhancing decision
              making.
            </li>
            <li>
              Automated workflows with Apache Airflow + Python, cutting manual
              time by 40%.
            </li>
          </ul>
        </motion.div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white dark:bg-slate-700 shadow-md rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-semibold text-indigo-600 dark:text-indigo-300">
              Master’s in Artificial Intelligence – UNIR
            </h4>
            <p className="text-sm text-slate-500">Expected Jun 2026</p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-slate-700 shadow-md rounded-xl p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-semibold text-indigo-600 dark:text-indigo-300">
              Bachelor’s in Software Engineering – Univ. Sevilla
            </h4>
            <p className="text-sm text-slate-500">Jul 2025</p>
          </motion.div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Imagen del proyecto */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="p-4">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  {p.description}
                </p>

                {/* Enlace */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-2 inline-block"
                  >
                    See project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>



      {/* Contact */}
      <Section id="contact" title="Contact">
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="mailto:jarocorodriguez@gmail.com"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            <HiOutlineMail size={20} />
            Email
          </a>
          <a
            href="https://github.com/javierrc8"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/javier-rodr%C3%ADguez-cordero-84710b238"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </motion.div>
      </Section>

      <footer className="text-center text-slate-500 dark:text-slate-400 py-6 text-sm">
        © 2025 Javier Rodríguez Cordero
      </footer>
    </div>
  );
}
