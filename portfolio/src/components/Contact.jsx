import React, { useRef } from 'react';
import ParallaxSection from './ParallaxSection';
import emailjs from '@emailjs/browser';
import Toast from './Toast';
import ErrorToast from './ErrorToast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ipgs6u4', 'template_bw56s88', '#contact-form', {
        publicKey: 'Xj7PP0m7s6FuFtlsN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById("alertSuccess").classList.remove("hidden");
        },
        (error) => {
          console.log('FAILED...', error.text);
          document.getElementById("alertError").classList.remove("hidden");
        },
      );
  };

  return (
    <div className="min-h-screen bg-galaxy-dark" id='contact'>
      <ParallaxSection 
        image="/images/bg.jpg"
        effect="zoom"
      >
        <div className="max-w-4xl mx-auto">
          <div id="alertSuccess" className="hidden">
            <Toast message="Votre message a bien été envoyé !" duration={3000} />
          </div>
          <div id="alertError" className="hidden" duration={5000}>
            <ErrorToast message="Une erreur est survenue lors de l'envoi de votre message." />
          </div>

          <div className="grid sm:grid-cols-2 items-start gap-16 p-8 bg-galaxy-dark/80 rounded-lg backdrop-blur-sm">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">Contactez-moi !</h1>
              <p className="text-gray-300 mb-8">
                Convaincu ou pas encore ? Vous souhaitez plus d'informations à mon sujet, envoyez-moi un message 😊.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-white text-lg font-semibold mb-4">Email</h2>
                  <a 
                    href="mailto:michel.banckaert@epitech.eu" 
                    className="flex items-center text-galaxy-light hover:text-galaxy-light/80 transition-colors"
                  >
                    <div className="bg-white/10 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 479.058 479.058">
                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
                      </svg>
                    </div>
                    <div>
                      <small className="block text-sm">Mail</small>
                      <strong>michel.banckaert@epitech.eu</strong>
                    </div>
                  </a>
                </div>

                <div>
                  <h2 className="text-white text-lg font-semibold mb-4">Social</h2>
                  <div className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/michel-banckaert-54-devweb/" 
                      target="_blank"
                      className="flex items-center text-galaxy-light hover:text-galaxy-light/80 transition-colors"
                    >
                      <div className="bg-white/10 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 511 512">
                          <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523z"/>
                        </svg>
                      </div>
                      <div>
                        <small className="block text-sm">LinkedIn</small>
                        <strong>Michel Banckaert</strong>
                      </div>
                    </a>

                    <a 
                      href="https://github.com/MichelBKT" 
                      target="_blank"
                      className="flex items-center text-galaxy-light hover:text-galaxy-light/80 transition-colors"
                    >
                      <div className="bg-white/10 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                        <svg width="20" height="20" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 1.75001C9.35093 1.75001 8.21312 1.97633 7.15152 2.41606C6.08992 2.85579 5.12533 3.50031 4.31282 4.31282C2.67187 5.95377 1.75 8.17936 1.75 10.5C1.75 14.3675 4.26125 17.6488 7.735 18.8125C8.1725 18.8825 8.3125 18.6113 8.3125 18.375V16.8963C5.88875 17.4213 5.3725 15.7238 5.3725 15.7238C4.97 14.7088 4.40125 14.4375 4.40125 14.4375C3.605 13.895 4.4625 13.9125 4.4625 13.9125C5.3375 13.9738 5.80125 14.8138 5.80125 14.8138C6.5625 16.1438 7.84875 15.75 8.3475 15.54C8.42625 14.9713 8.65375 14.5863 8.89875 14.3675C6.95625 14.1488 4.9175 13.3963 4.9175 10.0625C4.9175 9.09126 5.25 8.31251 5.81875 7.69126C5.73125 7.47251 5.425 6.56251 5.90625 5.38126C5.90625 5.38126 6.64125 5.14501 8.3125 6.27376C9.00375 6.08126 9.75625 5.98501 10.5 5.98501C11.2438 5.98501 11.9962 6.08126 12.6875 6.27376C14.3587 5.14501 15.0938 5.38126 15.0938 5.38126C15.575 6.56251 15.2688 7.47251 15.1813 7.69126C15.75 8.31251 16.0825 9.09126 16.0825 10.0625C16.0825 13.405 14.035 14.14 12.0838 14.3588C12.3988 14.63 12.6875 15.1638 12.6875 15.9775V18.375C12.6875 18.6113 12.8275 18.8913 13.2738 18.8125C16.7475 17.64 19.25 14.3675 19.25 10.5C19.25 9.35094 19.0237 8.21312 18.5839 7.15153C18.1442 6.08993 17.4997 5.12533 16.6872 4.31282C15.8747 3.50031 14.9101 2.85579 13.8485 2.41606C12.7869 1.97633 11.6491 1.75001 10.5 1.75001V1.75001Z"/>
                        </svg>
                      </div>
                      <div>
                        <small className="block text-sm">GitHub</small>
                        <strong>Michel Banckaert Profil</strong>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form id="contact-form" className="space-y-4" ref={form} onSubmit={sendEmail}>
              <input 
                type="text" 
                placeholder="Prénom Nom" 
                name="user_name"
                className="w-full rounded-md py-3 px-4 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-galaxy-light"
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                name="user_email"
                className="w-full rounded-md py-3 px-4 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-galaxy-light"
                required
              />
              <input 
                type="text" 
                placeholder="Objet" 
                name="subject"
                className="w-full rounded-md py-3 px-4 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-galaxy-light"
              />
              <textarea 
                placeholder="Ecrivez votre message ici..." 
                rows="6" 
                name="message"
                className="w-full rounded-md py-3 px-4 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-galaxy-light"
                required
              />
              <button 
                type="submit"
                className="w-full bg-galaxy-light text-white py-3 px-6 rounded-md hover:bg-galaxy-light/80 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Contact; 