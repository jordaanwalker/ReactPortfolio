import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/avatar.png";

const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutSection = styled.section`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  margin: 0 auto 2rem;
  display: block;
  border: 3px solid ${({ theme }) => theme.primary};
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.p`
  line-height: 1.6;
`;

const EducationItem = styled.div`
  margin-bottom: 1.5rem;
`;

const EducationDegree = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const EducationInstitution = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const EducationDate = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 0.5rem;
`;

const ContactButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>

      <ProfileImage src={profileImage} alt="Profile" />

      <AboutSection>
        <SectionTitle>Who I Am</SectionTitle>
        <AboutText>
          Hello! I'm Jordan Walker, a passionate software developer with a focus
          on creating clean, efficient, and user-friendly applications. I enjoy
          solving complex problems and turning ideas into reality through code.
        </AboutText>
        <AboutText>
          With almost 5 years of experience in the industry, I've worked on a
          variety of projects ranging from web applications to mobile apps and
          backend systems. I'm constantly learning and exploring new
          technologies to stay at the forefront of the ever-evolving tech
          landscape.
        </AboutText>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Professional Experience</SectionTitle>

        <ExperienceItem>
          <ExperienceTitle>Senior Web Developer</ExperienceTitle>
          <ExperienceCompany>Stopford Information Systems</ExperienceCompany>
          <ExperienceDate>Septemeber 2020 - Present</ExperienceDate>
          <ExperienceDescription>
            As a Senior Web Developer, I lead the design, development, and
            maintenance of both modern and legacy web and mobile applications.
            My responsibilities include building scalable, responsive frontends
            using React and developing robust backend services with .NET Core
            and RESTful APIs. I also support and enhance existing systems built
            with ASP.NET Web Forms and VB.NET, ensuring smooth integration with
            modern platforms. In addition, I work extensively with T-SQL to
            design, optimize, and maintain SQL Server databases, including
            stored procedures and performance tuning. I collaborate with
            cross-functional teams, follow best practices in coding, testing,
            and deployment, and contribute to continuous improvement across the
            development lifecycle.
          </ExperienceDescription>
        </ExperienceItem>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Education</SectionTitle>

        <EducationItem>
          <EducationDegree>
            BSc Computer Science - 1st Class Honours
          </EducationDegree>
          <EducationInstitution>
            Liverpool John Moores University
          </EducationInstitution>
          <EducationDate>2017 - 2020</EducationDate>
        </EducationItem>

        <EducationItem>
          <EducationDegree>A-Levels - ICT, Maths, Chemistry</EducationDegree>
          <EducationInstitution>Coleraine Grammar School</EducationInstitution>
          <EducationDate>2015 - 2017</EducationDate>
        </EducationItem>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Let's Connect</SectionTitle>
        <AboutText>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out to me
          for any questions or just to say hi!
        </AboutText>
        <ContactButton to="/contact">Get In Touch</ContactButton>
      </AboutSection>
    </AboutContainer>
  );
};

export default AboutPage;
