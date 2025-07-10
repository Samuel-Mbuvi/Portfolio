import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { contactDetails, socialMediaUrl } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const { linkdein, github, twitter } = socialMediaUrl;

  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gradient dark:text-light-heading mb-4 ">
        Get in Touch
      </h1>
      <p className="text-center text-lg text-content mb-10">
        Feel free to reach out via email, phone, or social platforms below.
      </p>

      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center space-x-3 text-xl">
          <FaEnvelope className="text-primary" />
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </div>
        <div className="flex items-center justify-center space-x-3 text-xl">
          <FaPhone className="text-primary" />
          <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-2">Connect with me</h2>
        <div className="flex justify-center space-x-6 text-2xl text-primary">
          <a href={linkdein} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
