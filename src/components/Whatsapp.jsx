import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '916353292499'; 
  const message = encodeURIComponent("Hi! I'm interested in digital marketing services by Lots Eye. Can we discuss this further?");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-30 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-103"
    >
      <FaWhatsapp size={25} />
    </a>
  );
};

export default WhatsAppButton;