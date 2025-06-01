import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInSection } from '../animations/variants';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "GaN Solubility Modeling",
    image: "/images/gan_solubility.jpg",
    description: "ML-based prediction of GaN solubility using experimental data.",
    details:
      "Developed a predictive model using Random Forest and XGBoost algorithms to estimate GaN solubility in supercritical ammonia. Data was extracted from 19 peer-reviewed publications and processed using regression and feature engineering. Feature interpretation with SHAP revealed critical interactions between pressure, temperature, and mineralizer content. The final model achieved an R² of 0.92 and supported future work on universal solubility equations.",
  },
  {
    title: "Photovoltaics Simulation",
    image: "/images/pv_lab.jpg",
    description: "Simulated and analyzed solar cell IV & EQE data.",
    details:
      "Compared real-world IV curve measurements of a solar cell with simulated curves using SimSalabim software. Identified defect-related discrepancies and optimized simulation parameters. Calculated Jsc from EQE data and analyzed spectral mismatch against AM1.5G. Report included performance error metrics and root causes behind degradation in output.",
  },
  {
    title: "Silica from Rice Husk Ash",
    image: "/images/silica_extraction.jpg",
    description: "Sustainable extraction of silica via alkaline leaching.",
    details:
      "Conducted lab-scale alkaline leaching experiments on rice husk ash to extract silica sustainably. Optimized NaOH concentration and leaching duration to improve yield and purity. Achieved a 15% improvement in extraction efficiency. Final product was characterized and benchmarked against commercial silica. Demonstrated potential for low-cost and eco-friendly material recovery.",
  },
  {
    title: "ANN in Batch Reactor",
    image: "/images/ann_batch_reactor.jpg",
    description: "Neural network model for chemical reaction simulation.",
    details:
      "Developed a feedforward artificial neural network to model batch reactor conversion rates. The model predicted time-dependent concentration profiles of reactants and products based on reaction kinetics. Trained using simulated datasets from kinetic equations, the ANN provided real-time estimation for reactor control and optimization.",
  },
  {
    title: "DC Grid Topologies",
    image: "/images/dc_grid.jpg",
    description: "Explored microgrid DC bus configurations.",
    details:
      "Researched various DC grid topologies for decentralized energy systems, including ring, radial, and hybrid bus configurations. Evaluated performance in terms of voltage stability, energy efficiency, and integration of renewable energy sources. Included case studies using simulation tools and suggested topology-specific control strategies for future smart grid applications.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInSection}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">Some of the work I've done recently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => openModal(project)}
            className="cursor-pointer p-6 rounded-2xl shadow-md border bg-white dark:bg-gray-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInSection}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover rounded-xl mb-4 transition-transform duration-700 hover:scale-105 hover:-translate-y-1"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </motion.section>
  );
};

export default Projects;
