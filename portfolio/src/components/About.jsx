import React from 'react';
import ParallaxSection from './ParallaxSection';
import TypewriterTwoLines from './TypewriterTwoLines';
import Typography from './core/Typography';

const About = () => {
  return (
    <div className="min-h-screen bg-galaxy-dark" id='about'>
      <ParallaxSection 
        image="/images/bg-cosmos.jpg"
        effect='zoom'
      >
        <div className="max-w-4xl mx-auto">
          <Typography variant='h1' font='familyTitle' className="text-5xl font-bold text-transparent bg-gradient-to-r from-fuchsia-900 via-violet-900 to-cyan-300 bg-clip-text text-center mb-12">
            <TypewriterTwoLines fullText="À propos de moi" />
          </Typography> 
          <div className="bg-galaxy-dark/20 p-8 rounded-lg backdrop-blur-sm">
            <Typography font='familyBody' className="text-gray-300 text-lg mb-6">
              Depuis toujours, l'informatique est bien plus qu'un simple outil pour moi : c'est une véritable
              passion ! Fasciné par les possibilités infinies du numérique, j'ai d'abord pris un chemin
              différent en me lançant dans la comptabilité, avec une spécialisation en gestion des paies.
            </Typography>
            <Typography font='familyBody' className="text-gray-300 text-lg mb-6">
              Mais l'envie de coder, de créer et de donner vie à mes idées ne m'a jamais quitté.
            </Typography>
            <Typography font='familyBody' className="text-gray-300 text-lg mb-6">
              En 2024, j'ai donc sauté le pas et obtenu mon titre de Développeur Web et Web Mobile.
              Aujourd'hui, je poursuis mon aventure à Epitech, déterminé à repousser mes limites et à
              explorer toujours plus loin le monde du développement web.
            </Typography>
          </div>
        </div>
      <div className="relative">
        <img 
          src="/images/star.png" 
          alt="photo de moi" 
          className="w-64 h-60 mx-auto relative mb-12 z-10"
        />
      </div>
      </ParallaxSection>

      <ParallaxSection 
        image="/images/bg-cosmos.jpg"
        effect='zoom'
      >
        <div className="max-w-4xl mx-auto">
          <Typography variant='h2' font='familyTitle' className="text-4xl font-bold text-white mb-8 text-center">
            Zoom sur Epitech
          </Typography>
          <div className="bg-galaxy-dark/20 p-8 rounded-lg backdrop-blur-sm">
            <Typography font='familyBody' className="text-gray-300 text-lg mb-6">
              Epitech est une école d'informatique qui propose une pédagogie par projet, basée sur
              l'apprentissage par la pratique. Ici, on apprend en faisant, en se trompant, en recommençant.
              C'est un environnement stimulant, qui pousse à sortir de sa zone de confort et à repousser
              ses limites.
            </Typography>
            <Typography font='familyBody' className="text-gray-300 text-lg mb-6">
              L'objectif ? Devenir un professionnel de l'informatique, capable de s'adapter
              à tous les environnements et de relever tous les défis.
            </Typography>
            <Typography font='familyBody' className="text-gray-300 text-lg mb-6">
              Le MSc Pro, c'est la suite logique : un Bac +5 qui mène au titre d'Architecte des Systèmes
              d'Information, exclusivement en alternance.
            </Typography>
            <Typography font='familyBody' className="text-gray-300 text-lg">
              Envie d'en savoir plus ? Contactez-moi via le formulaire en ligne, je me ferai un plaisir d'échanger avec vous !
            </Typography>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection 
        image="/images/galaxy-bg.jpg"
      >
        <div className="max-w-4xl mx-auto">
          <Typography font='familyTitle' variant='h2' className="text-4xl font-bold text-white mb-24 text-center">
            Ma stack technique
          </Typography>
          <img 
            src="/images/stackTeck.png" 
            alt="stack technique" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-4"
          />
          <Typography font='familyBody' className="text-gray-300 text-lg text-center mt-8">
            ...et bien plus encore à apprendre !
          </Typography>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default About; 