import React from "react";

const LabChallenges = () => {
  return (
    <section className="container mx-auto max-width section text-dark-heading dark:text-light-heading px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🧪 Lab Challenges</h1>

      {/* Challenge 1 */}
      <div className="mb-10 p-6 bg-white dark:bg-dark-card rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Challenge 1: HTTP Response Splitting</h2>
        <p className="mb-2"><strong>Problem Statement:</strong> Exploit a poorly secured web app by injecting a payload that splits the HTTP response headers.</p>
        <p className="mb-2"><strong>Approach:</strong> Tested the input field for CRLF injection (`%0d%0a`) to manipulate response headers.</p>
        <p className="mb-2"><strong>Tools Used:</strong> Burp Suite, Firefox DevTools</p>
        <p className="mb-2"><strong>Key Lessons:</strong> Always validate input and encode output; CRLF attacks are still possible on misconfigured apps.</p>
        {/* Optional image */}
        {/* <img src="your-screenshot-url.jpg" alt="Challenge 1 Screenshot" className="mt-4 rounded-md" /> */}
      </div>

      {/* Challenge 2 */}
      <div className="mb-10 p-6 bg-white dark:bg-dark-card rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Challenge 2: Port Scanning & Enumeration</h2>
        <p className="mb-2"><strong>Problem Statement:</strong> Identify services running on a given target IP in a CTF lab.</p>
        <p className="mb-2"><strong>Approach:</strong> Performed TCP SYN scan and version detection.</p>
        <p className="mb-2"><strong>Tools Used:</strong> Nmap, Netcat</p>
        <p className="mb-2"><strong>Key Lessons:</strong> Enumeration is critical before exploitation; always scan with different flags and timing options.</p>
      </div>

      {/* Add more challenges below */}
    </section>
  );
};

export default LabChallenges;
