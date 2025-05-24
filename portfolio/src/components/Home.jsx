import React from 'react';
import ParallaxSection from './ParallaxSection';
import TypewriterTwoLines from './TypewriterTwoLines';
import Typography from '../components/core/Typography';

const Home = () => {
  const downloadCV = () => {
    document.location.href = "/CV_Michel_BANCKAERT_v14.pdf";
  };

  const redirectToSectionContact = () => {
    document.location.href = "#contact"
  }
  return (
    <div className="min-h-screen bg-galaxy-dark m-0">
      <ParallaxSection 
        image="/images/bg-cosmos.jpg" 
        effect="zoom"
      >
        <div className="flex flex-col items-center justify-center">
          <Typography font="familyTitle" variant="h1" className="bg-galaxy-dark/20 font-bold text-transparent bg-gradient-to-r from-fuchsia-900 via-violet-900 to-cyan-300 bg-clip-text mb-8">
            <TypewriterTwoLines fullText="Bienvenue sur mon Portfolio" />
          </Typography>
          <Typography font="familyBody" className="lg:text-xl text-md text-gray-300 max-w-2xl text-center mb-12">
            Développeur, recruteur ou simplement curieux et vous souhaitez en savoir plus sur mon parcours,
            mes projets et mes motivations ? Vous pouvez télécharger un CV, me contacter directement ou parcourez
            ce site web.          
          </Typography>
          <div className="lg:flex lg:gap-4 block ml-8">
            <button
              onClick={downloadCV}
              className="bg-blue-800 hover:bg-purple-800 text-white px-8 py-3 rounded-lg transition-colors w-80 mb-12"
            >
              Télécharger un CV à jour
            </button>
            <button
              onClick={redirectToSectionContact}
              className="bg-gray-400 hover:bg-cyan-300 hover:text-black text-white px-8 py-3 rounded-lg transition-colors w-80 h-1/2"
            >
              Me contacter
            </button>
          </div>
          <Typography font="familyBody" className="bg-galaxy-dark/20 text-gray-300 max-w-2xl lg:text-xl text-md text-center mt-20">
          Je suis <strong>développeur web junior</strong> et mon but ici est de vous présenter mes projets et vous décrire mon
          parcours. Vous trouverez également des informations sur mes compétences techniques et mes expériences
          passées. Je vous souhaite une bonne visite sur mon portfolio v3.0 !
          </Typography>
        </div>
      </ParallaxSection>

      <ParallaxSection 
        image="/images/bg-cosmos.jpg"
        effect='zoom'
        
      >
        <div className="flex flex-col items-center justify-center">
          <Typography font='familyTitle' variant="h1" className="lg:text-5xl text-xl bg-galaxy-dark/20 font-bold text-transparent bg-gradient-to-r from-fuchsia-900 via-violet-900 to-cyan-300 bg-clip-text mb-8">
          Mon parcours en image
          </Typography>
          <img
            src="/images/timeline.png" 
            alt="parcours" 
            className="w-auto shadow-lg"
          />
          </div>
      </ParallaxSection>
    </div>
  );
}
export default Home;