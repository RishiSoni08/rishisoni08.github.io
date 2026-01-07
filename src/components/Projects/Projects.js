import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaFilePdf, FaExpand, FaTimes, FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import './Projects.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_DISPLAY_COUNT = 3;
  const hasMoreProjects = projects.length > INITIAL_DISPLAY_COUNT;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY_COUNT);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const openViewer = (project) => {
    setSelectedProject(project);
    setCurrentPage(1);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setSelectedProject(null);
    setNumPages(null);
    document.body.style.overflow = 'auto';
  };

  const nextPage = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="projects section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Strategic case studies and research documents showcasing data-driven insights and business solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card pdf-card"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => openViewer(project)}
                layout
              >
                {/* PDF Thumbnail */}
                <div className="pdf-thumbnail">
                  <Document
                    file={project.pdfUrl}
                    loading={
                      <div className="pdf-loading">
                        <FaFilePdf className="pdf-icon" />
                        <span>Loading preview...</span>
                      </div>
                    }
                    error={
                      <div className="pdf-error">
                        <FaFilePdf className="pdf-icon" />
                        <span>PDF Document</span>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={1}
                      width={350}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                  
                  {/* Overlay */}
                  <div className="pdf-overlay">
                    <div className="overlay-content">
                      <FaExpand className="expand-icon" />
                      <span>Click to View</span>
                    </div>
                  </div>

                  {/* PDF Badge */}
                  <div className="pdf-badge">
                    <FaFilePdf /> PDF
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {hasMoreProjects && (
          <motion.div
            className="projects-toggle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              className="toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp />
                </>
              ) : (
                <>
                  View More ({projects.length - INITIAL_DISPLAY_COUNT} more) <FaChevronDown />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="pdf-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-backdrop"
              onClick={closeViewer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <h3>{selectedProject.name}</h3>
                <div className="modal-actions">
                  <a
                    href={selectedProject.pdfUrl}
                    download
                    className="modal-btn"
                    title="Download PDF"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaDownload />
                  </a>
                  <a
                    href={selectedProject.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn"
                    title="Open in new tab"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExpand />
                  </a>
                  <button className="modal-btn close-btn" onClick={closeViewer}>
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="modal-body">
                <Document
                  file={selectedProject.pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="pdf-loading-modal">
                      <div className="loader"></div>
                      <span>Loading document...</span>
                    </div>
                  }
                >
                  <Page
                    pageNumber={currentPage}
                    width={Math.min(800, window.innerWidth - 80)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>

              {/* Modal Footer - Pagination */}
              {numPages && (
                <div className="modal-footer">
                  <button
                    className="page-btn"
                    onClick={prevPage}
                    disabled={currentPage <= 1}
                  >
                    ← Previous
                  </button>
                  <span className="page-info">
                    Page {currentPage} of {numPages}
                  </span>
                  <button
                    className="page-btn"
                    onClick={nextPage}
                    disabled={currentPage >= numPages}
                  >
                    Next →
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
