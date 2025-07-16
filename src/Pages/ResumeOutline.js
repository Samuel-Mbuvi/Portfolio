import React from "react";
import Certification from "../Components/Certification";
import Work from "../Components/Work";
import { certDetails, eduDetails, personalDetails, skills, workDetails } from "../Details";


function ResumeOutline() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company} 
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>

      {/* Certifications Section */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certifications
        </h1>
        {React.Children.toArray(
          certDetails.map(({ title, organization, location, earnedOn, link }) => (
            <Certification
              title={title}
              organization={organization}
              location={location}
              earnedOn={earnedOn}
              link={link}
            />
          ))
        )}
      </section>

      {/* Skills Section */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Skills
        </h1>
        <ul className="flex flex-wrap gap-2 py-6 text-content">
          {React.Children.toArray(
            skills.map((skill) => (
              <li className="bg-greenbg text-green-text px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </li>
            ))
          )}
        </ul>
      </section>

    </main>
  );
}

export default ResumeOutline;
