import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import { featuredProjects } from "../data/projects";

const HeroSection = styled.section`
  padding: 6rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)<{ primary?: boolean }>`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : "transparent"};
  color: ${({ theme, primary }) => (primary ? "#fff" : theme.text)};
  border: 2px solid
    ${({ theme, primary }) => (primary ? theme.primary : theme.border)};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsSection = styled.section`
  padding: 4rem 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ViewAllButton = styled(Link)`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  max-width: 200px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    text-decoration: none;
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Hi, I'm Jordan Walker</HeroTitle>
          <HeroSubtitle>
            A passionate software developer specializing in web and mobile
            development, creating modern and responsive applications.
          </HeroSubtitle>
          <ButtonGroup>
            <Button to="/projects" primary>
              View My Work
            </Button>
            <Button to="/contact">Get In Touch</Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <ProjectsSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
        <ViewAllButton to="/projects">View All Projects</ViewAllButton>
      </ProjectsSection>

      <SkillsSection />
    </>
  );
};

export default HomePage;
