import React, { useState } from 'react';
import ParallaxSection from './ParallaxSection';
import TypewriterTwoLines from './TypewriterTwoLines';
import CardDetails from './CardDetails';
import Card from './core/Card';
import { projects } from '../data/projects';
import Typography from './core/Typography';

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);
      setTimeout(() => {
        const element = document.getElementById('card-details');
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-galaxy-dark" id='projects'>
      <ParallaxSection image="/images/bg.jpg">
        <div className="max-w-3xl mx-auto">
          <Typography variant='h1' font='familyTitle' className="text-5xl font-bold text-transparent bg-gradient-to-r from-fuchsia-900 via-violet-900 to-cyan-300 bg-clip-text text-center mb-8">
            <TypewriterTwoLines fullText="Mes projets" />
          </Typography>
          <Typography font='familyBody' className="text-xl text-gray-300 mb-20">
              Vous trouverez ici une liste de mes projets. Vous pouvez les consulter, les tester,
              et même les cloner pour les modifier à votre guise.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card 
                key={project.id}
                projectId={project.id}
                onClick={handleProjectClick}
              />
            ))}
        </div>

        {selectedProjectId && (
          <div id="card-details" className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-galaxy-dark/80 rounded-xl p-8 backdrop-blur-sm">
              <CardDetails projectId={selectedProjectId} />
            </div>
          </div>
        )}
      </ParallaxSection>
    </div>
  );
};
export default Projects; 