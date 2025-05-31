// src/components/Projects.jsx
import React, { useState } from "react";

const projects = [
  {
    title: "Predictive Modeling of GaN Solubility",
    image: "/images/gan_solubility.jpg",
    short: "ML model for solubility prediction using RF, XGB, SHAP",
    long: "Built using Random Forest and XGBoost trained on 19 papers. Used SHAP for interpretability, interaction features for accuracy, and proposed a universal solubility expression.",
  },
  {
    title: "ANN for Batch Reactor Performance",
    image: "/images/ann_batch_reactor.jpg",
    short: "Neural network predicting reactor yield and conversion",
    long: "Modeled temperature–time relationships in batch reactors using ANN. Outperformed conventional kinetic models and enabled nonlinear optimization.",
  },
  {
    title: "Sustainable Silica Extraction",
    image: "/images/silica_extraction.jpg",
    short: "Eco-friendly silica recovery from rice husk ash",
    long: "Tuned alkaline leaching parameters to improve purity and yield by 15%. Supported circular economy through agri-waste valorization.",
  },
  {
    title: "Photovoltaics IV Simulation",
    image: "/images/pv_lab.jpg",
    short: "Simulated & measured IV curves and EQE for solar cells",
    long: "Used SimSalabim to simulate solar cell behavior and verified with experimental data. Calculated Jsc from EQE spectrum and studied defect impacts.",
  },
  {
    title: "DC Grid Topologies",
    image: "/images/dc_grid.jpg",
    short: "Compared AC vs DC architectures for microgrids",
    long: "Analyzed use of DC-native components (PV, batteries, EVs) in decentralized systems. Evaluated efficiency, integration, and control strategies.",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center" data-aos="fade-down">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            onClick={() => setSelected(proj)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-100">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{proj.short}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full project info */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-xl w-full relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{selected.long}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
